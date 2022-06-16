// ------------------------------Первое задание---------------------------------
// 1) Прописать в коде две переменные с числами. Вывести в консоль бОльшее из них. Если они равны, то так и написать 'Значения равны между собой'
// 1.1*) Устанавливать значения переменных не в коде, а при помощи функции prompt.

// const firstNumber = prompt('Введите первое число');
// const secondNumber = prompt('Введите второе число');

// if (firstNumber > secondNumber) console.log(firstNumber);
// if (firstNumber < secondNumber) console.log(secondNumber);
// if (firstNumber == secondNumber) console.log('Значения равны между собой');

// ------------------------------Второе задание---------------------------------
// 2) Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// 2.1*) Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// const quantityOfDigits = prompt('Введите количество цифр');

// for (let i = 0; i < quantityOfDigits; i++) {
//   console.log(i ** 2);
// }

// ------------------------------Третье задание---------------------------------
// 3*) 3 раза попросить пользователя ввести любое имя. Вывести в диалоговом окне (alert) склеенные имена через пробел (например, "Таня Витя Коля").
// 3.1**) 3 раза попросить пользователя ввести число. Вывести в диалоговом окне (alert) сумму введенных чисел.

// let sum = 0;

// for (let i = 0; i < 3; i++) {
//   const num = prompt('Введите любое число')
//   sum += +num
// }

// alert(sum)

// ------------------------------Калькулятор---------------------------------

let buttons = document.querySelectorAll('.button')
let operations = document.querySelectorAll('.operation')
let screenText = document.querySelector('.calculator__screen')
let equal = document.querySelector('.equal')
let screen = '';

function output() {
  screenText.innerHTML = screen;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    screen += e.target.innerHTML;
    output()
  })
}


equal.addEventListener('click', () => {
  if (screen.includes('+')) {
    console.log(screen.match(/[1-9]+/gm));
    screen = +screen.match(/[1-9]+/gm)[0] + +screen.match(/[1-9]+/gm)[1];
    console.log(screen);
    output()
  } else if (screen.includes('-')) {
    console.log(screen.match(/[1-9]+/gm));
    screen = +screen.match(/[1-9]+/gm)[0] - +screen.match(/[1-9]+/gm)[1];
    console.log(screen);
    output()
  } else if (screen.includes('*')) {
    console.log(screen.match(/[1-9]+/gm));
    screen = +screen.match(/[1-9]+/gm)[0] * +screen.match(/[1-9]+/gm)[1];
    console.log(screen);
    output()
  } else if (screen.includes('/')) {
    console.log(screen.match(/[1-9]+/gm));
    screen = +screen.match(/[1-9]+/gm)[0] / +screen.match(/[1-9]+/gm)[1];
    console.log(screen);
    output()
  }
})

