'use strict'

//1

let number = [1, 2, 3, 4, 5];
for  (let i = 0; i < number.length; i++){
    document.write(number[i]);
}
 
//2

let number1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < number1.length; i++){
    if (number1[i] > -10 && number1[i] < -3){
        console.log(number1[i]);
    }
}

//3

let arr = [];
let result = 0;

for (let i = 23; i <= 57; i++){
    arr.push(i);
    result = result + i;
}
console.log(arr);
console.log(result)

/*let i = 23;
while (i <= 57) {
    arr.push(i);
    i = i + 1;
}
console.log(arr)*/


//4

let arr1 = ['10', '20', '30', '50', '235', '3000']; 

arr1.forEach((item) => {
  if (item.startsWith('1') || item.startsWith('2') || item.startsWith('5')) {
    console.log(item);
  }
});

//5

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (let i = 0; i <= arr1.length; i++){

        if (i > 4) {
            document.write(arr5[i].bold());}
        else{
            document.write(arr5[i]);
    }

}

//6

let arr6 = ['apple', 'orange', 'lime'];
    arr6.push('pineapple');
    let lastElem = arr6[arr6.length - 1];
    console.log(lastElem);


//7

let arr7 = [];

let check = true;

while(check){
    let digit = prompt('Введите число');
    if(digit === '') {
        check = false;
    } else {
        arr7.push(Number(digit));
    }
}
document.write(arr7)

arr7.sort(function(a, b) {
  return a - b;
});

console.log(arr7);


//8

const arr8 = [12, 'false', 'Текст', 4, 2, -5, 0];
arr8.reverse();

arr8.forEach(element => console.log(element));

let k = arr8.length;
while (k >= 0){
    k--;
    console.log(arr8[k]);
}

//9

const arr9 = [5, 9, 21,,, 9, 78,,,, 6];

let a = 0;
let check1 = true;
for (let i = 0; i < arr9.length; i++){
    if (arr9[i] > 0 || arr9[i] < 0){
     check1 = false;   
    }
    else {
    a = a + 1;
    }
}
console.log(a);


//10
console.log('_______________ 10 _________________');


let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

let summ = 0;
let c = arr10.indexOf (0);
let b = arr10.lastIndexOf (0);

let arr11 = arr10.slice (c, b);

for (let i = 0; i < arr11.length; i++){
	summ =  summ + arr11[i];
}
console.log(summ);

//11
console.log('_______________ 11 _________________');


let i = 0,
  j = 0;

let max = 5;
let empty = "",
  star = "";

while (i < max) {
  empty = "";
  star = "";
  for (j = 0; j < max - i; j++){
  	empty += " ";
}  
  for (j = 0; j < 2 * i + 1; j++){
  	star += "^";
} 
  console.log(empty + star);
  i++;
}


