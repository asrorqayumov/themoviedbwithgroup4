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
    //trending
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
      let tw = document.querySelector('#tw')
      let rent = document.querySelector('#rent')
      let theat = document.querySelector('#theat')
      let popularr = document.querySelector('.popular')
      let streamm = document.querySelector('.stream')
      let tww = document.querySelector('.tw')
      let rentt = document.querySelector('.rent')
      let theatt = document.querySelector('.theat')
      if (e.target.id == 'popular') {
        popular.classList.add('togle-clas')
        stream.classList.remove('togle-clas')
        tw.classList.remove('togle-clas')
        rent.classList.remove('togle-clas')
        theat.classList.remove('togle-clas')
        streamm.style.display = 'none'
        tww.style.display = 'none'
        rentt.style.display = 'none'
        theatt.style.display = 'none'
        popularr.style.display = 'flex'
      }
      if (e.target.id == 'stream') {
        stream.classList.add('togle-clas')
        popular.classList.remove('togle-clas')
        tw.classList.remove('togle-clas')
        rent.classList.remove('togle-clas')
        theat.classList.remove('togle-clas')
        streamm.style.display = 'flex'
        tww.style.display = 'none'
        rentt.style.display = 'none'
        theatt.style.display = 'none'
        popularr.style.display = 'none'
      }
      if (e.target.id == 'tw') {
        popular.classList.remove('togle-clas')
        stream.classList.remove('togle-clas')
        tw.classList.add('togle-clas')
        rent.classList.remove('togle-clas')
        theat.classList.remove('togle-clas')
        streamm.style.display = 'none'
        tww.style.display = 'flex'
        rentt.style.display = 'none'
        theatt.style.display = 'none'
        popularr.style.display = 'none'
      }
      if (e.target.id == 'rent') {
        popular.classList.remove('togle-clas')
        stream.classList.remove('togle-clas')
        tw.classList.remove('togle-clas')
        rent.classList.add('togle-clas')
        theat.classList.remove('togle-clas')
        streamm.style.display = 'none'
        tww.style.display = 'none'
        rentt.style.display = 'flex'
        theatt.style.display = 'none'
        popularr.style.display = 'none'
      }
      if (e.target.id == 'popular') {
        popular.classList.add('togle-clas')
        stream.classList.remove('togle-clas')
        tw.classList.remove('togle-clas')
        rent.classList.remove('togle-clas')
        theat.classList.remove('togle-clas')
        streamm.style.display = 'none'
        tww.style.display = 'none'
        rentt.style.display = 'none'
        theatt.style.display = 'none'
        popularr.style.display = 'flex'
      }
      if (e.target.id == 'theat') {
        popular.classList.remove('togle-clas')
        stream.classList.remove('togle-clas')
        tw.classList.remove('togle-clas')
        rent.classList.remove('togle-clas')
        theat.classList.add('togle-clas')
        streamm.style.display = 'none'
        tww.style.display = 'none'
        rentt.style.display = 'none'
        theatt.style.display = 'flex'
        popularr.style.display = 'none'
      }
    }
    lastest()
    //what popular
    function what() {
      let stream2 = document.querySelector('#stream2')
      let tw2 = document.querySelector('#tw2')
      let for2 = document.querySelector('#for2')
      let theat2 = document.querySelector('#theat2')
      let streamm2 = document.querySelector('.stream2')
      let tww2 = document.querySelector('.tw2')
      let forr = document.querySelector('.for')
      let theatt2 = document.querySelector('.theat2')
      if (e.target.id == 'stream2') {
        stream2.classList.add('togle-clas')
        tw2.classList.remove('togle-clas')
        for2.classList.remove('togle-clas')
        theat2.classList.remove('togle-clas')
        streamm2.style.display = 'flex'
        theatt2.style.display = 'none'
        tww2.style.display = 'none'
        forr.style.display = 'none'
      }
      if (e.target.id == 'tw2') {
        stream2.classList.remove('togle-clas')
        tw2.classList.add('togle-clas')
        for2.classList.remove('togle-clas')
        theat2.classList.remove('togle-clas')
        streamm2.style.display = 'none'
        theatt2.style.display = 'none'
        tww2.style.display = 'flex'
        forr.style.display = 'none'
      }
      if (e.target.id == 'for2') {
        stream2.classList.remove('togle-clas')
        tw2.classList.remove('togle-clas')
        for2.classList.add('togle-clas')
        theat2.classList.remove('togle-clas')
        streamm2.style.display = 'none'
        theatt2.style.display = 'none'
        tww2.style.display = 'none'
        forr.style.display = 'flex'
      }
      if (e.target.id == 'theat2') {
        stream2.classList.remove('togle-clas')
        tw2.classList.remove('togle-clas')
        for2.classList.remove('togle-clas')
        theat2.classList.add('togle-clas')
        streamm2.style.display = 'flex'
        theatt2.style.display = 'none'
        tww2.style.display = 'none'
        forr.style.display = 'none'
      }
    }
    what()
    //free watch
    function free() {
      let day = document.querySelector('#today2')
      let weekSpan = document.querySelector('#week3')
      // let card = document.querySelector('.ca')
      // let week = document.querySelector('.cd-week')
      if (e.target.id == 'today2') {
        day.classList.add('togle-clas')
        weekSpan.classList.remove('togle-clas')
        // week.style.display = 'none'
        // card.style.display = 'flex'
      }
      if (e.target.id == 'week3') {
        // week.style.display = 'flex'
        // card.style.display = 'none'
        weekSpan.classList.add('togle-clas')
        day.classList.remove('togle-clas')
      }
    }
    free()
  })

})

