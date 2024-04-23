let parent = document.querySelectorAll('.d-flex')

parent.forEach(t => {
    t.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'orange'
    
})
});
