"use strict";
// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (action).
// 2) с помощью промта спрашиваем у пользователя первое число.
// 3) с помощью промта спрашиваем у пользователя второе число.
// 4) С помощью alert или console.log выводим результат действия (add, sub, mult, div) со всеми операндами (Н-р "2 + 3 = 5" )

let action = prompt('Какое дейсвие вы хотите сделать add, sub, div, mult');

let firstNumber = prompt('Введите певрое число');
let secondNumber = prompt('Введите второе число');

let additionResult = Number(firstNumber) + Number(secondNumber);
let subtractionResult = Number(firstNumber) - Number(secondNumber);
let divisionResult = Number(firstNumber) / Number(secondNumber);
let multiplicationResult = Number(firstNumber) * Number(secondNumber);

if(action === 'add'){
    alert(`Результат:  ${firstNumber} + ${secondNumber} = ${additionResult}`);
}else if(action === 'sub'){
    alert(`Результат:  ${firstNumber} - ${secondNumber} = ${subtractionResult}`);
}else if(action === 'div'){
    alert(`Результат:  ${firstNumber} : ${secondNumber} = ${divisionResult}`);
}else if(action === 'mult'){
    alert(`Результат:  ${firstNumber} * ${secondNumber} = ${multiplicationResult}`);
} else{
    alert(`Результат:  ${firstNumber} ? ${secondNumber} = ??? \nВы не указали действие или указали не коректно`);
}


