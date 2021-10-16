var button=document.querySelector('button');
var cont=document.querySelector('#box');
button.addEventListener('click',()=>{
    if(cont.classList.contains('show')){
        cont.classList.remove('show')
    }
    else{
        cont.classList.add('show');
    }
})