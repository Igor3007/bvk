

  window.onload = function() {

    
  /******************************************** 
  * perf-to-animate
  ********************************************/

    document.querySelector('body').classList.remove('perf-no-animation')

  /******************************************** 
  * load swiper
  ********************************************/

    

    function loadScript(url, callback){
      var script = document.createElement("script");
      
      if (script.readyState){  // IE
          script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||
                  script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
          }
          };
      } else {  // Р”СЂСѓРіРёРµ Р±СЂР°СѓР·РµСЂС‹
          script.onload = function(){
          callback();
          };
      }
      
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
  }

  loadScript('/js/lib/glide.min.js', function(){

  /******************************************** 
  * data-glide="fb"
  ********************************************/

   var fb = new Glide('[data-glide="fb"]', {
    type: 'slider',
    gap: 0,
    perView: 1,
    // breakpoints: {
    //   767: {
    //     perView: 1,
    //   },
    //   1200: {
    //     perView: 2,
    //     gap: 30,
    //   }
       
    // },
  })

  fb.mount();

  // document.querySelector('[data-glide-prev="fb"]').addEventListener('click', function(){
  //   fb.go('<')
  // })
  // document.querySelector('[data-glide-next="fb"]').addEventListener('click', function(){
  //   fb.go('>')
  // })

  // /* event */

  // let totalSlide = document.querySelectorAll('[data-glide="fb"] .glide__slide:not(.glide__slide--clone)').length
  // document.querySelector('.fb-counter-total').innerHTML = totalSlide

  // fb.on(['mount', 'run'], function(event) {
  //   document.querySelector('.fb-counter-current').innerHTML = (fb._i + 1)
  // })

  /******************************************** 
  * data-glide="shop"
  ********************************************/

   var shop = new Glide('[data-glide="shop"]', {
    type: 'carousel',
    gap: 40,
    perView: 4,
    breakpoints: {
      767: {
        perView: 1,
      },
      1200: {
        perView: 2,
        gap: 30,
      }
       
    },
  })

  shop.mount();

  // document.querySelector('[data-glide-prev="shop"]').addEventListener('click', function(){
  //   shop.go('<')
  // })
  // document.querySelector('[data-glide-next="shop"]').addEventListener('click', function(){
  //   shop.go('>')
  // })

  // /* event */

  // let totalSlide = document.querySelectorAll('[data-glide="shop"] .glide__slide:not(.glide__slide--clone)').length
  // document.querySelector('.shop-counter-total').innerHTML = totalSlide

  // shop.on(['mount', 'run'], function(event) {
  //   document.querySelector('.shop-counter-current').innerHTML = (shop._i + 1)
  // })

})

  }//window.onload

 




