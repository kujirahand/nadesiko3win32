const { NakoIndentError } = require('./nako_errors')
const NakoPrepare = require('./nako_prepare')

/**
 * インデント構文指定があればコードを変換する
 * @param {string} code 
 * @param {string} filename
 * @returns {{ code: string, insertedLines: number[], deletedLines: { lineNumber: number, len: number }[] }}
 */
function convert(code, filename) {
    // 最初の30行をチェック
    if (isIndentSyntaxEnabled(code)) {
        return convertGo(code, filename)
    }
    return { code, insertedLines: [], deletedLines: [] }
}

// ありえない改行マークを定義
const SpecialRetMark = '🌟🌟改行🌟🌟s4j#WjcSb😀/FcX3🌟🌟'

/**
 * @param {string} code
 * @returns {boolean}
 */
function isIndentSyntaxEnabled(code) {
    // プログラム冒頭に「!インデント構文」があればインデント構文が有効
    const keywords = ['!インデント構文', '!ここまでだるい']
    const lines = code.split('\n', 30)
    for (const line of lines) {
        const s9 = line.substr(0, 8).replace('！', '!')
        if (keywords.indexOf(s9) >= 0) {
            return true
        }
    }
    return false
}

/**
 * ソースコードのある1行の中のコメントを全て取り除く。
 * 事前にreplaceRetMarkによって文字列や範囲コメント内の改行文字が置換されている必要がある。
 * @param {string} src
 * @return {string}
 */
function removeCommentsFromLine(src) {
    const prepare = new NakoPrepare()  // `※`, `／/`, `／＊` といったパターン全てに対応するために必要
    const len = src.length
    let result = ''
    let eos = ''
    let i = 0
    let isComment = false
    while (i < len) {
        const c = src.charAt(i)
        const ch2 = src.substr(i, 2)
        const cPrepared = prepare.convert1ch(c)
        const ch2Prepared = ch2.split('').map((c) => prepare.convert1ch(c)).join("")

        // eosか?
        if (eos != '') {
            // srcのi文字目以降がeosで始まるなら文字列を終了、そうでなければ1文字進める
            if (eos === (eos.length === 1 ? cPrepared : ch2Prepared)) {
                if (!isComment) {
                    result += src.substr(i, eos.length)
                }
                i += eos.length
                isComment = false
                eos = ''
            } else {
                if (!isComment) {
                    result += c
                }
                i++
            }
            continue
        }
        // 文字列の改行も無視する
        switch (cPrepared) {
            case '"':
            case '\'':
                eos = c
                result += c
                i++
                continue
            case '「':
                eos = '」'
                result += c
                i++
                continue
            case '『':
                eos = '』'
                result += c
                i++
                continue
            case '“':
                eos = '”'
                result += c
                i++
                continue
            case '{':
                eos = '}'
                result += c
                i++
                continue
            case '[':
                eos = ']'
                result += c
                i++
                continue
        }

        switch (ch2) {
            case '🌴':
                eos = '🌴'
                result += ch2
                i += 2
                continue
            case '🌿':
                eos = '🌿'
                result += ch2
                i += 2
                continue
        }

        // 行コメント
        if (cPrepared === '#') {
            eos = '\n'
            isComment = true
            i++
            continue
        }
        if (ch2Prepared === '//') {
            eos = '\n'
            isComment = true
            i += 2
            continue
        }

        // 範囲コメント
        if (ch2Prepared === '/*') {
            eos = '*/'
            isComment = true
            i += 2
            continue
        }

        result += c
        i++
    }
    return result
}

/**
 * @param {string} code
 * @param {string} filename
 * @returns {{ code: string, insertedLines: number[], deletedLines: { lineNumber: number, len: number }[] }}
 */
function convertGo(code, filename) {
    /** @type {number[]} */
    const insertedLines = []
    /** @type {{ lineNumber: number, len: number }[]} */
    const deletedLines = []

    const END = 'ここまで‰'
    const code2 = replaceRetMark(code) // 文字列の中などの改行を置換
    const lines = code2.split('\n')
    /** @type {string[]} */
    const lines2 = []
    /** @type {number[]} */
    const indentStack = []
    let lastIndent = 0

    let lineCount = -1
    lines.forEach((line) => {
        lineCount += line.split(SpecialRetMark).length
        // trim line
        if (/^[ 　・\t]*$/.test(line)) {
            deletedLines.push({ lineNumber: lines2.length, len: line.length })
            return
        }
        const lineTrimed = removeCommentsFromLine(line).replace(/^[ 　・\t]+/, '').replace(/\s+$/, '')
        if (lineTrimed === '') {
            lines2.push(line)
            return
        }
        if (lineTrimed === 'ここまで') {
            throw new NakoIndentError(`インデント構文が有効化されているときに『ここまで』を使うことはできません。`, lineCount, filename)
        }

        // check indent
        const indent = countIndent(line)
        if (lastIndent == indent) {
            lines2.push(line)
            return
        }

        // indent
        if (lastIndent < indent) {
            indentStack.push(lastIndent)
            lastIndent = indent
            lines2.push(line)
            return
        }
        // unindent
        if (lastIndent > indent) {
            // 5回
            //   3回
            //     1を表示
            //   |
            // |
            lastIndent = indent
            while (indentStack.length > 0) {
                const n = indentStack.pop()
                if (n == indent) {
                    if (lineTrimed.substr(0, 3) != '違えば') {
                        insertedLines.push(lines2.length)
                        lines2.push(makeIndent(n) + END)
                    }
                    lines2.push(line)
                    return
                }
                if (indent < n) {
                    insertedLines.push(lines2.length)
                    lines2.push(makeIndent(n) + END)
                    continue
                }
            }
        }
    })
    // 残りのインデントを処理
    while (indentStack.length > 0) {
        const n = indentStack.pop()
        insertedLines.push(lines2.length)
        lines2.push(makeIndent(n) + END)
    }
    // 特別マーカーを改行に置換
    /** @type {string[]} */
    const lines3 = []
    for (let i = 0; i < lines2.length; i++) {
        if (lines2[i].includes(SpecialRetMark)) {
            const lines4 = lines2[i].split(SpecialRetMark)

            // 置換されたマーカーの数だけ、それ以降の行数をずらす。
            // unindentによって挿入された行がSpecialRetMarkを含むことはない。
            for (let j = 0; j < insertedLines.length; j++) {
                if (lines3.length < insertedLines[j]) {
                    insertedLines[j] += lines4.length - 1
                }
            }
            for (let j = 0; j < deletedLines.length; j++) {
                if (lines3.length < deletedLines[j].lineNumber) {
                    deletedLines[j].lineNumber += lines4.length - 1
                }
            }

            lines3.push(...lines4)
        } else {
            lines3.push(lines2[i])
        }
    }

    return { code: lines3.join("\n"), insertedLines, deletedLines }
}

function makeIndent(count) {
    let s = ''
    for (let i = 0; i < count; i++) {
        s += ' '
    }
    return s
}

/**
 * インデント部分を取り出す
 * @param {string} line
 * @returns {string}
 */
function getIndent(line) {
    //@ts-ignore
    return /^([ 　・\t]*)/.exec(removeCommentsFromLine(line))[1]
}

/**
 * インデントの個数を数える
 * @param {string} line 
 */
function countIndent(line) {
    let cnt = 0
    for (let i = 0; i < line.length; i++) {
        const ch = line.charAt(i)
        if (ch == ' ') {
            cnt++
            continue
        }
        if (ch == '　') {
            cnt += 2
            continue
        }
        if (ch == '・') {
            cnt += 2
            continue
        }
        if (ch == '\t') {
            cnt += 4
            continue
        }
        break
    }
    return cnt
}


function replaceRetMark(src) {
    const prepare = new NakoPrepare()  // `※`, `／/`, `／＊` といったパターン全てに対応するために必要
    const len = src.length
    let result = ''
    let eos = ''
    let i = 0
    while (i < len) {
        const c = src.charAt(i)
        const ch2 = src.substr(i, 2)
        const cPrepared = prepare.convert1ch(c)
        const ch2Prepared = ch2.split('').map((c) => prepare.convert1ch(c)).join("")

        // eosか?
        if (eos != '') {
            // srcのi文字目以降がeosで始まるなら文字列を終了、そうでなければ1文字進める
            if (eos === (eos.length === 1 ? cPrepared : ch2Prepared)) {
                result += src.substr(i, eos.length)
                i += eos.length
                eos = ''
            } else {
                if (c == '\n') {
                    result += SpecialRetMark
                } else {
                    result += c
                }
                i++
            }
            continue
        }
        // 文字列の改行も無視する
        switch (cPrepared) {
            case '"':
            case '\'':
                eos = c
                result += c
                i++
                continue
            case '「':
                eos = '」'
                result += c
                i++
                continue
            case '『':
                eos = '』'
                result += c
                i++
                continue
            case '“':
                eos = '”'
                result += c
                i++
                continue
            case '{':
                eos = '}'
                result += c
                i++
                continue
            case '[':
                eos = ']'
                result += c
                i++
                continue
        }

        switch (ch2) {
            case '🌴':
                eos = '🌴'
                result += ch2
                i += 2
                continue
            case '🌿':
                eos = '🌿'
                result += ch2
                i += 2
                continue
        }

        // 行コメント
        if (cPrepared === '#') {
            eos = '\n'
            result += c
            i++
            continue
        }
        if (ch2Prepared === '//') {
            eos = '\n'
            result += ch2
            i += 2
            continue
        }

        // 範囲コメント
        if (ch2Prepared === '/*') {
            eos = '*/'
            result += ch2
            i += 2
            continue
        }

        result += c
        i++
    }
    return result
}

/**
 * コードのインデントの構造を取得する。
 * 空白行や複数行にまたがる構文を考慮する。
 * インデント構文が有効化されていない場合にも使われる。
 * @param {string} code
 */
function getBlockStructure(code) {
    /** @type {{ lines: number[], pairs: [number, number][], parents: (number | null)[], spaces: string[] }} */
    const result = {
        lines: [],  // 各行のインデント量
        pairs: [],
        parents: [],  // 各行の親の行
        spaces: [],  // 各行のインデントの文字列
    }

    const lines = replaceRetMark(code).split('\n')

    /** @type {number[]} */
    const stack = []
    let lineCount = 0
    let prev = countIndent(lines[0])
    for (const line of lines) {
        const numLines = line.split(SpecialRetMark).length
        const line2 = removeCommentsFromLine(line)
        const current = (line2.replace(/^[ 　・\t]+/, '') === '')
            ? prev
            : countIndent(line2)
        result.lines.push(...Array(numLines).fill(current))
        //@ts-ignore
        result.spaces.push(...Array(numLines).fill(getIndent(line2)))

        if (prev < current) {
            stack.push(lineCount - 1)
        } else if (prev > current) {
            const last = stack.pop()
            if (last !== undefined) {
                result.pairs.push([last, lineCount])
            }
        }

        const parent = stack[stack.length - 1] !== undefined ? stack[stack.length - 1] : null
        result.parents.push(...Array(numLines).fill(parent))

        prev = current
        lineCount += numLines
    }

    // スタックが余ったらコードの末尾とペアにする。
    for (const item of stack) {
        result.pairs.push([item, lineCount])
    }

    return result
}

module.exports = {
    convert,
    getBlockStructure,
    getIndent,
    countIndent,
    isIndentSyntaxEnabled,
}

