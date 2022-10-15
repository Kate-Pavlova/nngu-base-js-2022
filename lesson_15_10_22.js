/*function showMessage(message) {
  console.log(message);
}
showMessage("Hi");


function sum (a, b=0) {
    console.log(a+b);
}
sum(2,3);
sum(2)

function sum (a, b=0) {
    return a+b
    }
const result = sum (2,3);
console.log (result);
console.log ( sum (2,3));


function positiveSum (a,b) {
    if (a>0 && b>0) {
        return a+b;
    }
    return "Ошибка вычисления"
}
console.log(positiveSum(2,3));
console.log(positiveSum(-2,3));



function getUserName () {
    const userName = "Alex";
    return userName;
}


function getName () {
    const userName = "Ivan";
    return userName;
}
console.log (getName());
console.log (getUserName());


const name = "Alex";

function sayHello (message = "Hello") {
    const name="Ivan";
    console.log(`${message} - ${name}!!!`)
}

sayHello();
sayHello("Привет");



let a=0;

function sum (b) {
    const result = a+b;
    console.log (result);
}
sum (2);
sum (2);


function sayHello(userPerson = "Guest") {
  console.log(`hello  ${userPerson}!!!`);
}
sayHello("Kate");
sayHello();

function powCh (a, b=1) {
        console.log(Math.pow(a, b))
};
powCh (2,5);


let arr1= [];
function averageArr (arr1) {

}


const sayHello = function (name) {
    console.log (`Hello ${name}`);
};
sayHello("Alex");
console.log (sayHello);

отложенная функция см ниже


const sayHello = function (name) {
    console.log (`Hello ${name}`);
};


const funcExample = function (callback) {
    for(let i=0; i<10000000000; i+=) {}
    callback ("Alex")
};
funcExample(sayHello);



sum (1,2);
function sum(a,b){
    console.log(a+b);
};


const getName = (name) => `Name - ${name}`;
console.log(getName("Alex"));
console.log(getName("Ivan"));

const getNameTwo = (name) => {
  return `Name -  ${name}`;
};

const kvadr = (a) => a ** 2;
console.log(kvadr(3));





const vivodStr = (str, n) => {
  for (let i = 0; i <= n; i++) {
    console.log(str);
  }
};
vivodStr ("hello",5);

*/
const isVolwel = (letter) => {
    if ( letter ===="a" || letter ===="о"||letter ===="у" || letter ===="ы")
   {
    return true;
   }
    return false;
     };

  