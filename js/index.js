$(function(){
  // header

  $(window).on('scroll', function(e){
    const scroll = $('html, body').scrollTop()    
    if (scroll > 0) { $('#main').css('backgroundColor', '#FFF') }
    else { $('#main').css('backgroundColor', 'transparent') }
  })


  // main - box01
  
  $('#link>a').click(function() {
    // 하단 버튼
    $('#link>a').removeClass('active');
    $(this).addClass('active')
    // 슬라이드
    let width = -1*($(this).index())*$('#box01>ul>li').width()
    console.log(width)
    $('#box01>ul').animate({left: width + "px"}, 500)   
    //
    return false
  })


  // main - box02 

  const box02Slide = setInterval(function() {
    $('.slide>ul>li:last-child').prependTo('.slide>ul')
  }, 3000)

  $('.slide>p>.up').click(function() {
    $('.slide>ul>li:last-child').prependTo('.slide>ul')
    clearInterval(box02Slide)
  })

  $('.slide>p>.down').click(function() {
    $('.slide>ul>li:first-child').appendTo('.slide>ul')
    clearInterval(box02Slide)
  })


  // main - box03

  const box03Slide = setInterval(function() {
    $('.all>ul:last-child').prependTo('.all')
  }, 3000)

  $('.control_btn>.left').click(function() {
    $('.all>ul:last-child').prependTo('.all')
    clearInterval(box03Slide)
  })

  $('.control_btn>.right').click(function() {
    $('.all>ul:first-child').appendTo('.all')
    clearInterval(box03Slide)
  })
  

  // main - box05

  $('#box05 figure').hover(
    function() {
    $('figcaption', this).fadeIn(800).css('display', 'flex')
    },
    function() {
      $('figcaption', this).hide()
    }
  )  

  // aside
  
  $('#top').click(function() {
    $('html, body').animate({scrollTop: 0}, 1500)
  })

  $('#bottom').click(function(){
    $('html, body').animate({scrollTop: $('html, body').height()}, 1500)
  })


});