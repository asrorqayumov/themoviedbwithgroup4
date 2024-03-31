function navTogle() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
let tugma = document.querySelector('.tugma-test')
tugma.addEventListener('click',(e)=>{
  tugma.style.color = 'white'
})

console.log(tugma);