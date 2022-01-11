// 1 number
// const num = 42; //integer
// const float = 42.42; //float
// const pow = 10e3;

//big int

// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));

// 3 Math

// Дата число в инпут
// let gas = document.querySelectorAll(".gas");
// let gallons = document.querySelector(".gallons");

// for (let i = 0; i < gas.length; i++) {
//   gas[i].addEventListener("click", function (params) {
//     let amount = gas[i].getAttribute("data");
//     gallons.value = 1 * amount;
//   });
// }

// console.log(gallons);

// Чекбоксы

// function one(params) {
//   let chbox = document.getElementById("one");

//   if (chbox.checked) {
//     alert("Выбран");
//   } else {
//     alert("Не выбран");
//   }
// }

// Задать значения в инпут по кнопке
// function one(params) {
//   let radi = document.getElementsByName("r1");
//   for (i = 0; i < radi.length; i++) {
//     if (radi[i].checked) {
//       alert("Выбран " + i + " элемент");
//     }
//   }
// }

// Скругление краёв блока по значениям и ползункам range

// function fun1(params) {
//   let rtl = document.getElementById("rtl").value,
//     rtr = document.getElementById("rtr").value,
//     rbr = document.getElementById("rbr").value,
//     rbl = document.getElementById("rbl").value,
//     ttl = document.getElementById("ttl"),
//     ttr = document.getElementById("ttr"),
//     tbr = document.getElementById("tbr"),
//     tbl = document.getElementById("tbl"),
//     block = document.getElementById("block");

//   ttl.value = rtl;
//   ttr.value = rtr;
//   tbr.value = rbr;
//   tbl.value = rbl;

//   block.style.borderRadius =
//     rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
// }

// Выпадающее меню

// document.getElementById("nav").onmouseover = function (event) {
//   let target = event.target;
//   if (target.className == "menu-item") {
//     let s = target.getElementsByClassName("submenu");
//     closeMenu();
//     s[0].style.display = "block";
//   }
// };

// document.onmouseover = function (event) {
//   let target = event.target;

//   if (target.className != "menu-item" && target.className != "submenu") {
//     closeMenu();
//   }
// };
// function closeMenu() {
//   let menu = document.getElementById("nav");
//   let subm = document.getElementsByClassName("submenu");
//   for (let i = 0; i < subm.length; i++) {
//     subm[i].style.display = "none";
//   }
// }

// let tab;
// let tabContent;

// window.onload = function () {
//   tabContent = document.getElementsByClassName("tabContent");
//   tab = document.getElementsByClassName("tab");
//   hideTabsContent(1);
// };

// function hideTabsContent(a) {
//   for (let i = a; i < tabContent.length; i++) {
//     tabContent[i].classList.remove("show");
//     tabContent[i].classList.add("hide");
//     tab[i].classList.remove("whiteborder");
//   }
// }

// document.getElementById("tabs").onclick = function (event) {
//   let target = event.target;
//   if (target.className == "tab") {
//     for (let i = 0; i < tab.length; i++) {
//       if (target == tab[i]) {
//         showTabsContent(i);
//         break;
//       }
//     }
//   }
// };

// function showTabsContent(b) {
//   if (tabContent[b].classList.contains("hide")) {
//     hideTabsContent(0);
//     tab[b].classList.add("whiteborder");
//     tabContent[b].classList.remove("hide");
//     tabContent[b].classList.add("show");
//   }
// }


// let money = +prompt('Ваш бюджет на месяц?'),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//   budget: money,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   timeData: time,
//   savings: false
// };





// for(let i=0; i<2; i++) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько обойдётся?', '');
//       if ((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null
//       && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//       }

// };

// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюджет ' + appData.moneyPerDay);

// if(appData.moneyPerDay < 100) {
//   console.log('Минимальный уровень достатка');

// } else if (appData.moneyPerDay < 2000) {
//   console.log('Средний уровень достатка');

// } else if (appData.moneyPerDay > 2000) {
//   console.log('Высокий уровень достатка');

// } else {
//   console.log('Произошла ошибка');
// }




// ГУЛЬ КОД
// let step=1000;


//   function ghoul() {

//     for(let i = 0; i<142; i++ ) {
//       console.log(step);
//       let a = step - 7;
//       step = a;
//       console.log(a);
//     }
//   }

//   ghoul();




// Функция умножения двух чисел
// function double(x,y) {
//     let result = x*y;
//     console.log(result);
// }
// double(4,4);


// Вывод имени, фамилии, возраста

// function hello(firstName, lastName, age) {
//     console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
// }

// hello('Андрей', 'Малюгин', 20);


// функция выбора пола

// function chooseMale(){
//    let a = prompt('Какой у вас пол (мужской/женский)');
//    if(a == 'мужской' || a == 'женский' || a == 'Женский' || a == 'Мужской'){
//        console.log(`Ваш пол ${a}`);
//    } else {
//        console.log('Ваш пол не определён');
//    }
//    return a;
// }

// chooseMale();


// Функция Итерирования по массиву, сравнение числа с днём недели

// let weekend = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// function dayOfWeek() {
//     let a = prompt('Введите число от 1 до 7');
//     weekend.forEach(function(item, index, array) {
//        if(a == (index + 1)) {
//            console.log(item);
//        }
//     });
// }

// dayOfWeek();


// Функция возвращения первого слова в каждом предложении после запятой

// let str = 'Всем добра, позитива, классного настроения, жизнилюбия';
// function firstWord() {
//     let firstWords = (s) => s.split(',').filter(s => s != '').map(s => s.trim().split(' ')[0]).join(', ');
//     console.log(firstWords(str));   
// }

// firstWord();

// Функция приветствия пользователя в зависимости от текущего времени
// let date = new Date();


// function time(name) {
//     let a = date.getHours();
//     if(a >= 6 && a <=10) {
//         console.log('Доброе утро ' + name);
//     } else if( a >= 11 && a <= 17) {
//         console.log('Добрый день ' + name);
//     } else if(a>=18 && a<= 20) {
//         console.log('Добрый вечер ' + name);
//     } else {
//         console.log('Доброй ночи ' + name);
//     }
// }

// time('Андрей');


// Функция определяющая состояние по возрасту

// function ages() {
//     for(let i=1; i<101; i++) {

//         if(i>=1 && i<=17 ) {
//             document.write( i  + ' ребёнок ' +'<br>');

//         } else if(i>=18 && i<=30) {
//             document.write( i  + ' молодой ' +'<br>');

//         } else if(i>=31 && i<=55) {
//             document.write( i  + ' зрелый ' +'<br>');

//         } else {
//             document.write( i  + ' старый ' +'<br>');

//         }
//     }

// }

// ages();

// function getType(age) {
//     if(age <=17) return 'ребёнок';
//     else if(age >= 18 && age <=30) return 'молодой';
//     else if (age >=31 && age <= 55) return 'зрелый';
//     else return 'старый';
// }





// function promptName(name, age) {
//     name = prompt('Введите ваше имя');
//     age = prompt('Введите ваш возраст');

//     console.log(`${name} имеет возраст ${age} и он ${getType(age)}`);


// }
// promptName();


// Функция возвращения true, если все элементы чётные, и false если хотябы один - нечётный


// let someArray = [3,4,6,8];

// let result = someArray.every(function(elem){
//     if(elem % 2 == 0) {
//         return true;

//     } else {
//         return false;
//     }
// });
// console.log(result);




// Функция возвращения true, если хотябы один элемент нечётный, и false если все чётные

// let someArray = [6,4,3];



// let result = someArray.some(function(elem) {
// 	return elem % 2 !=0;
// });

// console.log(result);


// Функция возващающая новый массив кратный 5, с заданными пользователем числами

// let interact = prompt('Введите целые числа через запятую');
// let someArray = interact.split(',');

// console.log(someArray);
// let result = [];
// function numbers(arr) {
//     for( let i=0; i<arr.length; i++) {
//         if(arr[i]%5 == 0 ) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// numbers(someArray);
// console.log(result);


// Функция нахождения среднего арифметического в заданном пользователем массиве

// let interact = prompt('Введите целые числа через запятую');
// let someArray = interact.split(',');
// let result = someArray.map(parseFloat);
// console.log(result);

// function numbers(arr) {
//    return arr.reduce((acc, number) => acc + number, 0) / arr.length;



// }

// numbers(result);

// console.log(numbers(result));


// хз
// let interact = prompt('Введите целые числа через запятую');
// let someArray = interact.split(',').map(parseFloat);


// console.log(someArray);


// function numbers(arr) {
//     arr.splice(arr.length - 1, 1, arr[0]);
//     arr.slice();
//     arr.shift();
//     return arr;





// }

// numbers(someArray);

// console.log(numbers(someArray))




// Функция складывает все значения ключей (зарплату всех сотрудников) в объекте

// let solaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

//  function showProps(obj){
//     let result = 0;
//     for(let i in obj) {
//         if (obj.hasOwnProperty(i)) {

//             result += obj[i]; 

//         }
//     }
//     return result;
// }

// showProps(solaries);
// console.log(showProps(solaries));






// Функция умножает на 2 все числовые значения в объекте

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// };



// function multiplyNumeric(obj) {
//     for(let bazm in obj) {
//         if(typeof obj[bazm] == 'number'){
//             obj[bazm]= obj[bazm]*2;
//         }
//     }
// }
// multiplyNumeric(menu);




// Лестница)))




// let ladder = {
//     step: 0,
//     showStep: function() {
//         console.log(ladder.step);
//     },
//     up: function() {
//         ladder.step+=1;
//     },
//     down: function() {
//         ladder.step-=1;
//     }
// };






// Создаёт кнопку и по нажатию выводит алёрт "Привет мир!"

// let btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerHTML = 'Кнопка';
// document.body.append(btn);

// btn.addEventListener('click', function() {
//     alert('Привет Мир!');
// });





// При нажатии на кнопку заполняется input

// let btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerHTML = 'Заполнить';
// document.body.append(btn);

// let input = document.getElementById('fill');

// btn.addEventListener('click', function(){
//     input.value = 'test@email.ru';
// });





// Выводит текст инпута в алёрт по нажатию на кнопку

// let btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerHTML = 'Заполнить';
// document.body.append(btn);

// let input = document.getElementById('fill');

// btn.addEventListener('click', function(){
//     if(input.value == '') {
//         alert(`Вы ничего не ввели`);
//     } else {
//         alert(`Вы ввели ${input.value}`);
//     }
// });



// Функция меняющая значения двух инпутов местами по нажатию на кнопку


// let btn = document.createElement('button'),
//     firstInput = document.getElementById('first-input'),
//     secondInput = document.getElementById('second-input');
// btn.id = 'btn';
// btn.innerHTML = 'Поменять';
// document.body.append(btn);

// btn.addEventListener('click', function(){

//     if (firstInput.value == '' || secondInput.value == '') {
//         alert('Вы ничего вввели!');
//     } else {
//         let tmp;
//         tmp = firstInput.value;
//         firstInput.value = secondInput.value;
//         secondInput.value = tmp;
//     }
// });







// Блокирует и разблокирует инпут по кнопкам


// let btn = document.createElement('button'),
//     btnSecond = document.createElement('button'),
//     firstInput = document.getElementById('first-input');

// btn.id = 'btn';
// btn.innerHTML = 'Заблокировать';
// document.body.append(btn);
// btnSecond.id = 'btn-second';
// btnSecond.innerHTML = 'Разблокировать';
// document.body.append(btnSecond);

// btn.addEventListener('click', function(){
//     firstInput.disabled = true;
// });


// btnSecond.addEventListener('click', function(){
//     firstInput.disabled = false;
// });





// Функция скрывающая квадрат и показывающая его 

// let btn = document.createElement('button'),
//     square = document.createElement('div');

// btn.id = 'btn';
// square.id = 'square';
// btn.innerHTML = 'Скрыть квадрат';
// document.body.append(btn);
// document.body.append(square);

// btn.addEventListener('click', function() {
//     square.classList.toggle('active');
//     if(square.classList.contains('active') ) {
//         btn.innerHTML = 'Показать квадрат';
//     } else {
//         btn.innerHTML = 'Скрыть квадрат';
//     }


// });





// Меняет цвет квадрата при наведении мыши 


// let square = document.createElement('div');
// square.id = 'square';
// document.body.append(square);

// square.addEventListener('mouseover', function(){
//     square.style.backgroundColor = 'green';
// });


// square.addEventListener('mouseout', function(){
//     square.style.backgroundColor = 'red';
// });



// Делигирование событий, сколько бы не было квадратов - меняет цвет по клику и удаляет его у остальных 

// let wrapper = document.querySelector('.inner');
// let selectedSquare;

// wrapper.onclick = function(event) {
//     let target = event.target;

//     if(target.className !='square') return;
//     highlight(target);
// }

// function highlight(square) {
//     if(selectedSquare) {
//         selectedSquare.classList.remove('highlight');
//     }
//     selectedSquare = square;
//     selectedSquare.classList.add('highlight');

// }




// Калькулятор 

// let op;

// function func() {
//     let result;
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);


//     switch(op) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;    
//         case '/':
//             result = num1 / num2;
//             break;    

//     }
//     document.getElementById("result").innerHTML = result;
// }



//  просто тренил switch/case

// let a = 2+2;

// switch(a) {
//     case 3:
//         console.log('Маловато');
//         break;
//     case 4:
//         console.log('В точку');
//         break;
//     case 5:
//         console.log('Перебор');
//         break;    
//     default:
//         console.log('Пиздец');
//         a -= 2;
//         console.log(a);
//         break;

// }



// let browser = 'operaGX';
// if(browser == 'Edge') {
//     console.log('that old browser, u dont use it');
// } else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari') {
//     console.log('thats grate browser, but u dont have it');
// } else if(browser == 'operaGX') {
//     console.log('Yep, you choose operaGX, thank you!');
// } else {
//     console.log('Our system dont know that browser, error 404');
// }


// let number = +prompt('Введите число между 0 и 3', ' ');
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3)) хзз))');
//         break;
//     default:
//         alert('За гранью моего счетоводства');
// }


// let a = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// };
// let obj = Object.keys(a);
// console.log(obj)

// obj.unshift('react', 'vue', 'angular');
// console.log(obj)

// obj.splice(-1, obj.length, 'html', 'php', 'wordpress');
// console.log(obj)


// let age = prompt('Сколько вам лет?', 18);

// let welcome = (age<18) ?
//     ()=> alert('Привет!') :
//     ()=> alert('Здравствуйте');

// welcome();

// class Animal {
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }
//     voice() {
//         console.log('I am Animal');
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail:true
// // });

// class Cat extends Animal {
//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }
//     voice() {
//         super.voice();
//         console.log('I am Cat');
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// });


// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//     hide() {
//         this.$el.style.display = 'none';
//     }

//     show() {
//         this.$el.style.display = 'block';
//     }
//     switchToGreen() {
//         this.$el.style.backgroundColor = 'green';
//     }
// }


// class Box extends Component{
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.backgroundColor = options.color;
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// });





// Классы JS

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//     stop(){
//         this.$el.style.backgroundColor = 'red';

//     }

// }

// class Circle extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size +'px';
//         this.$el.style.backgroundColor = options.color;
//         this.$el.style.borderRadius = '50%';
//         this.$el.style.border = options.border + 'px ' + options.borderColor + ' solid';
//         this.$el.style.marginBottom = options.marginBottom + 'px';
//     }
// }

// const circle = new Circle({
//     selector: '#circle',
//     size: 100,
//     color: 'yellow',
//     border: 1,
//     borderColor: 'black',
//     marginBottom: 10
// });

// const secondCircle = new Circle({
//     selector: '#circle2',
//     color: 'orange',
//     size: 100,
//     border: 1,
//     borderColor: 'black',
//     marginBottom: 10
// });


// const thirdCircle = new Circle({
//     selector: '#circle3',
//     color: 'green',
//     size: 100,
//     border: 1,
//     borderColor: 'black'

// });



// TIMER

let deadline = '2022-01-13';

function getTimeRemaining(endtime) {
    let t = (Date.parse(endtime) - Date.parse(new Date()) - 10800000),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}
title = document.querySelector('.title');

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours + 'h';
        minutes.textContent = t.minutes + 'm';
        seconds.textContent = t.seconds + 's';

        if (t.total <= 0) {
            clearInterval(timeInterval);
            title.style.display = 'none';
            timer.style.display = 'none';

            endCongrac();
        }
    }

}

setClock('timer', deadline);


function setPetya() {
    let i = 0,
        ru = ['До разрыва очка Пети осталось', 'До вскрытия кучерявого ебала Пети осталось', 'До разбитияяя ебальника Пети осталось', 'До ебли пети в очко осталось', 'До опуска кучерявой бошки пети осталось', 'до сосания члена пети осталось '];


    function updatePet() {
        title.innerHTML = ru[i++];
        i = i % 6;

    }
    setInterval(updatePet, 1000);





}
setPetya();




function endCongrac() {
    $(function() {
        var canvas = $('#canvas')[0];
        $("canvas").addClass("active");
        canvas.width = $(window).width();
        canvas.height = $(window).height();
        var ctx = canvas.getContext('2d');


        // resize
        $(window).on('resize', function() {
            canvas.width = $(window).width();
            canvas.height = $(window).height();
            ctx.fillStyle = '';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        // init
        ctx.fillStyle = '';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // objects
        var listFire = [];
        var listFirework = [];
        var fireNumber = 10;
        var center = { x: canvas.width / 2, y: canvas.height / 2 };
        var range = 100;
        for (var i = 0; i < fireNumber; i++) {
            var fire = {
                x: Math.random() * range / 2 - range / 4 + center.x,
                y: Math.random() * range * 2 + canvas.height,
                size: Math.random() + 0.5,
                fill: '#fd1',
                vx: Math.random() - 0.5,
                vy: -(Math.random() + 4),
                ax: Math.random() * 0.02 - 0.01,
                far: Math.random() * range + (center.y - range)
            };
            fire.base = {
                x: fire.x,
                y: fire.y,
                vx: fire.vx
            };
            //
            listFire.push(fire);
        }

        function randColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = 'rgb($r, $g, $b)';
            color = color.replace('$r', r);
            color = color.replace('$g', g);
            color = color.replace('$b', b);
            return color;
        }

        (function loop() {
            requestAnimationFrame(loop);
            update();
            draw();
        })();

        function update() {
            for (var i = 0; i < listFire.length; i++) {
                var fire = listFire[i];
                //
                if (fire.y <= fire.far) {
                    // case add firework
                    var color = randColor();
                    for (var i = 0; i < fireNumber * 5; i++) {
                        var firework = {
                            x: fire.x,
                            y: fire.y,
                            size: Math.random() + 1.5,
                            fill: color,
                            vx: Math.random() * 5 - 2.5,
                            vy: Math.random() * -5 + 1.5,
                            ay: 0.05,
                            alpha: 1,
                            life: Math.round(Math.random() * range / 2) + range / 2
                        };
                        firework.base = {
                            life: firework.life,
                            size: firework.size
                        };
                        listFirework.push(firework);
                    }
                    // reset
                    fire.y = fire.base.y;
                    fire.x = fire.base.x;
                    fire.vx = fire.base.vx;
                    fire.ax = Math.random() * 0.02 - 0.01;
                }
                //
                fire.x += fire.vx;
                fire.y += fire.vy;
                fire.vx += fire.ax;
            }

            for (var i = listFirework.length - 1; i >= 0; i--) {
                var firework = listFirework[i];
                if (firework) {
                    firework.x += firework.vx;
                    firework.y += firework.vy;
                    firework.vy += firework.ay;
                    firework.alpha = firework.life / firework.base.life;
                    firework.size = firework.alpha * firework.base.size;
                    firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
                    //
                    firework.life--;
                    if (firework.life <= 0) {
                        listFirework.splice(i, 1);
                    }
                }
            }
        }

        function draw() {
            // clear
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.18;

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // re-draw
            ctx.globalCompositeOperation = 'screen';
            ctx.globalAlpha = 0.0;
            for (var i = 0; i < listFire.length; i++) {
                var fire = listFire[i];
                ctx.beginPath();
                ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = fire.fill;
                ctx.fill();
            }

            for (var i = 0; i < listFirework.length; i++) {
                var firework = listFirework[i];
                ctx.globalAlpha = firework.alpha;
                ctx.beginPath();
                ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = firework.fill;
                ctx.fill();
            }
        }
    })
}
