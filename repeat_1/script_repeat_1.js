
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let num = [1,3,9,4];
function sum (num2) {
    let rez = 0;
    for(let i = 0; i < num2.length; i++) {

        rez = rez + num2[i];
    }
    return rez;
}

console.log(sum([1, 2,5]));
console.log(sum([1, 2,5]));
console.log(sum([1, 2,5]));
console.log(sum([1, 2,5]));
console.log(sum([1, 2,5]));
