const assert = require('assert')
const NakoCompiler = require('../src/nako3')

describe('calc_test.js', () => {
  const nako = new NakoCompiler()
  // nako.debug = true
  // nako.debugParser = true
  // nako.debugLexer = true
  const cmp = (code, res) => {
    if (nako.debug) {
      console.log('code=' + code)
    }
    assert.equal(nako.runReset(code).log, res)
  }
  it('basic', () => {
    cmp('3を表示', '3')
    cmp('3.14を表示', '3.14')
    cmp('0.5e+3を表示', '500')
  })
  it('足し算', () => {
    cmp('3+5を表示', '8')
  })
  it('引き算', () => {
    cmp('10-5を表示。', '5')
    cmp('１０－５を表示。', '5')
  })
  it('掛け算', () => {
    cmp('1+2*3を表示', '7')
  })
  it('連続演算：して', () => {
    cmp('3に5を足して表示', '8')
  })
  it('連続演算：て-3に5を掛けて表示', () => {
    cmp('3に5を掛けて表示', '15')
  })
  it('配列', () => {
    cmp('a=[];a[1]=30;a[1]を表示', '30')
    cmp('a=[];a【1】=30;a[1]を表示', '30')
  })
  it('ネスト配列', () => {
    cmp('a=[[1,2,3], [4,5,6]];a[1][1]を表示', '5')
  })
  it('ネスト配列で、マイナスを含むときのバグ修正 (#276)', () => {
    cmp('a=[[-1, -1], [1, -1]];a[0][0]を表示', '-1')
  })
  it('オブジェクト', () => {
    cmp('a={};a[\'a\']=30;a[\'a\']を表示', '30')
  })
  it('階乗', () => {
    cmp('2^3を表示', '8')
  })
  it('否定', () => {
    cmp('(!1)を表示', '0')
    cmp('(!0)を表示', '1')
    cmp('(!オン)を表示', '0')
    cmp('(!オフ)を表示', '1')
  })
  it('配列簡易記号', () => {
    cmp('A=[];A@0=5;A@0を表示', '5')
    cmp('A=[];A＠0=5;A＠1=6;AをJSONエンコードして表示', '[5,6]')
  })
  it('JSON配列-改行あり', () => {
    cmp('A=[\n0,\n1,\n2,\n3];A@2を表示', '2')
  })
  it('JSON配列-カンマ省略', () => {
    cmp('A=[1 2 3 4 5];AをJSONエンコードして表示', '[1,2,3,4,5]')
  })
  it('JSON配列-ネスト', () => {
    cmp('A=[[1,2,3],[4,5,6]];AをJSONエンコードして表示', '[[1,2,3],[4,5,6]]')
  })
  it('JSONオブジェクト-改行あり', () => {
    cmp('A={\n"殿":"男","姫":"女"\n};A@"殿"を表示', '男')
  })
  it('JSONオブジェクト-値を省略した場合', () => {
    cmp('N={"hoge"};N["hoge"]を表示。', 'hoge')
    cmp('N={"hoge","fuga","bar"};N["bar"]を表示。', 'bar')
    cmp('N={32,45,66};N[45]を表示。', '45')
  })
  it('JSONオブジェクト-キーを文字列で囲わなかった場合', () => {
    cmp('N={hoge:30};N["hoge"]を表示。', '30')
  })
  it('文字列→数値への暗黙的変換', () => {
    cmp('A="5";B="50";A+Bを表示', '55')
    cmp('"100"/"2"を表示', '50')
    cmp('"2"*"3"を表示', '6')
    cmp('"100"%"10"を表示', '0')
  })
  it('空配列テスト', () => {
    cmp('A=空配列;A@0=30;A@1=50;Aを「:」で配列結合して表示', '30:50')
    cmp('A=空配列;B=空配列;A@0=30;A@1=50;B@0=1;Bを「:」で配列結合して表示', '1')
  })
  it('単項演算子 minus number', () => {
    cmp('-1*5を表示', '-5')
    cmp('5*-1を表示', '-5')
  })
  it('単項演算子 minus word', () => {
    cmp('A=1;5*-Aを表示', '-5')
  })
  it('論理演算', () => {
    cmp('BMI=25;A=((25 ≦ BMI) かつ (BMI < 30));Aを表示', 'true')
    cmp('BMI=25;A=((18.5 > BMI) または (BMI > 30));Aを表示', 'false')
  })
  it('カッコ内の関数呼び出し', () => {
    cmp('N=("ABC"の文字数);Nを表示。', '3')
  })
  it('文字列の埋め込み変数加算', () => {
    cmp('N1=30;「--{N1+1}--」を表示', '--31--')
  })
  it('文字列の埋め込み変数減算', () => {
    cmp('N1=30;「--{N1-1}--」を表示', '--29--')
  })
  it('文字列の埋め込み変数乗算', () => {
    cmp('N1=30;「--{N1*2}--」を表示', '--60--')
  })
  it('文字列の埋め込み変数除算', () => {
    cmp('N1=30;「--{N1/2}--」を表示', '--15--')
  })
  it('文字列の埋め込み変数剰余', () => {
    cmp('N1=30;「--{N1%2}--」を表示', '--0--')
  })
  it('文字列の埋め込み変数冪乗', () => {
    cmp('N1=2;「--{N1^3}--」を表示', '--8--')
  })
  it('比較演算子', () => {
    cmp('A=1>5;Aを表示', 'false')
  })
  it('ビット演算', () => {
    cmp('A=0xF0>>4;Aを表示', '15')
    cmp('A=0xF<<4;Aを表示', '240')
  })
})
