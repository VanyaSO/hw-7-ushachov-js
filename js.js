"use strict";
// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (action).
// 2) с помощью промта спрашиваем у пользователя первое число.
// 3) с помощью промта спрашиваем у пользователя второе число.
// 4) С помощью alert или console.log выводим результат действия (add, sub, mult, div) со всеми операндами (Н-р "2 + 3 = 5" )
//
let action;
let firstNumber;
let secondNumber;
do{
    action = prompt('Какое дейсвие вы хотите сделать add, sub, div, mult');
    if(action !== 'sub' && action !=='add' && action !== 'div' && action !=='mult'){
        alert('Введите одно из придложеных действий');
    }

} while(action !== 'sub' && action !=='add' && action !== 'div' && action !=='mult');

do{
    firstNumber = Number(prompt('Введите певрое число', ''));
    if ( !parseInt(firstNumber) ){
        alert('Введите число');
    }

} while( !parseInt(firstNumber) );

do{
    secondNumber = Number(prompt('Введите второе число', ''));
    if ( !parseInt(secondNumber) ){
        alert('Введите число');
    }

} while( !parseInt(secondNumber) );


let additionResult = Number(firstNumber) + Number(secondNumber);
let subtractionResult = Number(firstNumber) - Number(secondNumber);
let divisionResult = Number(firstNumber) / Number(secondNumber);
let multiplicationResult = Number(firstNumber) * Number(secondNumber);

if(action === 'add'){
    alert(`Результат:  ${firstNumber} + ${secondNumber} = ${additionResult}`);
    location.reload();
}else if(action === 'sub'){
    alert(`Результат:  ${firstNumber} - ${secondNumber} = ${subtractionResult}`);
    location.reload();
}else if(action === 'div'){
    alert(`Результат:  ${firstNumber} : ${secondNumber} = ${divisionResult}`);
    location.reload();
}else if(action === 'mult'){
    alert(`Результат:  ${firstNumber} * ${secondNumber} = ${multiplicationResult}`);
    location.reload();
} else{
    console.log(100);
}


