/**
 * インデント構文指定があればコードを変換する
 * @param {String} code 
 * @return String of convert
 */
function convert(code) {
    // プログラム冒頭に「!インデント構文」があれば変換
    const keywords = ['!インデント構文', '!ここまでだるい']
    // 最初の30行をチェック
    const lines = code.split('\n', 30)
    let bConv = false
    lines.forEach((line) => {
        const s9 = line.substr(0, 8).replace('！', '!')
        if (keywords.indexOf(s9) >= 0) {
            bConv = true
            return true
        }
    })
    if (bConv) {
        return convertGo(code)
    }
    return code
}

// ありえない改行マークを定義
const SpecialRetMark = '🌟🌟改行🌟🌟s4j#WjcSb😀/FcX3🌟🌟'

function convertGo(code) {
    const END = 'ここまで‰'
    const code2 = replaceRetMark(code) // 文字列の中などの改行を置換
    const lines = code2.split('\n')
    const lines2 = []
    const indentStack = []
    let lastIndent = 0
    lines.forEach((line) => {
        // trim line
        const lineTrimed = line.replace(/^\s+/, '').replace(/\s+$/, '')
        if (lineTrimed === '') { return }

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
                    if (lineTrimed != '違えば') {
                        lines2.push(makeIndent(n) + END)
                    }
                    lines2.push(line)
                    return
                }
                if (indent < n) {
                    lines2.push(makeIndent(n) + END)
                    continue
                }
            }
        }
    })
    // 残りのインデントを処理
    while (indentStack.length > 0) {
        const n = indentStack.pop()
        lines2.push(makeIndent(n) + END)
    }
    // 特別マーカーを改行に置換
    const code3 = lines2.join('\n')
    return code3.split(SpecialRetMark).join('\n')
}

function makeIndent(count) {
    let s = ''
    for (let i = 0; i < count; i++) {
        s += ' '
    }
    return s
}

/**
 * インデントの個数を数える
 * @param {String}} line 
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
    const len = src.length
    let result = ''
    let eos = ''
    let i = 0
    while (i < len) {
        const c = src.charAt(i)
        // eosか?
        if (eos != '') {
            if (c == eos) {
                eos = ''
            }
            if (c == '\n') {
                result += SpecialRetMark
            } else {
                result += c
            }
            i++
            continue
        }
        // 文字列の改行も無視する
        switch (c) {
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
            case '｛':
                eos = '｝'
                result += c
                i++
                continue
            case '[':
                eos = ']'
                result += c
                i++
                continue
            case '🌴':
                eos = '🌴'
                result += c
                i++
                continue
            case '🌿':
                eos = '🌿'
                result += c
                i++
                continue
            case '【':
                eos = '】'
                result += c
                i++
                continue
            }
        result += c
        i++
    }
    return result
}


module.exports = {
    'convert': convert
}

