const submit = document.getElementById('submit')
const confirm = document.querySelector('.confirm')
const popUp = document.getElementById('pop-up')


submit.addEventListener("click", (e) => {
    popUp.classList.remove('none')
})

confirm.addEventListener("click", (e) => {
    popUp.classList.add('none')
    console.log('account deleted')
})