//Choose a random color
// const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['lightblue']

body.style.backgroundColor = 'ghostwhite'
// button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}