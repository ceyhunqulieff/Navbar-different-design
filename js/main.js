'use strict';
const pullDown = document.getElementById('pullDown');
// const menu = document.getElementById('menu');
const alert = document.querySelector('.alert');
const menuArray = document.querySelectorAll('.menu > *');
// const menuCategory = document.querySelectorAll('.menu > ul.items > li');
pullDown.oninput = function () {
  menu.style.width = pullDown.value + '%';
  if (pullDown.value >= 100) {
    alert.innerText = 'Qoruyucu açıldı!';
    alert.style.display = 'block';
    alert.style.backgroundColor = 'red';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  } else if (pullDown.value >= 70) {
    menuArray.forEach((element) => {
      element.style.display = 'inline-block';
    });
  } else if (pullDown.value <= 0) {
    alert.innerText = 'Qoruyucu bağlandı!';
    alert.style.display = 'block';
    alert.style.backgroundColor = 'green';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  } else {
    menuArray.forEach((element) => {
      element.style.display = 'none';
    });
  }
};
