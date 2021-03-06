$(document).ready(function(){
  gridSetup();
  colorSquare();
  watchClear();
})

function gridSetup() {

  const container = $('.container');

  for (var i = 1; i <= 16; i++) {
    const row = `<div class='row' id='r${i}'></div>`
    container.append(row);
  }

  for (var i = 1; i <=16; i++) {
    let j = 1;
    for (var k = 1; k <=16; k++) {
      let square = `<div class='square'></div>`
      $(`#r${i}`).append(square);
      j++;
    }
  }
}

function colorSquare() {
  $('.square').hover(function() {
    $(this).removeClass('square');
    $(this).addClass('square-color');
  });
}

function watchClear() {
  $('button').on('click', function() {
    $('.square-color').addClass('square');
    $('.square-color').removeClass('square-color');
  });
}
