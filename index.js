// пройти-----------------------------------------

// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0].nodeName);
// console.log(document.body.childNodes[3].nodeName);
// console.log(document.body.childNodes[1].nodeName);



//Содержимое узлов 

// console.log(document.body.innerHTML);
// // выводит то что находиться в диве
// console.log(document.querySelector("div").innerHTML);


// замена элементов на другой
// console.log(document.body.innerHTML);
// document.body.innerHTML = "New tekst";
// console.log(document.body.innerHTM);

// добавление ещё одного элемента
// console.log(document.body.innerHTML);
// document.body.innerHTML += "New tekst";
// console.log(document.body.innerHTM);


// let div = document.querySelector("div");
// div.outerHTML = "<p>new txt<p>";

// console.log(div.textContent);
// console.log(div.outerHTML);

// let span = document.querySelector("span");
// span.outerHTML = "<p>Donil<p>";
// console.log(span);


// let value = document.querySelector("button").childNodes[0].nodeValue;
// value = "qwerty"
// document.querySelector("button").innerHTML = "qwerty";
// console.log(value);

// просмотреть артрибуты
// let inp = document.querySelector("input").attributes;
// console.log(inp);


//удалили атрибут
// let inp = document.querySelector("input").removeAttribute("checked");
// console.log(inp);



// let order = document.querySelector(".order");
// // изменили атрибут 
// order.setAttribute("data-order-state", "canseled");



// let div = document.getElementById("elem");
// //показывает id элемента
// console.log(div.id);



// //выводит свои созданные атребуты
// let div = document.getElementById("elem");
// console.log(div.dataset.userLocation);


//создание нового элемента
// let name = document.createElement("div");
// name.innerHTML = "Tolik";
// document.body.prepend(name);



// let list = document.querySelector(".news");

// list.before("do");
// list.after("Posle");
// //создаем ли + добавляем её в начало списка
// let firstItem = document.createElement("li");
// firstItem.innerHTML = "Pervaya";
// list.prepend(firstItem);
// //воздаем и добавляем в конец списка
// let lastItem = document.createElement("li");
// lastItem.innerHTML = "last";
// list.append(lastItem);



//способы вставки
// let div = document.querySelector('div');

// div.insertAdjacentHTML('beforebegin', '<p>Hello</p>')

// div.insertAdjacentHTML('afterend', '<p>World</p>')

// div.insertAdjacentHTML('afterbegin', '<p>shis</p>')

// div.insertAdjacentHTML('beforeend', '<p>cant</p>')


// let clone = div.cloneNode(true);

// div.append(clone);



// let clone = document.querySelector("li").cloneNode(true);

// document.querySelector("li").append(clone);

// clone.innerHTML = "2";

// let clone2 = document.createElement("li");
// document.querySelector("li").append(clone2);
// clone2.innerHTML = "3";



// let item = document.querySelector('.item')

// console.log(item.classList.contains('red'))
// console.log(item.classList.contains('green'))
// //добавили  класс green 
// item.classList.add('green');
// // удалили класс red
// item.classList.remove('red');



let div = document.querySelector("div");

div.classList.add("name");

let span = document.createElement("span");
document.querySelector("div").append(span);
span.classList.add("red");
span.innerHTML = "red";

let p = document.createElement("p");
document.querySelector("div").append(p);
span.classList.add("green");
p.innerHTML = "green";

let div2 = document.createElement("div");
document.querySelector("body").append(div2);
div2.innerHTML = "текст";
div2.setAttribute(data-start,"0");
div2.setAttribute(data-finish, "10");

