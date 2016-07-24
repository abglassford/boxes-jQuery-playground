//Un-comment to see functionality

//Exercise 1

 $(document).ready(function(){
  alert("ready for DOM manipulation!");

//Exercise 2
//1. --------------------------------------------
  // $('#secretBox').css('background-color', 'white');
  // $('<h1>Secret Box!</h1>').appendTo('#secretBox')
//2. --------------------------------------------
  // $('#row1').children().attr('class', 'boxType3')
//3. --------------------------------------------
  // $('#row4').children().last().hide()
//4. --------------------------------------------
  // $('.boxType1').css('background-color', 'white')
//5. --------------------------------------------
  // $('#row2').children().last().prev().prevAll().removeClass()
//6. --------------------------------------------
  // $('#container').children().children().not('#secretBox').css('width', '2px')//

//Exercise 3
//1. --------------------------------------------
  // $('#container').click(function (){
  //   console.log('x: ' + event.pageX + ', y: ' + event.pageY)
  // })
//2. --------------------------------------------
  // $('<a href="http://www.galvanize.com/">galvanize</a>').appendTo('.boxType1')
  //
  // $('a').on('click', function() {
  //   alert('YOU CAN NEVER LEAVE!');
  //   return false
  // });
//3. --------------------------------------------
  // $('.box').on('click', function(){
  //     $(this).css('background-image', 'url(pup.jpg)')
  //     $(this).on('click', function(){
  //       $(this).css('background-image', 'none')
  //     })
  // })
//4. --------------------------------------------
//   $('#container').on('click',function (event) {
//     if($(event.target).hasClass('box')) {
//       $(event.target).css('background-color', 'white')
//       $('#container').css('background-color', 'black')
//     } else if ($(this).is('#container')) {
//         $(this).css('background-color', 'limeGreen')
//     }
//   })
// });
