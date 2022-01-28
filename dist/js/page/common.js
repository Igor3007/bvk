
document.addEventListener("DOMContentLoaded", function () {

  /******************************************** 
  * perf-to-animate
  ********************************************/

  document.querySelector('body').classList.remove('perf-no-animation')

  /******************************************** 
  * mobile menu
  ********************************************/
  document.querySelector('.btn-burger').addEventListener('click', function(){
    document.querySelector('.header__nav').classList.toggle('open')
  })

  document.querySelector('[data-menu="close"]').addEventListener('click', function(){
    document.querySelector('.header__nav').classList.remove('open')
  })

  document.querySelectorAll('.arrow-menu').forEach(function(item, index){
    item.addEventListener('click', function(event){
      event.stopPropagation()
      event.preventDefault()

      
      if(document.querySelector('.nav-menu .show-sub') && document.body.clientWidth > 1200){
           
            document.querySelector('.nav-menu .show-sub').classList.remove('show-sub')
          
      }else{
        this.parentNode.parentNode.classList.toggle('show-sub')
      }
     

      
    })
  })


}); //DOMContentLoaded


 




