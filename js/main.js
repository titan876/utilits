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

// function fibonachi(count){
//     let fib = [];
//     for(let i = 0; i < count; i++){
//         if(i == 0) fib[i] = 1;
//         else if(i == 1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }

// let f = fibonachi(30);
// console.log(f);


// Задача на факториал

// function factorial(n){
//     let fact = 1;
//     if(n == 0) return fact;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }

// let a = factorial(8);
// console.log(a);

// Задача сумма и произведение чисел в строке
// Второй способ записи функции

// let addAndMul = function(num){
//     num += ""; //Превращаем переменную в строку
//     let add = 0, mul = 1;
//     for(let i = 0; i < num.length; i++){
//         add += +num[i];
//         mul *= num[i];
//     }
//     return{ //      возврат объекта
//         "Сумма": add,
//         "Произведение": mul
//     };
// };

// console.log(addAndMul("79545"));


//  Задача Числа наоборот
// function revers(number){
//     number += "";
//     let reversNumber = "";
//     for(let i = number.length - 1; i >= 0; i--){
//         reversNumber += number[i];
//     }
//     return +reversNumber;
// }

// console.log(revers(12345));


//Задача на количество четных и нечетных цифр в числе

// function chetNechet(number){
//     number += "";
//     let chet = 0, nechet = 0;
//     for(let i = 0; i < number.length; i++){
//         if(number[i] % 2 == 0) chet ++;
//         else nechet++;
//     }
//     return{
//         "Четные числа": chet,
//         "Нечетные числа": nechet
//     };
// }

// console.log(chetNechet("87946549876516541"));


//Задача на угадывание рандомного числа
// function randomNum(){
//     let num = Math.floor(Math.random()*100);
//     for(let i = 1; i <= 10; i++){
//         let result = +prompt(`Попытка № ${i}, Введите число:`);
//         if (result == num){
//             return alert(`Вы угадали число! Попыток: ${i}, число: ${num}`);
//         }else if(result < num){
//             alert(`Ваше число ${result} Меньше загаданного`);
//         }else{
//             alert(`Ваше число ${result} больше загаданного`);
//         }
//     }
//     return alert(`Вы не угадали число, Ответ: ${num}`);
// }

// randomNum();


/**         ДАТА И ВРЕМЯ        */


// let a = new Date(60000);  //     Новый объект класса Date    // Параметр - число миллисекунд
// let b = new Date("2015-05-01T10:15:36.941");
// console.log(Date.parse("2015-05-01T10:15:36.941")); // Получаем количество миллисекнуд с января 1970
// let a = new Date(2019,6,21,18,51,54,965); //        Месяца начинаются с 0
// console.log(a.getFullYear());   //      getFullYear - Получаем год от даты
// console.log(a.getMonth());   //      getMonth - Получаем месяц от даты
// console.log(a.getDate());   //      getDate - Получаем День от даты
// console.log(a.getHours());   //      getHours - Получаем Час от даты
// console.log(a.getDay());   //      getDay - Получаем День недели от 0 до 6 , при этом 0 - это воскресенье , а 6 - суббота
// console.log(a.getTime());   //      getTime - Получаем число миллисекнуд
// console.log(a.getTimezoneOffset());   //      getTimezoneOffset - Получаем разницу между нашим часовым поясом и UTC 0
// let a = new Date(2021,1,28);
// a.setDate(a.getDate() + 2);
// console.log(+a);

// let a = Date.now(new Date());
// for(let i = 0; i < 1000; i++){
//     console.log(0);
// }
// let b = Date.now(new Date());
// console.log(b-a);   //      Время за которое выполнился цикл


//  ВЫвод даты
// let a = new Date(2021,11,15,12,30,0); 
// let options = {
//     // era: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     weekday: "long",
//     // timezone: "UTC",
//     hour: "numeric",
//     minute: "numeric",
//     // second: "numeric"
// }

// console.log(a.toLocaleString("ru", options));


/**         ДОКУМЕНТАЦИЯ КОДА        */


/**
 * Функция преобразует строку с временем в минуты
 * @param {string} time Время в виде строки, например "02:08" МОжет быть в диапазоне от "00:00" до "23:59".
 * @return {number} Целое число в минутах, например время - "02:08" вернет 128 минут
 */

// function timeToMinute(time){
//     try{
//         let hour = +time.split(":")[0];
//         let minute = +time.split(":")[1];
//         if(!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)){
//             throw new RangeError("Аргумент должен быть в формате 'HH:MM' 'HH' - должен быть от 0 до 23, а 'MM' - от 0 до 59. 'HH' и 'MM' должны быть числами и разделяться знаком ':'");  //      Генерирует ошибку
//         }
//         return hour * 60 + minute;
//     } catch(error){
//         console.log(error);
//     }
// }

// console.log(timeToMinute("02:08"));


/**         ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ        */

// let admin = {
//     rules: 777,
//     isAdmin(){
//         console.log("Я админ, " + this.name + " мои права " + this.rules);
//     }
// };


// function User(name,age){    //      Функция конструктор , называется с большой буквы
//     this.name = name;
//     this.age = age;
//     this.myInfo = function(){
//         console.log("Я админ, " + this.name + " мои права " + this.rules);
//     }
//     // this.__proto__ = admin;
// }

// class User{    //     То же самое что и выше , только с помощью класса 
//     constructor(name, age, admin = false){
//         this.name = name;
//         this.age = age;
//         this.admin = admin;
//     }
//     myInfo(){
//         console.log("Меня зовут " + this.name + " Возраст: " + this.age);
//         if(this.admin == true){
//             console.log(" Я админ");
//         }
//     }
// }
// class Moderator extends User{   //      Унаследование класса, унаследование определенного класса с помощью команды extends
//     constructor(name, age, admin = false, moder = true){
//         super(name, age, admin);    //      Так же добавляем с помощью super свойства из конструктора родителя
//         this.moder = moder;
//     }
//     static addPost(){   //      Статическое свойство вызывается через точку, работает непосредственно с классом а не с объектом
//         console.log("new Post");
//     }
//     static master = true;
//     myInfo(){
//         super.myInfo(); //      Спомощью super можно добавить ниже дополнительные свойства к методу myinfo
//         console.log(" Я Модератор");
//     }
// }

// let u1 = new User("Dima", 23, true);
// let u2 = new User("Petya", 22);
// let u3 = new User("Misha", 19);
// let m1 = new Moderator("Kate", 24, true);   //      Имеет свойства класса родителя


//      Практика


// class People{
//     /**
//      * 
//      * @param {String} fio По формату "Фамилия Имя Отчество"
//      * @param {String} bday День рождения по формату "24.04.1998"
//      * @param {String} num номер, если больше 2 номеров, то по формату "номер1 , номер2"
//      * @param {Number} room Комната, просто номер комнаты
//      */
//     constructor(fio, bday, num = "", room = ""){
//         let name = fio.toLowerCase().split(" ");
//         this.name = {};
//         this.name.f = name[0][0].toUpperCase() + name[0].slice(1); //       Фамилия с большой буквы. Первый индес - Фамилия , второй индекс первый символ фамилии. Далее пприбавляем все остальное с помощью slice с 1 индекса
//         this.name.i = name[1][0].toUpperCase() + name[1].slice(1);
//         this.name.o = name[2][0].toUpperCase() + name[2].slice(1);

//         let date = bday.split(".");
//         this.date = {};
//         this.date.d = +date[0];
//         this.date.m = +date[1];
//         this.date.y = +date[2];

//         this.number = num.split(", ");

//         this.room = +room;
//     }

//     static month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//     /**
//      * Вывести ФИО
//      * @return {String} Строка формата Фамилия Имя Отчества
//      */
//     getFio(){
//         return `${this.name.f} ${this.name.i} ${this.name.o}`;
//     }

//     /**
//      * Вывести день рождения
//      * @return {String} Строка формата 8 июля 1998
//      */
//     getBdate(){
//         return `${this.date.d} ${People.month[this.date.m - 1]} ${this.date.y}`;
//     }

//     /**
//      * Вывести Фамилия имя отчество.расширение
//      * @param {String} extention Расширение , например JPEG или PNG
//      * @return {String} для названия Изображения
//      */
//     getImgSrc(extention){
//         return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`;
//     }

//     /**
//      * Вывести все номера телефонов или только первый номер
//      * @param {Boolean} allNumbers если true то все номера, есть false , то только первый номер
//      * @return {String} Сттрока формата "89995823674"
//      */
//     getNumberList(allNumbers){
//         if(this.number.length == 0 || this.number[0].length == 0)
//             return undefined;
//         if(allNumbers){
//             return this.number.join(", ");
//         } else {
//             return this.number[0];
//         }
//     }
// }

// let people1 = new People("поливкина виктория сергеевна", "24.04.1998", "89255314789, 89772805239", 523);
// let people2 = new People("беляев дмитрий алексеевич", "08.07.1998", "", 144);
// console.log(people1.getFio());
// console.log(people2.getFio());


/**         Возможности ES6        */


// function sum(a, b){
//     return a+b;
// }

// let date = [4, 5];
// console.log(sum(...date)); //        ... - это оператор расширения

// let [a, b, c, d] = [10, 5, 8, 9];   //      Диструктивное присваивание

// let sum1 = (a, b, c) => {return a+b+c};
// let sum1 = (a, b, c) => a + b + c;  //      Второй способ

// console.log(sum1(5, 6, 8));

// let a = 0b0111; //      Возможность записывать переменные в двоичной системе счисления, в результате мы получаем число в десятичной
// let b = 0o10;   //      То же самое , только в 8 системе счисления
// console.log(a);
// console.log(b);

// let d = NaN;
// console.log(Number.isNaN(d));   //      Проверяем получилось ли значение NaN


//      Триганометрические методы
// console.log(Math.sinh(0));  //      Гиперболический синус
// console.log(Math.cosh(0));  //      Гиперболический косинус
// console.log(Math.tanh(0));  //      Гиперболический тангенс
// console.log(Math.asinh(0)); //      Обратный Гиперболический синус
// console.log(Math.acosh(1)); //      Обратный Гиперболический косинус
// console.log(Math.atanh(0)); //      Обратный Гиперболический тангенс
// console.log(Math.hypot(2, 2, 1));   //      Теорема пифагора

//      Алгибраические методы
// console.log(Math.log2(16)); //      Логарифм по основанию 2
// console.log(Math.log10(1000)); //      Логарифм по основанию 10
// console.log(Math.log1p(0)); //      То же самое что и log(1 + Value)
// console.log(Math.expm1(0)); //      Обратная функция log1p
// console.log(Math.cbrt(8)); //      Корень кубический


// console.log(Math.sign(16)); //      Определяет знак числа
// console.log(Math.sign(-16));
// console.log(Math.sign(0));

// let a = "Hello i'm simple string".repeat(5); //      Меттод для повторения строки
// console.log(a.includes("simple", 1));   //      Метод для поиска в строке. Можно указать индекс с какого вести поиск нужного слова
// console.log(a.startsWith("simple"));    //      Начинается с
// console.log(a.endsWith("string"));  //      Заканчивается на

// let arr = ['a','b','c'];
// let entries = arr.entries();
// let keys = arr.keys();
// let values = arr.values();
// // arr.fill(0,1,3);    //      Заполнить массив 0 с 1 элемента по 3 элемента
// console.log(arr);
// console.log(...entries); //      Возвращает индекс и значение массива
// console.log(...keys);    //      Возвращает индексы
// console.log(...values);  //      Возвращает значения массива

//      Множества
// let set = new Set();    //      Элементы не могут повторяться
// set.add(1);     //      Добавляются значения
// set.add(2);
// set.add(3);
// set.add(1);     //      еще одна единица не добавтся
// console.log(set);
// console.log(set.has("4"));  //      проверяет есть ли значение в множестве
// console.log(set.size);   //     размер множества
// set.delete(2);  //      Удаляем элемент 2 из множества
// console.log(set);
// set.clear();        //      Очищает множество
// console.log(set);

// let arr = [1,2,3,4,5,6,8,7,1,4,3,5]
// let arr2 = [...new Set(arr)];   //      Удаляет все дублирующиеся элементы массива
// console.log(arr2);




/**         РАБОТА С DOM        */

//Записи о каждом уроке в папке example_DOM

