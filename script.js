const btn = document.querySelector('.hidden');
const hide = document.querySelector('.nav-hidden');
const exit = document.querySelector('.exit');


btn.onclick = () => {
  hide.classList.remove('hide');
}

exit.onclick = () => {
  hide.classList.add('hide');
}