
function htmlEncode(value) {
  return ('<div/>').text(value)
    .html();
}

(function () {


  ('#generate').click(function () {


    let finalURL =
      'https://chart.googleapis.com/chart?cht=qr&chl=' +
      htmlEncode($('#content').val()) +
      '&chs=360x360&chld=L|0'


    ('.qr-code').attr('src', finalURL);
  });
});