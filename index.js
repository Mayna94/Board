let guestScore= document.getElementById("guest-score")
let homeScore= document.getElementById("home-score")
let countg = 0
let counth = 0

function button1g() {
   countg+=1
   guestScore.textContent=countg
}
function button2g() {
    countg+=2
    guestScore.textContent=countg
 }
 function button3g() {
    countg+=3
    guestScore.textContent=countg
 }
 function button1h() {
    counth+=1
    homeScore.textContent=counth
 }
 function button2h() {
     counth+=2
     homeScore.textContent=counth
  }
  function button3h() {
     counth+=3
     homeScore.textContent=counth
  }

  function restartb() {
    countg=0
    counth=0
    guestScore.textContent=countg
    homeScore.textContent=counth
  }