/*          СТРОКИ           */

// let str = "Word";
// let text = " СТрока ";
// console.log(str.length); //     length - ДЛИНА СТРОКИ
// console.log(str.slice(1,2));  //      slice() - ПОЛУЧАЕТ ПОДСТРОКУ ИЗ СТРОКИ
// console.log(str.toLocaleUpperCase()); //      Превращает строку в заглавные/прописные символы
// console.log(text.toLocaleLowerCase().trim()); //    trim() - убирает лишние пробелы
// let str1 = text.toLocaleLowerCase().trim();
// console.log(str1[0].toUpperCase() + str1.slice(1)); //      Убрали пробелы и сделали 1 букву заглавной

// let a = 7;
// console.log(`text   
// on 2 line ${a}`);   // МОЖНО ЗАПИСАТЬ ТЕКСТ В 2 СТРОКИ И ВЫВЕСТИ ПЕРЕМЕННЫЕ 


/**         ЧИСЛА        */

// console.log(Math.random()); //      РАНДОМНОЕ ЧИСЛО 
// console.log(Math.max(1,2,4,5,6,10));  //    ВЫВОДИТ МАКСИМЛЬНО ЗНАЧЕНИЕ ИЗ ЗАДАННЫХ
// console.log(Math.pow(2,5));  //     возведение в степень 2^5
// console.log(Math.sqrt(25));  //     вкадратный корень
// console.log(Math.floor(3.2));  //       Округляет в меньшую сторону
// console.log(Math.ceil(3.1));  //       Округляет в большую сторону
// console.log(Math.round(3.2));  //       Округляет в к ближайшему числу
// console.log(Math.trunc(3.2));  //       Округляет все что после запятой
// console.log(4.75896.toFixed(3));  //       Округляет до знаков после запятой
// let b = "5";
// console.log(+a+5);  //  сложение строки и числа


/**     МАССИВЫ      */

// let arr = [5, 2, "str", true];
// console.log(arr);
// console.log(arr.length);  //        ВЫводим длину массива
// console.log(arr[2]);  
// arr[2] = "Text";  //        Меняем элемент массива
// console.log(arr);
// arr[4] = 8;  //     Добавляем новый элемент массива
// console.log(arr);

// let matrix = [      //      Вложенный массив
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// console.log(matrix);
// console.log(matrix[1][2]);
// console.log(matrix[matrix.length-1]);  //       Получаем последний элемент массива

// console.log(arr.shift());  //       Удаление первого элементма массива
// console.log(arr.push(15));  //      Добавление элемента массива в конец
// console.log(arr.pop());  //       Удаление последнего элементма массива
// console.log(arr.unshift(6));  //       Добавление элемента массива в начало

// let arr2 = [1, 2, 3];

// console.log(arr.concat(arr2));  //      Объеденение массивов
// let arr3 = arr.concat(arr2);

// console.log(arr.indexOf("str")); //     Получаем значение индекса элемента
// console.log(arr.join(", "));  //        Объединение элементов массива в строку

// console.log(arr.splice(1, 1));  //      Удаляем количество элементов |    с какого индекса  |    сколько элементов  |   (необязательно) на что меняем элемент
// console.log(arr.splice(1, 0, 7, 5, "text"));  //        Добавляем элементыпосле 1
// console.log(arr.splice(2, 1, "new str"));  //       Заменяем 2 элемент
// console.log(arr.splice(-1, 0, "add element"));  //      Добавляет элемент перед последним элементом

// console.log(arr.slice(0, 3));  //       Возвращяет элементы массива с 1 по 3
// console.log(arr.slice(3));  //      С заданного элемента и до конца массива

// console.log(arr.includes("add element"));  //       Проверяет наличие элемента в массиве выводит true или false (Важен регистр)

// console.log(arr.reverse());  //     Возвращает элементы в обратном порядке

// console.log("Ivan, Petr, Sasha".split());  //       Преобразует строку в массив
// console.log("Ivan, Petr, Sasha".split(", "));  //       Делит массив на элементы по , (то есть если между элементами есть какой-то знак , разделяет на разные элементы)
// console.log("Ivan".split(''));  //      Возвращает массив из каждого символа строки


/**     Объекты      */

// let obj = {
//     "color": "Tomato",
//     "Numbers": ["8888", "7777"],
//     "checked": true
// };
// console.log(obj);
// console.log(obj["color"]);  //        Возвращает элемент объекта
// console.log(obj.color);     //      то же самое что и выше
// console.log(obj.Numbers[1]);  //        Получаем 1 элемент массива в объекте

// console.log(Object.keys(obj));  //      Получаем массив из всех ключей объекта

// obj["name"] = "Ivan";  //       Добавляем новый элемент в объект
// console.log(obj);

// let obj2 = [        //      СОздание массива из объектов
//     {
//         "color": "Tomato",
//         "Numbers": ["8888", "7777"],
//         "checked": true
//     },
//     {
//         "color": "White",
//         "Numbers": ["6666", "5555"],
//         "checked": false
//     },
//     {
//         "color": "Yellow",
//         "Numbers": ["4444", "3333"],
//         "checked": true
//     }
// ];
// console.log(obj2);


/**     Диалоговые окна      */


// alert("text");
// let age = prompt("Your Age");  //     с запросом
// if(age != null){
//     alert("Мой возраст " + age); 
// } else {
//     alert("Вы нажали отмена");
// }

// if(confirm("Удалить ваш аккаунт?")){  //        С выбором ок или отмена
//     alert("Удалено");
// } else {
//     alert("Оставлено");
// }

// confirm("Удалить ваш аккаунт?") : alert("Удалено");  //     То же самое что и выше
// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : alert("Оставлено");  //     То же самое что и выше

// let age = prompt("Your Age");  //     с запросом
// if(age < 18){
//     alert("Мне меньше 18 лет "); 
// } else if(age > 18){
//     alert("Мне больше 18 лет ");
// } else {
//     alert("Мне 18 лет ");
// }

// switch (true){  //      то же что и сверху
//     case age > 18: 
//         alert("Мне больше 18 лет ");
//         break;
//     case age < 18 && age > 0:
//         alert("Мне меньше 18 лет ");
//         break;
//     case age == 18:
//         alert("Мне 18 лет ");
//         break;
//     default: 
//     alert("неправильный возраст");
// }


/**     Циклы        */


// let count = 0;

// while(count < 10){
//     console.log(count);
//     if (count == 4){
//         break;
//     }
//     count++;
// }

// let count = 10; //      Выполняет код хотя бы 1 раз
// do {
//     console.log(count);
//     count--;
// } while(count > 7);

// let arr = [5, 7, 9, 1, 0, 8];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]*2);
// }

// for(let item of arr){   //      Задает элементу item значение первого элемента массива
//     console.log(item);
// }

// let obj = {
//     "name": "Piter",
//     "age": 23,
//     "number": 88005553535 
// };

// for(let i in obj){  //      Выводит ключи объекта. Применяется только для объектов
//     console.log(i);
// }

// for(let i in obj){  //      Выводит значения ключей объекта
//     console.log(obj[i]);
// }

// for(let i in obj){  //      Выводит значения ключей объекта
//         console.log(`Ключ ${i}, Значение ${obj[i]}`);
// }

// arr.forEach(function(item, i, array){   //      Обращение к массиву , в индекс передаются элемент массиваБ его индекс и сам массив
//     console.log(`
//         Элемент ${item}
//         Индекс ${i}
//         Массив ${array}
//     `);
// });

// let people = [
//     {id: 1, name: "Иван"},
//     {id: 2, name: "Маша"},
//     {id: 3, name: "Сергей"},
//     {id: 4, name: "Катя"},
// ];
// let a = people.find(function(item){ //      Можем использовать не все параметры. Методом Find находим данный элемент. Методом findIndex() находим его индекс. Метод filter возвращает элемент массивом(так же можно выделить сразу несколько элементов)
//     if(item.id == 3) return item;   //      Возвращяем третий элемент
// });
// console.log(a); //      Выводим значение 3 элемента массива

// let arr = [5, 7, 9, 1, 0, 8];
// let newArr = arr.map(function(item){ //      
//     return item * 3;
// });
// console.log(newArr);

/**     Задачи       */

// вывести массив только из четных чисел
// let arr = [];
// for(let i = 0; i < 20; i+=2){
//     arr.push(i);
// }
// console.log(arr);

// Создать массив с числами от 30 до 2 и числа должны делиться на 3 без остатка
// let arr = [];
// for(let i = 30; i > 0; i-=3){
//     arr.push(i);
// }
// console.log(arr);

//      II

// for(let i = 30; i > 0; i--){
//     if(i % 3 == 0){
//         arr.push(i);
//     }
// }
// console.log(arr);


//Создать массив каждый элемент которого будет равен квадрату его индекса

// for(let i = 0; i < 10; i++){
//     arr.push(Math.pow(i,2));
// }
// console.log(arr);

//Найти количество четных элементов в массиве

// let arr1 = [1, 2, 4, 8, 6, 7, 9, 1, 14, 15, 3, 13];
// let count = 0;
// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] % 2 == 0){
//         count ++;
//     }
// }
// console.log("Всего четных элементов - " + count);



/**         ФУНКЦИИ        */


// function printText(name, age){  //      Параметры нужно передавать при вызове функции
//     console.log("Hello my name is " + name + " Age :" + age);
// }
// let name = "Dimon";
// let age = "23";
// printText(name, age);

// function printText1(name, age){  //      Параметры нужно передавать при вызове функции
//     return "Hello, my name is " + name + " Age :" + age;    //      return запоминает значение , но не выводит его на экран, после , мы можем его вывести куда нам потребуется и если это нам потребуется
// }
// console.log(printText1(name, age));

// let res = printText1(name, age);
// console.log(res);

// let obj = {
//     name: "Dima",
//     age: 23,
//     hello(){    //Метод объекта
//         console.log("Меня зовут " + this.name);
//     }
// };
// obj.hello();

// let arr = [1, 2, 4, 8, 6, 7, 9, 16, 14, 15, 3, 13];
// arr.sort(function(a, b){    //      По очереди сравнивает элементы массива сначала в a передается 1, а в b 2, и так далее
//     return a - b;
// });

// arr.sort((a, b) => a - b);  //      Стрелочная функция , делает то же самое , что и функция выше

// console.log(arr);   //      ВЫводит отсортированный массив


//Задача на числа фибоначчи

function fibonachi(count){
    let fib = [];
    for(let i = 0; i < count; i++){
        if(i == 0) fib[i] = 1;
        else if(i == 1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}

let f = fibonachi(30);
console.log(f);