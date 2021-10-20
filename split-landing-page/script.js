const left=document.querySelector('.split.left');
const right=document.querySelector('.split.right');
left.addEventListener('mouseover',()=>{
    leftClear();
    rightClear();
    left.classList.add('active');
    right.classList.add('inactive');
})
right.addEventListener('mouseover',()=>{
    leftClear();
    rightClear();
    left.classList.add('inactive');
    right.classList.add('active');
})
function leftClear(){
    if(left.classList.contains('active')||left.classList.contains('inactive')){
        if(left.classList.contains('active')){
            left.classList.remove('active');
        }
        else{
            left.classList.remove('inactive');
        }
    }
}
function rightClear(){
    if(right.classList.contains('active')||right.classList.contains('inactive')){
        if(right.classList.contains('active')){
            right.classList.remove('active');
        }
        else{
            right.classList.remove('inactive');
        }
    }
}