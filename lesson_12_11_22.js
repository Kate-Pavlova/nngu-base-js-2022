/*console.log (this);
var Test= "Test";
console.log(this.Test);
console.log(globalThis);
/*
 function test(){
    console.log (this)
}
test();*/

/*const persona ={
    name:"Alex",
    age:"26",
    getName:function(){
        console.log(this.name);
    },
}
persona.getName()*/



/*const user2 = { name: "Vasya", surname: "Ivanov" };
const user3 = { name: "Petya", surname: "Semenov" };
const user4 = { name: "Petya" };

function greeting(phrase,smile) {
  console.log(`${this.name} ${this.surname}: ${phrase}: ${smile}`);
};
greeting.call(user2, "Привет", "^^");
greeting.call(user3, "И тебе привет", "___^");
greeting.apply(user4, ["И тебе привет", ")))))"]);

const greetingUser2= greeting.bind(user2, "Привет", "^_^")
greetingUser2();
*/

let town = {
    name: "NN",
    population: "1 mln",
    getName: function () {
        console.log (this.name)
      return this.name;
    },
    getPopulation: function () {
        console.log (this.population)
        return this.population;
      },
      setAnyValue: function(key, value){
        this[key]=value;
      }
  };
  /*town.getPopulation();
  town.getName();
  town.setAnyValue("name", "London");
  town.setAnyValue("country", "UK");
  town.getName();
  console.log(town);

  let town2 = {
    name: "Saransk",
    population: "1 mln",
}
getName();
town.getPopulation();

town.getName.call(town2);
town.getPopulation(town2);
const bound = town.setAnyValue.bind(town2);
bound("name","Paris");
bound("country", "France");
console.log(town2);
    

const cubeValue=()=>{
  const height=10;
  return(b,c)=>{
    return height*b*c;
  };
};
const first= cubeValue();
console.log(first(10,10));

*/

const cubeValue=(a,b,c)=> a*b*c;
console.log(cubeValue(1,2,3));
const cubeCaryValue=(a)=>{
  return (b)=>{
    return (c)=>{
      return a*b*c;
    };
  };
};
console.log(cubeCaryValue(1)(2)(3));
const twoArgs=cubeCaryValue(1)(3);
console.log(twoArgs(3));
console.log(twoArgs(4));
console.log(twoArgs(5));


