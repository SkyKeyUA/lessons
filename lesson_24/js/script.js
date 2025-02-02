// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body;
const bodyElementTwo = document.querySelector('body');
console.log(bodyElement);
console.log(bodyElementTwo);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

const createList = (items = 3) => {
  items = parseInt(items);
  if (!isFinite(items)) {
    return console.log('Невірне значення');
  }
  const newList = document.createElement('ul');
  for (let i = 1; items >= i; i++) {
    const newItem = document.createElement('li');
    newItem.innerText = i;
    newList.insertAdjacentElement('beforeend', newItem);
  }
  bodyElement.insertAdjacentElement('afterbegin', newList);
};

createList('10');
createList(Infinity);
createList(-Infinity);
createList(null);
createList(undefined);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

bodyElement.classList.add('loaded');
if (bodyElement.classList.contains('loaded')) {
  bodyElement.style.color = 'green';
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const listItems = document.querySelectorAll('.item');

listItems.forEach((item, index) => {
  item.classList.add('active');
  item.innerText = `Елемент №${index + 1}`;
});

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const getButton = document.querySelector('.button');

const scrollToElement = (element) => {
  if (element) {
    element.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }
};
scrollToElement(getButton);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const getLink = document.querySelector('.link');
if (getLink) {
  getLink.setAttribute('data-number', '100');
  console.log(typeof getLink.getAttribute('data-number'));
  if (getLink.getAttribute('data-number') < 200) {
    getLink.style.color = 'red';
  }
  console.log(getLink);
}
