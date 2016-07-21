 $(document).ready(function(){
  alert("ready for DOM manipulation!");
  // $('#secretBox').css('background-color', 'white');
  // $('<h1>Secret Box!</h1>').appendTo('#secretBox')
  // $('#row1').children().attr('class', 'boxType3')
  // $('#row4').children().last().hide()
  // $('.boxType1').css('background-color', 'white')
  // $('#row2').children().last().prev().prevAll().removeClass()
  // $('#container').children().children().not('#secretBox').css('width', '2px')//
  // $('#container').click(function (){
  //   console.log('x: ' + event.pageX + ', y: ' + event.pageY)
  // })
  // $('<a href="http://www.galvanize.com/">galvanize</a>').appendTo('.boxType1')
  //
  // $('a').on('click', function() {
  //   alert('YOU CAN NEVER LEAVE!');
  //   return false
  // });
  // $('.box').on('click', function(){
  //     $(this).css('background-image', 'url(pup.jpg)')
  //     $(this).on('click', function(){
  //       $(this).css('background-image', 'none')
  //     })
  // })
  $('#container').on('click',function(){
    $(this).css('background-color', 'black')
    $('.box').css('background-color', 'white')
  })

});
