const refs = {
  bodyRef: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
refs.btnStart.addEventListener('click', onClickStart);
let switcherId = null;
refs.btnStop.disabled = true;

function onClickStart() {
  switcherId = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStop.addEventListener('click', onClickStop);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onClickStop() {
  clearInterval(switcherId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  refs.btnStop.removeEventListener('click', onClickStop);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
