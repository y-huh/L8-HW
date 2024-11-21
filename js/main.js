// const arr = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3];
// const fake = [];
// const Number = {}; 

// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0;i<i.length;j++){
        
//         }
//     }


//1
// const obj = { a: 2, b: 3, c: 4 };
// const multiplyValues = (obj, n) => {
//     const res = {};
//     for (let key in obj) {
//         res[key] = obj[key] * n;
//     }
//     return res;
// };
// console.log(multiplyValues(obj, 3));
//extra
// let number = "213344";
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i] * 1;
// }

// console.log(sum);

//2
// const countWordsWithA = (str) => {
//     return str.split(' ').filter(word => word.includes('a')).length;
// };
// console.log(countWordsWithA("salom alik va ana"));

//3
// const books = [
//     { title: "Halqa",
//     author: "Akrom Malik",
//     read: false },

//     { title: "Dunyoning ishlari",
//         author: "O’tkir Hoshimov",
//         read: true },

//     { title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true },

// ];

// books.forEach(book => {
//     console.log(`${book.author} ning ${book.title} kitobi ${book.read ? "o'qilgan" : "o'qilmagan"}`);
// });

//4
// const words = ["kitob", "PC", "laptop"];
// const createObject = (arr) => {
//     const res = {};
//     arr.forEach(word => res[word] = word.length);
//     return res;
// };
// console.log(createObject(words));

//5
// const animals = ['apple', 'banana', 'cat', 'apple', 'banana', 'banana', 'bunny'];
// const countWords = (arr) => {
//     const res = {};
//     arr.forEach(word => res[word] = (res[word] || 0) + 1);
//     return res;
// };
// console.log(countWords(animals));

//6
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// const ageDiff = (arr) => {
//     const ages = arr.map(person => person.age);
//     return Math.max(...ages) - Math.min(...ages);
// };
// console.log(ageDiff(people)); // 54

//7
// const BoleanElements = (arr) => {
//     return {
//         truthy: arr.filter(Boolean),
//         falsy: arr.filter(item => !item)
//     };
// };
// console.log(BoleanElements([false, 1, 10, "", null, "sultonqul", 1.13, 0]));

//8
// const minMaxWord = (str) => {
//     const words = str.split(' ');
//     const sort = words.sort((a, b) => a.length - b.length);
//     return {
//         minWord: sort[0],
//         maxWord: sort[sort.length - 1]
//     };
// };
// console.log(minMaxWord("Men NajotTalimda oqiyman")); 

//9
// const str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// const result = "Najot ta'lim is the best";
// console.log(result);

//10
//11
//12
// const wordLen = (str) => {
//     const words = str.trim().split(' ');
//     return words[words.length - 1].length;
// };
// console.log(wordLen("Salom dunyo!"));

//13
// const obj = { a: 2, b: 5, c: 7 };
// const entries = Object.entries(obj).map(([key, value]) => key + value);
// console.log(entries);

//14
//15
// const filterDuplicates = (arr) => {
//     const count = {};
//     arr.forEach(item => count[item] = (count[item] || 0) + 1);
//     return Object.keys(count).filter(key => count[key] > 1);
// };
// console.log(filterDuplicates(['apple', 'banana', 'apple', 'orange', 'banana'])); 
