/*const russian={
    country: "Russia",
    city:"NN"   
};
const people={
    name: "Alex",
    age: 26,
    __proto__:russian,
};

console.log(people.city, people)


function CreateUser(userName, userAge) {
  this.name = userName;
  this.age = userAge;
  this.sayHi = function () {
    console.log(`Привет, меня зовут ${this.name}`);
  };
};
CreateUser.prototype.sayAge=function(){
    console.log (`Мне ${this.age}`)
}

const firstUser = new CreateUser("Alex", 26);
const secondUser = new CreateUser("Tony", 24);
const thirdUser = new CreateUser("Kate", 35);
console.log(firstUser, secondUser, thirdUser);
secondUser.sayHi();


function CreateCards(from, to) {
this.from=from;
this.to=to;
this.show=function(){
    console.log(`Открытка от ${this.from} для ${this.to}`)
}
}
CreateCards.prototype.setFrom= function (from){
    this.from=from;
}
const firstPost= new CreateCards("Alex", "Liza");
console.log (firstPost);
*/
class People {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  getFullName() {
    return `${this.name} : ${this.surName}`;
  }
}
const firstPeople = new People("Alex", "Ivanov");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surName, rate, day) {
    super(name, surName);
    this.day = day;
    this.rate = rate;
  }
  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.day}`;
  }
}
const firstWorker = new Worker("Alex", "Petrov", 500, 20);
console.log(firstWorker.getFullName());
console.log(firstWorker.getSallary());
