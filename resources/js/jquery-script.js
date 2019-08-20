$( document ).ready(function(e) {
if (contactphp != "") {
    var lastItem = $('.side-nav-ele').children().length - 2,
        nextPos = lastItem;
        
        canScroll = true;
        updateNavs(lastItem);
        updateContent(lastItem, lastItem, lastItem);

        $('.header-btn').addClass('is-active');
    
}
if (hirephp != "") {
    var lastItem = $('.side-nav-ele').children().length - 1,
        nextPos = lastItem;
        
        canScroll = true;
        updateNavs(lastItem);
        updateContent(lastItem, lastItem, lastItem);   
}

  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){

      e.preventDefault();
      
      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }

  });

  $('.side-nav-ele li').click(function(){

    if (!($(this).hasClass('is-active'))) {

      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length - 1;

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }

  });

  $('.jump-to-hire').click(function(){

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 1,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
    $('#main-nav-btn').removeClass("toggle");
    $('#overlay').removeClass("toggle");
    $('#main-nav').removeClass("toggle");
    $('#side-nav').removeClass("hidden-nav");
  });

  $('.jump-to-home').click(function(){

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 5,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
    $('#main-nav-btn').removeClass("toggle");
    $('#overlay').removeClass("toggle");
    $('#main-nav').removeClass("toggle");
    $('#side-nav').removeClass("hidden-nav");

  });

  $('.jump-to-about').click(function(){

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 4,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
    $('#main-nav-btn').removeClass("toggle");
    $('#overlay').removeClass("toggle");
    $('#main-nav').removeClass("toggle");
    $('#side-nav').removeClass("hidden-nav");
  });

  $('.jump-to-work').click(function(){

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 3,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
    $('#main-nav-btn').removeClass("toggle");
    $('#overlay').removeClass("toggle");
    $('#main-nav').removeClass("toggle");
    $('#side-nav').removeClass("hidden-nav");

  });
  
  $('.jump-to-contact').click(function(){

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 2,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
    $('#main-nav-btn').removeClass("toggle");
    $('#overlay').removeClass("toggle");
    $('#main-nav').removeClass("toggle");
    $('#side-nav').removeClass("hidden-nav");

  });

  // swipe support for touch devices
  // var targetElement = document.getElementById('viewport'),
  //     mc = new Hammer(targetElement);
  // mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  // mc.on('swipeup swipedown', function(e) {

  //   updateHelper(e);

  // });

  // $(document).keyup(function(e){

  //   if (!($('.outer-nav').hasClass('is-vis'))) {
  //     e.preventDefault();
  //     updateHelper(e);
  //   }

  // });

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav-ele').find('.is-active'),
        curPos = $('.side-nav-ele').children().index(curActive),
        lastItem = $('.side-nav-ele').children().length - 1,
        nextPos = 0;

    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
      if (curPos !== 0){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }

  }

  // sync side and outer navigations
  function updateNavs(nextPos) {

    $('.side-nav-ele').children().removeClass('is-active');
    $('.side-nav-ele').children().eq(nextPos).addClass('is-active');

  }

  // update main content area
  function updateContent(curPos, nextPos, lastItem) {

    $('.main-content-holder').children().removeClass('section--is-active');
    $('.main-content-holder').children().eq(nextPos).addClass('section--is-active');
    $('.main-content-holder .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content-holder .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content-holder').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content-holder').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header-btn').addClass('is-active');
    }
    else {
      $('.header-btn').removeClass('is-active');
    }

  }

});

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 361) {
      $('.work-showcase').addClass('convert-slide');
    } else {
      $('.work-showcase').removeClass('convert-slide');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});