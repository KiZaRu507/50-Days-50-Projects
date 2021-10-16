var button=document.querySelector('#open');
var button2=document.querySelector('#close');
var nav=document.querySelector('nav');
var cont=document.querySelector('#box');
button.addEventListener('click',()=>{
        cont.classList.add('show');
        nav.style.visibility='visible';

    
})
button2.addEventListener('click',()=>{
    cont.classList.remove('show');
    nav.style.visibility='hidden';

})