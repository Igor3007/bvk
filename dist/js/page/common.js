
document.addEventListener("DOMContentLoaded", function () {

  /******************************************** 
  * perf-to-animate
  ********************************************/

  document.querySelector('body').classList.remove('perf-no-animation')

  /******************************************** 
  * mobile menu
  ********************************************/
  document.querySelector('.burger-btn').addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open')
    this.classList.toggle('open')
  })

  document.querySelector('[data-menu="close"]').addEventListener('click', function(){
    document.querySelector('.main-menu').classList.remove('open')
    document.querySelector('.burger-btn').classList.remove('open')
  })

 
  /******************************************** 
  * confirm cookie
  ********************************************/

   function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  function setCookie(name, value, options = {}) {
  
    options = {
      path: '/',
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  if(!getCookie('policy')){
    document.querySelector('.bottom-popup').classList.add('open')

    window.addEventListener('scroll', function(event){

      if(window.scrollY > (window.scrollMaxY - 300 )){
        document.querySelector('.bottom-popup').classList.add('hide-fade')
      }else{
        document.querySelector('.bottom-popup').classList.remove('hide-fade')
      }

       
    })

    document.querySelector('.bottom-popup__btn .btn').addEventListener('click', function(){
      setCookie('policy', true)
      document.querySelector('.bottom-popup').classList.remove('open')
    })

  }
  

}); //DOMContentLoaded


 




