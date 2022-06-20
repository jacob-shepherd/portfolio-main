const toggleButton = document.getElementsByClassName('btn-start')[0]


toggleButton.addEventListener('click', () => {

})

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var startTimer = null;
function timer(){
if (hour.value == 0 && minute.value == 0 && second.value == 0) {
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
} else if (second.value != 0){
    second.value --;
}
else if (minute.value != 0 && second.value == 0){
    second.value = 59;
    minute.value--;
}
else if (hour.value != 0 && minute.value == 0){
    minute.value = 60;
    hour.value--;
}
return
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
function startInterval(){
    startTimer = setInterval(function(){
        timer();
}, 1000);
}
startInterval()
})

reset.addEventListener('click', function(){
     hour.value = 0;
     minute.value = 1;
     second.value = 0;
     stopTimer()
})


