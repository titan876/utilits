/*          СТРОКИ           */

let str = "Word";
let text = " СТрока ";
console.log(str.length); //     length - ДЛИНА СТРОКИ
console.log(str.slice(1,2));  //      slice() - ПОЛУЧАЕТ ПОДСТРОКУ ИЗ СТРОКИ
console.log(str.toLocaleUpperCase()); //      Превращает строку в заглавные/прописные символы
console.log(text.toLocaleLowerCase().trim()); //    trim() - убирает лишние пробелы
let str1 = text.toLocaleLowerCase().trim();
console.log(str1[0].toUpperCase() + str1.slice(1)); //      Убрали пробелы и сделали 1 букву заглавной

let a = 7;
console.log(`text   
on 2 line ${a}`);   // МОЖНО ЗАПИСАТЬ ТЕКСТ В 2 СТРОКИ И ВЫВЕСТИ ПЕРЕМЕННЫЕ 


/**         ЧИСЛА        */

console.log(Math.random()); //      РАНДОМНОЕ ЧИСЛО 
console.log(Math.max(1,2,4,5,6,10));  //    ВЫВОДИТ МАКСИМЛЬНО ЗНАЧЕНИЕ ИЗ ЗАДАННЫХ
console.log(Math.pow(2,5));  //     возведение в степень 2^5
console.log(Math.sqrt(25));  //     вкадратный корень
console.log(Math.floor(3.2));  //       Округляет в меньшую сторону
console.log(Math.ceil(3.1));  //       Округляет в большую сторону
console.log(Math.round(3.2));  //       Округляет в к ближайшему числу
console.log(Math.trunc(3.2));  //       Округляет все что после запятой
console.log(4.75896.toFixed(3));  //       Округляет до знаков после запятой
let b = "5";
console.log(+a+5);  //  сложение строки и числа


/**     МАССИВЫ      */

let arr = [5, 2, "str", true];
console.log(arr);
console.log(arr.length);  //        ВЫводим длину массива
console.log(arr[2]);  
arr[2] = "Text";  //        Меняем элемент массива
console.log(arr);
arr[4] = 8;  //     Добавляем новый элемент массива
console.log(arr);

let matrix = [      //      Вложенный массив
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(matrix);
console.log(matrix[1][2]);
console.log(matrix[matrix.length-1]);  //       Получаем последний элемент массива

console.log(arr.shift());  //       Удаление первого элементма массива
console.log(arr.push(15));  //      Добавление элемента массива в конец
console.log(arr.pop());  //       Удаление последнего элементма массива
console.log(arr.unshift(6));  //       Добавление элемента массива в начало

let arr2 = [1, 2, 3];

console.log(arr.concat(arr2));  //      Объеденение массивов
let arr3 = arr.concat(arr2);

console.log(arr.indexOf("str")); //     Получаем значение индекса элемента
console.log(arr.join(", "));  //        Объединение элементов массива в строку

console.log(arr.splice(1, 1));  //      Удаляем количество элементов |    с какого индекса  |    сколько элементов  |   (необязательно) на что меняем элемент
console.log(arr.splice(1, 0, 7, 5, "text"));  //        Добавляем элементыпосле 1
console.log(arr.splice(2, 1, "new str"));  //       Заменяем 2 элемент
console.log(arr.splice(-1, 0, "add element"));  //      Добавляет элемент перед последним элементом

console.log(arr.slice(0, 3));  //       Возвращяет элементы массива с 1 по 3
console.log(arr.slice(3));  //      С заданного элемента и до конца массива