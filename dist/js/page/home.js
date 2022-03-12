

  window.onload = function() {

    
  /******************************************** 
  * perf-to-animate
  ********************************************/

    document.querySelector('body').classList.remove('perf-no-animation')

    if(document.querySelectorAll('.fb-slide__bg video').length){
      document.querySelectorAll('.fb-slide__bg video')[0].play()
    }
      

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

   function glideCreateBullets(elem, sliderObj){
      let container = document.querySelector(elem)
      let countSlides = container.querySelectorAll('.glide__slide').length
      let bulletContainer = container.querySelector('.glide__bullets')

      for(let i = 0; i<countSlides; i++){

        let itemBullet = document.createElement('div')
            itemBullet.classList.add('glide__bullet')
            itemBullet.setAttribute('data-glide-dir', '='+i)

            if(sliderObj._o.autoplay){
              itemBullet.style.animationDuration = (sliderObj._o.autoplay + 500)+'ms'
            }

        bulletContainer.appendChild(itemBullet)
      }
   }

   function glidePlayVideo(slider, trigger){
      let self = document.querySelector(slider.selector)

      if(trigger) self.querySelector('video').play() 
      if(!trigger) self.querySelector('video').pause() 
   }

   var fb = new Glide('[data-glide="fb"]', {
    type: 'slider',
    gap: 0,
    perView: 1,
    autoplay: 10000,
    hoverpause: true,
    animationDuration: 300
  })



  fb.on(['mount.before'], function() {
    glideCreateBullets(fb.selector, fb)
    //glidePlayVideo(fb, true)

  })

  fb.on(['run.before'], function(event) {
    glidePlayVideo(fb, false)
  })

  fb.on(['run.after'], function(event) {
    glidePlayVideo(fb, true)
  })

  document.querySelector(fb.selector).addEventListener('mouseenter', function(){
    this.classList.add('stop-animate')
  })
  document.querySelector(fb.selector).addEventListener('mouseleave', function(){
    this.classList.remove('stop-animate')
  })

  fb.mount();

 
  /******************************************** 
  * data-glide="shop"
  ********************************************/

   var shop = new Glide('[data-glide="shop"]', {
    type: 'carousel',
    gap: 40,
    perView: 4,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 300,
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

  shop.on(['mount.before'], function() {
    glideCreateBullets(shop.selector, shop)
  })

  document.querySelector(shop.selector).addEventListener('mouseenter', function(){
    this.classList.add('stop-animate')
  })
  document.querySelector(shop.selector).addEventListener('mouseleave', function(){
    this.classList.remove('stop-animate')
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

 




