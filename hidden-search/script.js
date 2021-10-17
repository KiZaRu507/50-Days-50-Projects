var button=document.querySelector('button');

var box=document.querySelector('.container');
button.addEventListener('click',()=>{
    if(box.classList.contains('active')){
        box.classList.remove('active');
    }
    else{
        box.classList.add('active');
    }
})
document.addEventListener('keydown',()=>{
    if(box.classList.contains('active')){
        box.classList.remove('active');
    }
    else{
        box.classList.add('active');
    }
})