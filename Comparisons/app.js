alert(2 > 1); // true (cerrect)
alert(2 == 1); //false (wrong)
alert(2 != 1); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert(result); // true

// String comparison

alert('Z' > 'A'); // ture
alert(' Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

let a = 'b';
let b = 'B';

if (a > b) {
    console.log('true');
} else if (a < b) {
    console.log('false');
} else {
    console.log('nothing');
}

// Comparison of different types

alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

let c = 0;
alert(Boolean(c)); // false

let d = '0';
alert(Boolean(d)); // true

alert(c == d); // true!