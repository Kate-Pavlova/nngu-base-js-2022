/*let str1 = 'Привет Мир! Ты прекрасен!';
function stringToarray(str) {
    let arr = str.split(' ');
    return arr;
}
console.log(stringToarray(str1));

let str = 'Привет Мир ты прекрасен!';
function deleteCharacters(str, length) {
  
    if ((str.constructor === String) && (length>0)) {
        return str.slice(0, length);
    }
};
console.log(deleteСharacters(str, 3))


let str1 = 'Привет Мир ты прекрасен!';
function insertDash(str) {
    return str.toUpperCase().replace(/\s/g, "-");
};
console.log(insertDash(str1))

let str = "а может быть сможем";  
function verhniRegistr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log((verhniRegistr(str)));



let str = "Привет Мир ты прекрасен!"; 
function capitalize(str) {
 return str.replace(/(^|\s)\S/g, function(Slovo) {return Slovo.toUpperCase()})
}
console.log((capitalize(str)))



let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
function changeRegister(str) {
let newStr = "";
let lenStr = str.length;
  for (i = 0; i < lenStr; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}
console.log(changeRegister(str))

let str = " hello., -/ world # ;: } $ % ^ & *" 
function removeChar(str) {
   let res = "";
   res = str.replace(/[^\w\s]|_/g, "")
          .replace(/\s+/g, " ");
   return res;      
}
console.log(removeChar(str))


function zeros (num, len,sign) {
    let len_zer = len - (num + '').length, // к-во нулей
    num_zer = '';
      for ( ; len_zer > 0; len_zer--) {
        num_zer += 0;
      }
        
      return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
    }
    console.log(zeros (33, 4,"-"))*/




    function comparison(str1, str2) {
        let res = str1.toUpperCase() === str2.toUpperCase();
      
        return res;
      }
      console.log(comparison("string", "StRing"))