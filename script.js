// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function isPrime(n) {
    let i = 0;
    while (i <= n) {

        for (let j = 2; j <= i; j++) {
            if ((i % j == 0) && (j < i)) {
                break;
            } else if (j === i) {
                console.log(i);
            }
        }
        i++;
    }
}
isPrime(100);

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
const goods = [
    ['apple', 2, 70],
    ['banana', 1, 50],
    ['pear', 1.5, 100],
    ['blueberry', 0.5, 400],
    ['avocado', 0.3, 350]
]

function countBasketPrice(goods) {
    let costItem = [];
    for (i = 0; i < goods.length; i++) {
        costItem[i] = goods[i][1] * goods[i][2];
    }
    return costItem.reduce(function (a, b) {
        return a + b;
    });
}

console.log(countBasketPrice(goods));



// // 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for (let arr = [], i = 0; i < 9; i++, console.log(arr.push(i))) { }



// // 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//первый вариант
function getPyramidArr(high) {
    let string = '';
    let arr = [];
    for (let i = 1; i < high; i++) {
        string = string + 'x';
        arr = [string];
        for (const value of arr) {
            console.log(value);
        }
    }
}
// второй вариант
function getPyramid(high) {
    let pyramid = '';
    for (let i = 1; i <= high; i++) {
        const line = getLine(i);
        pyramid = pyramid + '\n' + line;
    }
    console.log(pyramid);
}

function getLine(length) {
    let line = '';
    for (let i = 1; i <= length; i++) { line = line + 'x'; }
    return line;
}

getPyramidArr(20);
getPyramid(20);
