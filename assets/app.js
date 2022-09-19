const developer = [
    {
        img: "./assets/photos/person1-min.jpg",
        author: "Chisna Aditya Dewa",
        role: "Software Engineer"
    },
    {
        img: "./assets/photos/person2-min.jpg",
        author: "John Doe",
        role: "Hardware Engineer"
    },
    {
        img: "./assets/photos/person3-min.jpg",
        author: "Sarah Johnson",
        role: "Product Manager"
    },
]

let currentNumber = 0

const btnNext = document.querySelector('.right-arrow')
const btnPrev = document.querySelector('.left-arrow')
const photo = document.querySelector('#photo')
const author = document.querySelector('#author')
const role = document.querySelector('#role')


btnNext.addEventListener('click', () => {
    currentNumber++
    if(currentNumber > developer.length - 1){
        currentNumber = 0
    }
    photo.src = developer[currentNumber].img
    author.textContent = developer[currentNumber].author
    role.textContent = developer[currentNumber].role
})

btnPrev.addEventListener('click', () => {
    currentNumber--
    if(currentNumber < 0){
        currentNumber = developer.length - 1
    }
    photo.src = developer[currentNumber].img
    author.textContent = developer[currentNumber].author
    role.textContent = developer[currentNumber].role
})