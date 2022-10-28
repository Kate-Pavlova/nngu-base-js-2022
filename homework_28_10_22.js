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
console.log((verhniRegistr(str)));*/



let str = "Привет Мир ты прекрасен!"; 
function capitalize(str) {
 return str.replace(/(^|\s)\S/g, function(Slovo) {return Slovo.toUpperCase()})
}
console.log((capitalize(str)))
