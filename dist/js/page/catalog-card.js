

  window.onload = function() {

    
  /******************************************** 
  * perf-to-animate
  ********************************************/

    document.querySelector('body').classList.remove('perf-no-animation')   


  /******************************************** 
  * show-hide card props
  ********************************************/

function scrollToTargetAdjusted(elem){
    const scrollTarget = document.querySelector(elem);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetDesctop = 65;
    var offsetPosition = elementPosition  - offsetDesctop;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

  if(document.querySelector('[data-props="toggle"]')){
    document.querySelector('[data-props="toggle"]').addEventListener('click', function(){

     

      this.classList.toggle('open')
      document.querySelector('[data-props="container"]').classList.toggle('show-all')

      if(this.classList.contains('open')){
        scrollToTargetAdjusted('[data-props="container"]')
      }

    })

    // hide button

    if(document.querySelectorAll('[data-props="container"] ul > li').length >= 12) {
      document.querySelector('[data-props="toggle"]').parentNode.style.display = 'block';
    }
  }

  
  

  }

 




