console.log('test')

$(function () {
  $('form').on('change', 'input[type="file"]', (event) => {
    let file = event.target.files[0],
        reader = new FileReader(),
        $preview = $(event.target).prev()

    // 画像以外のものはアップロードしないようにする
    if(file.type.indexOf('image') < 0) {
      alert('画像をアップロードしてください。')
      return
    }

    reader.onload = ((file) => {
      return (e) => {
        // 既存のプレビューを削除
        $preview.empty()
        // img タグにアップロードした画像を表示させる
        $preview.attr({
          src: e.target.result,
          title: file.name,
          width: '100%'
        })
        $preview.closest('div').css({
          background: 'none',
          height: 'auto'
        })
      }
    })(file)

    reader.readAsDataURL(file)
  })
})
