var text=document.querySelector('h3');
var count=0;
var img=document.querySelector('img');
var inte=setInterval(counter,50);
function counter(){
    count++;
    if(count>99){
        clearInterval(inte);
    }
    text.innerHTML=count+'%';
    img.style.filter=`blur(${scale(count,0,100,30,0)}px)`



}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}