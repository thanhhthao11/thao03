$(document).ready(function(){
  $('ul li').hover(function(){
    $(this).find('ul').stop().slideDown(200);
  }, function(){
    $(this).find('ul').stop().slideUp(200);
  });

  $('ul ul li').hover(function(){
    $(this).css('background-color', '#2f6311');
  }, function(){
    $(this).css('background-color', '#f9f9f9');
  });
});