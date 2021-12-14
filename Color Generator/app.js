const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const container = document.querySelector('.generator');
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const RandomNumber = getRandomNumber();

   container.style.backgroundColor = colors[RandomNumber];
  color.textContent = colors[RandomNumber];
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
};
