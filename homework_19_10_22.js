/*function zad3 (x, y, z) {
    return (x - y)/z;
    }
console.log(zad3(4,5,2));


function zad4 (day) {
if (day == 1) {
    console.log('Понедельник');
} else if (day == 2) {
    console.log('Вторник');
} else if (day == 3) {
    console.log('Среда');
} else if (day == 4) {
    console.log('Четверг');
} else if (day == 5) {
    console.log ('Пятница');
} else if (day == 6) {
    console.log('Суббота');
} else if (day == 7) {
    console.log ('Воскресенье');
} else {
    console.log ('Вы ввели неправильное число');
}
}
console.log(zad4(3));

function zad5 (a,b){
    if (a===b){
    return true;
    } else {
    return false;
    }
    }
  console.log(zad5(3,3));

function zad6 (a,b){
    if (a+b>10){
    return true;
    } else {
    return false;
    }
    }
  console.log(zad6(3,3));


function zad7 (a){
    if (a<0){
    return true;
    } else {
    return false;
    }
    }
  console.log(zad7(-3));

  
  function isNumberInRange (a) {
    if (0<a && a<10) {
    return true;
    } else {
    return false;
    }
    }
  console.log(isNumberInRange(-90));
  
 Задача 9
  function isNumberInRange (a) {
      return a > 0 && a < 10;
     }

  var arr1 = [1,2,3,4,5,6,7,0,-2,-5,-6,9,10];
  var arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (isNumberInRange(arr1[i])) {
      arr2.push(arr1[i]);}
    }
      console.log(arr2);

  
 \\задача №10,11
 
      function getDigitsSum (a) {
        let res = String(a);
        let sum = 0;
        for (let i = 0; i < res.length; i++) {
          sum += Number(res[i]);
         }
        return sum;        
      }
      
      let arrYear = [];    
    for (let i = 1; i <= 2020; i++) {
      if (getDigitsSum(i) === 13) {
        arrYear.push(i);
      }
      }    
    console.log(arrYear);
   
   \\задача №12,13
  
   function isEven(b) {
    if (b%2 == 0) {
        return b;
        }
     }   
    let arr = [4,10,8,5,6,9,5,10];
    let arr2 = [];    
    for (let i = 0; i <= arr.length; i++) {
     if (isEven(i)) {
        arr2.push(i);
     };
     } ;
     
  console.log(arr2);
  

   const getDigitsSum=(num)=> {
    const str = `${num}`;
    let result = 0;
    for (let i=0; i<str.length; i++) {
      result += +str [i];
    };
    return result;
   };
   

   console.log (getDigitsSum(123));
   

const isEven= (num) => {
  if (num %2===0) {
    return true
  };
  return false;
};
const filterArr = (arr)=> {
  const result = []
  for (let i=0; i< arr.length; i++){
    if (isEven(arr[i])) {
      result.push(arr[i]);
    };
  };
};
console.log(filterArr([1,2,3,4,5,6,7,8]));
*/
const getDigitsSum=(num)=> {
  const str = `${num}`;
  let result = 0;
  for (let i=0; i<str.length; i++) {
    result += +str [i];
  };
  return result;
 };
const lessNine = (num)=> {
  console.log(`Функция lessNine с параметром ${num}`);
  if (getDigitsSum (num)>9) {
return lessNine(getDigitsSum (num));
  };
  return getDigitsSum (num)
};
console.log(lessNine(156555));