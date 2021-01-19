let s = 'my' + 'string';
alert(s); // mystring

alert('1' + 8); // '18'
alert(8 + '1'); // '81'

alert(2 + 2 + '1'); // = 41, don't 221

alert(6 - '2'); // 4, '2'
alert('6' / '2'); // 3 this number

let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

alert(+true); // 1
alert(+''); // 0

let apples = '2';
let oranges = '3';

//       binar plus
alert(apples + oranges); // '23',  String + String

//       unar plus
alert(+apples + +oranges); // 5, String --> Number == Number + Number

// Assignment

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4

// Short assignment arithmetic

let n = 2;
n += 5; // 7
n *= 2; // 14 (n + n * 2)

alert(n); // 14

n = 2;
n *= 3 + 5;
alert(n); // 16 (n *= 8)

// Increment, Decrement

let counter = 2;
counter++; // counter + 1
alert(counter); // 3

counter--; // counter - 1
alert(counter); // 1

/* !!!
	5++ // Error
	5-- // Error
*/

// Tasks

let a = +prompt('Number one', 1);
let b = +prompt('Number two', 2);

alert(a + b); // 3

let a = 2; // 4

let x = 1 + (a *= 2); // 5
