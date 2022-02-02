

  window.onload = function() {

    
  /******************************************** 
  * perf-to-animate
  ********************************************/

    document.querySelector('body').classList.remove('perf-no-animation')   

  /******************************************** 
  * tabs
  ********************************************/

   const URL_YMAPS_API   = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1";

   var pointsArray = [
    {
        'coordinates':'53.87361030946509,27.594075226295164',
        'markerImage':'/img/svg/ic_pin.svg',
        'companyName':'default',
        'address':'default',
        'phone':'default',
    },
  ]

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
    } else {  // Другие браузеры
        script.onload = function(){
        callback();
        };
    }
    
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function scrollToTargetAdjusted(elem){
  const scrollTarget = document.querySelector(elem);
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  var offsetDesctop = 25;
  var offsetPosition = elementPosition  - offsetDesctop;

  window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
  });
}


  function tabs (params) {

    this.setting = params

    this.nav       = document.querySelector(this.setting.navElem)
    this.container = document.querySelector(this.setting.containerElem)

    this.init = function(){

      if(this.checkHash()){
        this.changeTab(this.checkHash())
      }else{
        this.changeTab(this.setting.tabStart)
      }

      this.clickTab()

       
    }

    this.checkHash = function(){
      if(window.location.hash == '') return false;
      return window.location.hash.replace('#','')
    } 

    this.changeTab = function(tab){

      if(this.container.querySelector('.active')){
        this.container.querySelector('.active').classList.remove('active')
        this.nav.querySelector('.active').classList.remove('active')
      }

      if(this.container.querySelector('[data-tab-item="'+tab+'"]')){
        this.container.querySelector('[data-tab-item="'+tab+'"]').classList.add('active')

        this.nav.querySelectorAll('a').forEach(function(item){
            if(item.getAttribute('href') == '#'+tab){
              item.parentNode.classList.add('active')
            }
        })

        this.setting.onChangeTab(tab)
      }
    }

    this.clickTab = function(){

      var _this = this;

      this.nav.querySelectorAll('a').forEach(function(item){
        item.addEventListener('click', function(event){
          _this.changeTab((this.getAttribute('href').replace('#','')))
        })
      })
    }


  }

  function initYandexMaps(){

    if(!window.YM){

      window.YM = new YMaps(false, ymaps)  
      window.YM.mapsParams.container = 'mapcontainer';
      window.YM.mapsParams.params.center = pointsArray[0].coordinates.split(',')
  
      window.YM.init(function(){
  
          document.querySelector('.loading').style.display = 'none';

          if(window.mapPointArray) pointsArray = window.mapPointArray;
  
          window.YM.addPlacemark(pointsArray)
  
          if(pointsArray.length >= 2 ){
              window.YM.autoScale()
          }
      })  
    }
    
  

  }

  window.partner = new tabs({
    navElem: '[data-tab-nav]',
    containerElem: '[data-tab-container]',
    tabStart: 'list',
    onChangeTab: function(tab){
      if(tab == 'inmap') {
        if(!window.ymaps){
          
          loadScript(URL_YMAPS_API, function(){
            console.info('Ymaps loaded')
            ymaps.load(initYandexMaps());
          });  
  
        }else{
            initYandexMaps();
        }
      }
    }
  })


  window.partner.init()

  // click

  if(document.querySelector('.card-shop')){
    document.querySelectorAll('.card-shop').forEach(function(item){
      item.addEventListener('click', function(){
        if(this.getAttribute('data-point')){
          window.YM.changeCenter(
            this.getAttribute('data-point')
          )

          scrollToTargetAdjusted('#mapcontainer')
        }
      })
    })
  }

  }

 




