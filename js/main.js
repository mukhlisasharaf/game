const elLoader = document.querySelector('.js-loader');
const mathOperators = ['*', "/", "+", "-"]
const ten = 10



document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    elLoader.classList.add('loader-wrapper--none');
  }, 800);
});

// StartGame
startGame.addEventListener("click", () => {
  audioStart.play()
  overlayWelcome.classList.add('overlay--hidden')
  gameStart()
});

const gameStart  = () => {
  const mathOperatorsRandomIndex = Math.round(Math.random() * (mathOperators.length -1))
  const randomNumberOne = Math.round(Math.random() * ten)
  const randomNumberTwo = Math.round(Math.random() * ten)
  const arithmeticResult = `${randomNumberOne} ${mathOperators[mathOperatorsRandomIndex]} ${randomNumberTwo}`
  randomArithmetic.textContent = arithmeticResult
  setInterval(() => {
    time.textContent = `${+time.textContent[0] -1}s`
    console.log(time.textContent[0]);
    if(time.textContent[0] == 0) {
      time.textContent[0] = 7
    }
  }, 1000)
}



