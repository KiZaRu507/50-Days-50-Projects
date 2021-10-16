var button=document.querySelector('button');
var box=document.querySelector('.input');
button.addEventListener('click',()=>{
    if(box.classList.contains('hidden')){
        box.classList.remove('hidden');
    }
    else{
        box.classList.add('hidden');
    }
})