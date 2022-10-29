/*const CamelCase= 'CurrentUserSecondName'
const initSnake=(str)=>{
    let result = ''
    for(let i=0; i<str.length;i+=1) {
        if (str[i].toUpperCase()===str[i]&& i!==0){
            result+=`_${str[i].toLowerCase()}`
        } else {
            result+=str[i]
        }
    }
    return result;
};
console.log(initSnake(CamelCase));

const getSubstr = (str, char, pos) => {
  if (str.includes(char)) {
    if (pos === "before") {
      return str.slice(0, indexOf(char));
    }
    if (pos === "after") {
      return str.slice(str.indexOf(char));
    }
  }
  return `Символ ${char} отсутствует в строке ${str}`;
};
console.log(getSubstr(str, char, (pos = "before")));



const arrNames = ['Ivan', 'Alex', 'Tony']
const findElem=arrNames.find((element)=> element==="Tony");
console.log (findElem);



const arrNames = [{name:'Ivan'}, {name:'Alex'}, {name:'Tony'}];
const filterArr=arrNames.filter(
(el)=>el.name==="Tony"||el.name==="Alex"
)


const names = [{name:'Ivan'}, {name:'Alex'}, {name:'Tony'}];
const mapArr= names.map((el)=>({name:el.name, handCount:2}))
console.log(mapArr);




const names = [{name:'Ivan'}, {name:'Alex'}, {name:'Tony'}];
console.log(names);
const arr=names.forEach((el)=>(el.name="Unknown"));
console.log(arr);
console.log(names);



const arr = [1, 2, 5, 6, 19, 28, 56];
const result = arr.reduce((prev, cur) => {
  if (cur > 0) {
    return prev + cur;
  }
  return prev;
});
console.log(result);


let numbers = [1,2.2,3,-4,5,5.5,6,-7,8.8,-9];
let newArr = [];
function getEven(num) {
    if(num.isInteger=true )
    return newArr.push(num);
}
function arraySum(arr) {
    return getEven(arr).reduce(function(a, b){
        return a + b;
    });
}
console.log(arraySum(newArr))



const positiveEvenSum = (arr)=>
arr.filter((el)=>el>0 && el%2===0).reduce((prev,cur)=>prev+cur);
console.log(positiveEvenSum([1,2,3,-4,5,5,6,-7,8,-9]));



const arr= [1,2,1,3,4,5,2,3];
function unigArrItem (itemArr) {
    const result = [];
    for(let i=0;i<itemArr.length;i+=1){
        if(!result.includes(itemArr[i]))
        result.push(itemArr[i]);
    }
    return result
}
const uniqResult= unigArrItem([1,2,1,3,4,5,2,3]);
console.log(uniqResult);
*/

function unigArrItem(arr) {
  return arr.filter(function (el, i, array) {
    return !array.includes(el, i + 1);
  });
}
const uniqResult = unigArrItem([1, 2, 1, 3, 4, 5, 2, 3]);
console.log(uniqResult);
