function navTogle() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



let span = document.querySelectorAll('span')
span.forEach((e) => {
  e.addEventListener('click', (e) => {
    function trending() {
      let day = document.querySelector('#today')
      let weekSpan = document.querySelector('#week')
      let card = document.querySelector('.card')
      let week = document.querySelector('.card-week')
      if (e.target.id == 'today') {
        day.classList.add('togle-clas')
        weekSpan.classList.remove('togle-clas')
        week.style.display = 'none'
        card.style.display = 'flex'
      }
      if (e.target.id == 'week') {
        week.style.display = 'flex'
        card.style.display = 'none'
        weekSpan.classList.add('togle-clas')
        day.classList.remove('togle-clas')
      }
    }
    trending()
    //lastest trailesrs
    function lastest() {
      let popular = document.querySelector('#popular')
      let stream = document.querySelector('#stream')
      if (e.target.id == 'popular') {
        popular.classList.add('togle-clas')
        stream.classList.remove('togle-clas')
      }
      if (e.target.id == 'stream') {
        stream.classList.add('togle-clas')
        popular.classList.remove('togle-clas')
      }
    }
    lastest()
  })
})



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




