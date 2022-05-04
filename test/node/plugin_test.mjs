import assert from 'assert'
import path from 'path'
import { CNako3 } from '../../src/cnako3mod.mjs'

// __dirname のために
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('plugin_test', () => {
  const nako = new CNako3()
  const scope1 = path.join(__dirname, 'scope1.nako3')
  const scope2 = path.join(__dirname, 'scope2.nako3')
  // nako.logger.addListener('trace', ({ browserConsole }) => { console.log(...browserConsole) })
  nako.silent = true
  const cmp = async (code, res) => {
    nako.logger.debug('code=' + code)
    const ret = await nako.run(code)
    if (ret.log != res) {
        console.log('[ERROR]', ret.log, '!=', res)
    }
    assert.strictEqual(ret.log, res)
  }
  it('JS「取り込む」', async () => {
    const plug = path.join(__dirname, '..', '..', 'src', 'plugin_keigo.mjs')
    await cmp(`!「${plug}」を取り込む。\n拝啓。お世話になっております。礼節レベル取得して表示。`, '1')
  })
  it('NAKO3スコープテスト1__グローバル変数', async () => {
    await cmp(`!「${scope1}」を取り込む。\n朝食値段を表示。`, '1000')
    await cmp(`!「${scope1}」を取り込む。\nscope1__スコープ取得して表示。`, 'scope1')
  })
  it('NAKO3スコープテスト2__グローバル変数', async () => {
    await cmp(`!「${scope2}」を取り込む。\n朝食値段を表示。`, '2000')
    await cmp(`!「${scope2}」を取り込む。\nscope2__スコープ取得して表示。`, 'scope2')
  })
  it('NAKO3スコープテスト1+2__関数', () => {
    const scope = `!「${scope1}」を取り込む。\n!「${scope2}」を取り込む。\n`
    cmp(`${scope};scope1__朝食取得して表示。`, '1000')
    cmp(`${scope};scope2__朝食取得して表示。`, '2000')
  })
})

