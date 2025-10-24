
(function(){
  function setVH(){
    var h = (window.visualViewport ? window.visualViewport.height : window.innerHeight);
    document.documentElement.style.setProperty('--vh', (h*0.01) + 'px');
    var s = Math.min(window.innerWidth/1366, h/1024);
    document.documentElement.style.setProperty('--_scale', s);
  }
  setVH();
  addEventListener('resize', setVH, {passive:true});
  addEventListener('orientationchange', setVH);
  addEventListener('pageshow', setVH);
  document.addEventListener('DOMContentLoaded', function(){
    var o = document.querySelector('.outer'); if(o) o.classList.add('use-vh-var');
  }, {passive:true});
})();
