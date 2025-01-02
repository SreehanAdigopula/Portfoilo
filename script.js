let text = document.getElementById('text');
 window.addEventListener('scroll', function(){
   let value = window.scrollY;
   text.style.bottom= value * 10 + 'px';
 })