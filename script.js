var cluster = ''
var runtime = 60
var score = 0
var n = 0

function makeBubble() {
  for (i = 1; i <= 192; i++) {
    var rn = Math.floor(Math.random() * 10)
    cluster += `<div id="bubble">${rn}</div>`
  }
  document.querySelector('#pbtm').innerHTML = cluster
}

function timer() {
  var reset = setInterval(function () {
    if (runtime > 0) {
      runtime--
      document.querySelector('#timers').textContent = runtime
    } else {
      clearInterval(reset)
      document.querySelector(
        '#pbtm'
      ).innerHTML = `<h1>Game Over <br/> Your score is : ${score}</h1>`
    }
  }, 1000)
}

function Iscore() {
  score += 10
  document.querySelector('#scored').textContent = score
}

function getNewHit() {
  n = Math.floor(Math.random() * 10)
  document.querySelector('#hitss').textContent = n
}

document.querySelector('#pbtm').addEventListener('click', function (dets) {
  var m = Number(dets.target.textContent)
  if (n == m) {
    Iscore()
    makeBubble()
    getNewHit()
  }
})

getNewHit()
timer()
makeBubble()
