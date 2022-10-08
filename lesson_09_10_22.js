/*if (true) {
  console.log("true");
}
if (false) {
  console.log("false");
}

const name = "Alex";
if ("Alex" === "Ivan") {
  console.log("Привет ${name}");
} else {
  console.log("Привет незнакомец!");
}

const name = "Kate";
if (name === "Ivan") {
  console.log(`Привет ${name}`);
} else if (name === "Alex") {
  console.log("Привет друг");
} else if (name === "Petr") {
  console.log(`Hi ${name}`);
} else {
  console.log("Привет незнакомец");
}


if (true) {
  if (true) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  console.log("true");
}


const userName = "Ivan";
const result = userName === "Alex" ? "Hello Alex" : "Hello user";
console.log(result);

const lengthOt1 = 8000;
const lengthOt2 = 9000;
const lengthOt3 = 100;

if (lengthOt1 > lengthOt2) {
  console.log(`${lengthOt1}`);
} else if (lengthOt2 > lengthOt3) {
  console.log(`${lengthOt2}`);
} else if (lengthOt3>lengthOt1) {
  console.log(`${lengthOt3}`);
}

const userRole = "userRole5";

switch(userRole) {
    case "userRole1": console.log("Ты админ");
        break;
    case "userRole2": console.log("Ты пользователь");
         break;
    case "userRole3": console.log("Ты менеджер");
        break;
 default: console.log("Кто же ты?");
// исполняемая инструкция 
break;

    }
    


const temp = 40;

if (temp <= -30) {
  console.log("Оставайтесь дома");
} else if (temp <= -10) {
  console.log("Сегодня холодно");
} else if (temp <= 5) {
  console.log("Не холодно");
} else if (temp <= 15) {
  console.log("Тепло");
} else if (temp <= 25) {
  console.log("Очень тепло");
} else if (temp <= 35) {
  console.log("Жарища");
} else if (temp > 35) {
  console.log("Вы в жерле вулкана?");
}

const temp = 40;

if (temp <= -30) {
  console.log("Оставайтесь дома");
} else if (temp > -30 && temp <= -10) {
    console.log("Сегодня холодно");
} else if (temp > -10 && temp <= 5) {
    console.log("Не холодно");
} else if (temp > 5 && temp <= 15) {
    console.log("Тепло");
} else if (temp > 15 && temp <= 25) {
    console.log("Очень тепло");
} else if (temp > 25 && temp <= 35) {
    console.log("Жара");
} else if (temp > 35) {
    console.log("Пекло");
}

let i = 0;
while (i <= 100) {
  i = i + 1; // или можно записать i+=1 или i++(в случае только единицы)
  console.log(i);
}


let i = 0;
while (true) {
  if (i < 30) {
    i += 1;
  } else {
    break;
  }
  console.log(i);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 17, 19, 25, 60];

const result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    result.push(arr[i]);
  }
}
console.log(result);
*/
const N = 5;
for (let i = 0; i <= N; i++) {
    console.log("Строка")
}
