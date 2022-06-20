const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

console.log('working')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const colors = ["green", "red", "blue","yellow","teal","purple","grey"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");
const colorName = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random mum beetween 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

