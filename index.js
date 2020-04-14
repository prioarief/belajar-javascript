// gunakan let untuk variable yang akan di inisialisasi ulang
// gunakan const untuk variable yang tidak di inisialisasi ulang

// menginisialisasi ulang array menggunakan let
let fruit = ['apple', 'banana', 'manggo'];
fruit = ['apple', 'banana', 'manggo', 'grape'];

console.log(`menggunakan let = ${fruit}`) // es6 string

// mengubah array menggunakan const
const fruitt = ['apple', 'banana', 'manggo'];
fruitt.push('pineapple', 'wwatermelon');
console.log(`menggunakan const = ${fruitt}`); // es6 string


// menginisialisasi object menggunakan let
let people = {
    name: 'prio',
    age: 18
};

people = {
    name: 'prio',
    age: 18,
    position: 'Web Developer'
};

console.log(people)

// merubah isi object menggunakan const
const peoplee = {
    name: 'prio',
    age: 18
};

peoplee.position = 'Android Developer';
console.log(peoplee);