$(document).ready(function(){
  $('.click').click(function(){
    console.log('hey');
    $('.place1').css('display', 'none');
    $('.place2').css('display', 'block');
  });
  $('.click2').click(function(){
    $('.place2').css('display', 'none');
    $('.place1').css('display', 'block');
  });
});
