window.addEventListener('load', function () {
  navigator.nako3.setFunc('表示', [['と', 'を']], (s) => {
    console.log('[LOG]', s)
  }, true)
  navigator.nako3.runNakoScript()
})
