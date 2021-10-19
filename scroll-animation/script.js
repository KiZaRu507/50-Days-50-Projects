const boxes=document.querySelectorAll('.blocks');

window.addEventListener('scroll',checkBox);
checkBox();
function checkBox(){
    const triggerPoint=window.innerHeight/5*4;
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;
        if(boxTop<triggerPoint){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show')
        }
    })
}