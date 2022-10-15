/*const M=3;
const N=64;
n = Math.trunc (Math.sqrt(N));
let i = 0;
for (; i < n && N/ Math.pow(2,i) > M ; i++) {         
    };
    console.log (`На ${i} день стало меньше чем ${M} машин`);
   
  
const Polet = 1961;
let God = [];
for (let i=1800;i<=2022;i++) {
  God.push(i);  
  };

const yearP = 1961;
let count = 0;
for (let i = 2022; 1800 < i; i -= 1) {
  if (i === yearP) {
    break;
  }
  count += 1;
}
console.log(count);*/

let count = 0;
for (let i = 1800; i < 2022; i += 1) {
  if (i % 4 === 0) {
    count += 1;
  }
}
console.log(count);
