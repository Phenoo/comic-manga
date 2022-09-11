const buttonContainer = document.querySelector('.button-container');
const buttons = buttonContainer.querySelector('spann');
const toggle = document.querySelector('.button-container .home');
const icon = document.querySelector('.button-container span i')
logic = ['rotate(90deg)', 'rotate(180deg)']
i = 1;

window.addEventListener('DOMContentLoaded', function () {
  buttons.classList.add('fold');
})
  

toggle.addEventListener('click', function () { 
  console.log('hello')
  buttons.classList.toggle('fold');
  i++
  if (i > 1) {
    i = 0
  }
  icon.style.transform = logic[i];
})


  // buttons.forEach(function (btn) {
  //   btn.addEventListener('click', function () {
  //     buttons.classlist.add('fold')
  //   })
    
  // })

