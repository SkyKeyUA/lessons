// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

// Якщо я вірно розумію я можу взяти весь код в pageLoaded:
//const pageLoaded = (e) => {

const documentAction = (e) => {
  const elementTarget = e.target;
  if (e.type === 'click') {
    const currentElement = elementTarget.closest('.item');
    if (elementTarget.closest('.item')) {
      currentElement.classList.toggle('active');
      const tag = currentElement.tagName;
      if (tag === 'A') {
        e.preventDefault();
      }
    }
  }
};
document.addEventListener('click', documentAction);

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const pageLoaded = (e) => {
  document.body.classList.add('loaded');
};

window.addEventListener('load', pageLoaded);

// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const getTagHeader = document.querySelector('header');
const getTagFooter = document.querySelector('footer');

const changeBackground = (e) => {
  if (e.type === 'mouseenter') {
    getTagFooter.style.backgroundColor = 'green';
  } else if (e.type === 'mouseleave') {
    getTagFooter.style.backgroundColor = '';
  }
};

getTagHeader.addEventListener('mouseenter', changeBackground);
getTagHeader.addEventListener('mouseleave', changeBackground);

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const getElement = document.querySelector('span.item');
let seeElement = true;

const changeContent = () => {
  seeElement = false;
  let number = 1;
  const timerSpeed = parseFloat(getElement.getAttribute('data-timer')) || 1000;
  const getCounter = parseFloat(getElement.getAttribute('data-counter')) || 10;
  const startTimer = setInterval(() => {
    getElement.innerHTML = `${number}`;
    if (number === getCounter) {
      clearInterval(startTimer);
      console.log('Зупинка');
    }
    ++number;
  }, timerSpeed);
};

// const changeContent = () => {
//   getElement.innerHTML = `${number}`;
//   if (number === parseFloat(getCount)) {
//     clearInterval(timer);
//   }
//   number += 1;
// };

// const timer = setInterval(changeContent, parseFloat(getTimer));

const options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.3,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const currentElement = entry.target;
    if (entry.isIntersecting) {
      if (getElement && seeElement) {
        currentElement.classList.add('animate');
        changeContent();
        console.log('працює тільки 1 раз');
      }
    }
  });
};
const observer = new IntersectionObserver(callback, options);

observer.observe(getElement);

//}
