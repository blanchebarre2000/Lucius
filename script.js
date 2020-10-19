var img=document.getElementById('img');
  
var angle=0;
setInterval(function(){
    img.style.transform="rotateZ("+ angle++ +"deg)";
}, 30);

