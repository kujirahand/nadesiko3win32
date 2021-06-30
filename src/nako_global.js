const NakoColors = require('./nako_colors')

/**
 * コンパイルされたなでしこのプログラムで、グローバル空間のthisが指すオブジェクト
 */
class NakoGlobal {
  /**
   * @param {import('./nako3')} compiler
   * @param {import('./nako_gen')} gen
   */
  constructor(compiler, gen) {
    // ユーザーのプログラムから編集される変数
    this.__locals = {}
    this.__varslist = [
      { ...compiler.__varslist[0] }, // system
      { ...compiler.__varslist[1] }, // global
      { ...compiler.__varslist[2] }, // local [2][3][4][5] ...
    ]
    this.index = 0
    this.nextIndex = -1
    this.__code = []
    this.__callstack = []
    this.__stack = []
    this.__labels = []
    this.__genMode = gen.genMode

    // PluginSystemとdestroy()から参照するため
    this.__module = { ...compiler.__module } // shallow copy
    this.pluginfiles = { ...compiler.pluginfiles }

    // PluginWorkerでユーザー定義関数のJavaScriptコードをworkerのコンパイラのインスタンスへコピーするため
    this.gen = gen

    // 以下のメソッドで使うため
    this.logger = compiler.logger
    this.compiler = compiler
  }

  clearLog () {
    this.__varslist[0]['表示ログ'] = ''
  }

  get log () {
    let s = this.__varslist[0]['表示ログ']
    s = s.replace(/\s+$/, '')
    return s
  }

  /**
   * 「ナデシコ」命令のためのメソッド
   * @param {string} code
   * @param {string} fname
   * @param {Partial<import('./nako3').CompilerOptions & { resetLog: boolean }>} opts
   * @param {string} [preCode]
   */
  runEx(code, fname, opts, preCode = '') {
    // スコープを共有して実行
    return this.compiler._runEx(code, fname, opts, preCode, this)
  }

  /**
   * テスト実行のためのメソッド
   * @param {{ name: string, f: () => void }[]} tests
   */
  _runTests(tests) {
    let text = `${NakoColors.color.bold}テストの実行結果${NakoColors.color.reset}\n`
    let pass = 0
    let numFailures = 0
    for (const t of tests) {
      try {
        t.f()
        text += `${NakoColors.color.green}✔${NakoColors.color.reset} ${t.name}\n`
        pass++
      } catch (err) {
        text += `${NakoColors.color.red}☓${NakoColors.color.reset} ${t.name}: ${err.message}\n`
        numFailures++
      }
    }
    if (numFailures > 0) {
      text += `${NakoColors.color.green}成功 ${pass}件 ${NakoColors.color.red}失敗 ${numFailures}件`
    } else {
      text += `${NakoColors.color.green}成功 ${pass}件`
    }
    this.numFailures = numFailures
    this.logger.send('stdout', text)
  }

  /**
   * 毎プラグインの「!クリア」関数を実行
   */
   clearPlugins () {
    const clearName = '!クリア'
    for (const pname in this.pluginfiles) {
      const po = this.__module[pname]
      if (po[clearName] && po[clearName].fn) {
        po[clearName].fn(this)
      }
    }
  }

  /**
   * 各種リセット処理
   */
  reset () {
    this.clearPlugins()
  }

  destroy () {
    this.reset()
  }
}

module.exports = NakoGlobal
