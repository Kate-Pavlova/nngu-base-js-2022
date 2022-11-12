/*const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const vegetableLength = vegetables.map(function(piece) {
  return piece.length;
});

console.log ( vegetableLength );


const numbers = [2, 3, 5, 7, 11, 13, 17];

function currentSums(numbers) {
   var result = [];

   numbers.reduce(function(sum, current, i) {
      return result[i] = sum + current;
   }, 0);

   console.log ( result );
}

currentSums(numbers);


const arr =[1,2,3,4,5,6,7,8,9];
const sumSeven=(arr)=> {
    const result=[]
    for(let i of arr) {
        for(let j of arr) {
            if(i+j === 7) {
                result.push(`${i}:${j}`)
            }
        }       
    }
    return result
};
console.log(sumSeven(arr));


const str = "JavaScript";
const strSymbols = (str)=> {
    const result = [];

    const {length}=str;
    for (let i=0; i<length; i+=1){
        if(i===0){
            result.push(str.slice(0,2));
        } else if(i===length-1){
            result.push(str.slice(-2))
        } else {
            result.push(str.slice(i-1, i+2))
        }
    }
    return result;
};
console.log (strSymbols(str));

const arr1=[1,2,3];
const arr2 =[7,8,9];
const arr3=[4,5,6];
const sortArr=(arr1,arr2,arr3)=> [...arr1,...arr2,...arr3].sort((a,b)=>b-a).join(' ').split();
console.log(sortArr(arr1,arr2,arr3));


const arr=[1,2,3,4,5,6,7,8,9];
const customReverse=(arr)=> {
    const result=[];

    for(let value of arr) {
        result.unshift(value);
    }
    return result
}
console.log(customReverse(arr));



const arr = [1,2,3,4,5,6,7,8,9];

const sumMoreTen= (arr)=>{
    let lastIndex=0;
    arr.reduce((prev,cur,index)=> {
        if (prev+cur<=10) {
            lastIndex = index;
            return prev+cur;
        }
    }, 0);
    if (lastIndex===0){
        return lastIndex+1

    }
    return lastIndex+2;
};
console.log (sumMoreTen(arr));
*/
