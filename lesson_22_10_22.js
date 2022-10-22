/*const key= "firstName"
const person = {
    [key]: "Alex",
    sayHello:function(){
        console.log("hello i am Alex")
    }
};

person.age = 56;
person['city-name']='NN';

/*console.log (person.firstName);
console.log(person['city-name'])

console.log (person.age);
person.age="26";
console.log(person.age);


delete person.age;
console.log(person.age);
person.sayHello();

let myFavoriteFilm = {
  filmName: "Сумерки",
  dateView: "2010",
  nameReg: "Хз как зовут",
  cityRelize: "USA",
  metodVivodaNazvania: function () {
    return(myFavoriteFilm.filmName);
  },
};
myFavoriteFilm.viruchkaFilm = "1 mln dollars";
delete myFavoriteFilm.dateView;
console.log(myFavoriteFilm.metodVivodaNazvania());
console.log (myFavoriteFilm);


const number = 100;
console.log(number.toString());

function isUpper(str, n) {
  if (str[n] === str[n].toUpperCase()) {
    return true;
  }
  return false;
}

console.log(isUpper("GGGGG", 3));

*/
function getRand(min, max) {
    return Math.random() * (max - min) + min;
  }