
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


}); //DOMContentLoaded


 




