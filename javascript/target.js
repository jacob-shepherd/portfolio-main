const target1 = document.getElementById('t1')
const target2 = document.getElementById('t2')
const target3 = document.getElementById('t3')
const target4 = document.getElementById('t4')
const target5 = document.getElementById('t5')
const target6 = document.getElementById('t6')
const target7 = document.getElementById('t7')
const target8 = document.getElementById('t8')
const info = document.getElementById('hit-reg')
const time = document.getElementById('time')
const start = document.getElementById('start')
const retry = document.getElementById('retry')

var random1 = Math.floor(Math.random() * 50) +30

var random2 = Math.floor(Math.random() * 10) +1

var random3 = Math.floor(Math.random() * 50) +30

var random4 = Math.floor(Math.random() * 30) +10

var random5 = Math.floor(Math.random() * -30) +1

var random6 = Math.floor(Math.random() * 30) +10

console.log(random1, random2, random3)

var score = 0


function play(){
    const audio = new Audio('http://localhost:3000/media/hit_sound.mp3')
    audio.play()
}

var startTimer = null;

var secs = 0
var ms = 00

function sec(){
    secs++
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            sec();
            time.innerText = `${secs} secs`
    }, 1000);
    }
    startInterval()
    start.classList.add('none')
    target1.classList.remove('none')
    target2.classList.remove('none')
    target3.classList.remove('none')
    target4.classList.remove('none')
    target5.classList.remove('none')
    target6.classList.remove('none')
    })

    
    

target1.style.marginLeft = `${random1}%`
target1.style.marginTop = `${random2}%`
target1.style.marginRight = `${random3}%`

target2.style.marginLeft = `${random4}%`
target2.style.marginTop = `${random5}%`
target2.style.marginRight = `${random6}%`


target4.style.marginLeft = `${random4}%`
target4.style.marginTop = `${random5}%`
target4.style.marginRight = `${random6}%`



target6.style.marginLeft = `${random1}%`
target6.style.marginTop = `${random2}%`
target6.style.marginRight = `${random3}%`

function end(){
    console.log(score)
    if(score == 6){
        stopTimer()
        retry.classList.remove('none')
        alert(`new time is: ${secs} seconds`)
    }else{
        //continue
    }
}

retry.addEventListener('click', function(){
    score = 0
    secs = 0
    retry.classList.add('none')
    function startInterval(){
        startTimer = setInterval(function(){
            sec();
            time.innerText = `${secs} secs`
    }, 1000);
    }
    startInterval()
    target1.classList.remove('none')
    target2.classList.remove('none')
    target3.classList.remove('none')
    target4.classList.remove('none')
    target5.classList.remove('none')
    target6.classList.remove('none')
    })



target1.addEventListener("click", (e) => {
    score++
    end()
    target1.classList.add('none')
})

target2.addEventListener("click", (e) => {
    score++
    end()
    target2.classList.add('none')
})

target3.addEventListener("click", (e) => {
    score++
    end()
    target3.classList.add('none')
})
target4.addEventListener("click", (e) => {
    score++
    end()
    target4.classList.add('none')
})
target5.addEventListener("click", (e) => {
    score++
    end()
    target5.classList.add('none')
})
target6.addEventListener("click", (e) => {
    score++
    end()
    target6.classList.add('none')
})





