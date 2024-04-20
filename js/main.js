

function navTogle() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function navItem() {
  let film = document.querySelector('.film')
  let navClick = document.querySelector('.click')
  film.addEventListener('mouseover', (e) => {
    navClick.style.display = 'flex'
  })
  film.addEventListener('mouseout', (e) => {
    navClick.style.display = 'none'
  })

  let twshow = document.querySelector('.twShows')
  let twshows = document.querySelector('.tw-shows')
  twshow.addEventListener('mouseover', (e) => {
    twshows.style.display = 'flex'
  })
  twshow.addEventListener('mouseout', (e) => {
    twshows.style.display = 'none'
  })

  let peopleA = document.querySelector('.people-a')
  let people = document.querySelector('.people')
  peopleA.addEventListener('mouseover', (e) => {
    people.style.display = 'flex'
  })
  peopleA.addEventListener('mouseout', (e) => {
    people.style.display = 'none'
  })

  let moreA = document.querySelector('.moreA')
  let more = document.querySelector('.more')
  moreA.addEventListener('mouseover', (e) => {
    more.style.display = 'flex'
  })
  moreA.addEventListener('mouseout', (e) => {
    more.style.display = 'none'
  })

}
navItem()



let dayTrendung = document.querySelector('.daytrending')
let weektrending = document.querySelector('.weektrending')
dayTrendung.addEventListener('click',(e)=>{
  let card = document.querySelector('.card')
  let week = document.querySelector('.card-week')
  card.style.display = 'flex'
  week.style.display = 'none'
})
weektrending.addEventListener('click',(e)=>{
  let card = document.querySelector('.card')
  let week = document.querySelector('.card-week')
  card.style.display = 'none'
  week.style.display = 'flex'
})


