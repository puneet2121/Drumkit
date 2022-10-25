let buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function () {
    audio = new Audio('sounds/Diwali.mp3')
    audio.play()
  })
}