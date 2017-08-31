
$(function () {

  //轮播自动播放
  $('#myCarousel').carousel({
    //自动4秒播放
    interval : 4000,
  });

  //轮播器设置垂直居中
  $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
  $(window).resize(function () {
    var $height = $('.carousel-inner img').eq(0).height() || 
            $('.carousel-inner img').eq(1).height() || 
            $('.carousel-inner img').eq(2).height();
    $('.carousel-control').css('line-height', $height + 'px');
  });

  // 非手机视频播放
  if($('.modal-dialog').width()!=80){
    $('.fvideo').css('width', $('.modal-dialog').width()-1 + 'px');
    $(window).resize(function () {
      $('.fvideo').css('width', $('.modal-dialog').width()-1 + 'px');
    });
  }
  $('.shipin').click(function(){
    document.getElementById('myVideo').play();
  });

  $('.shipin-end').click(function(){
    document.getElementById('myVideo').pause();
  });
  // 激光视频
  if($('.modal-dialog').width()!=80){
    $('.jiguang-fvideo').css('width', $('.modal-dialog').width()-1 + 'px');
    $(window).resize(function () {
      $('.jiguang-fvideo').css('width', $('.modal-dialog').width()-1 + 'px');
    });
  }
  $('.jiguang-shipin').click(function(){
    document.getElementById('jiguang-Video').play();
  });

  $('.jiguang-shipin-end').click(function(){
    document.getElementById('jiguang-Video').pause();
  })


















})