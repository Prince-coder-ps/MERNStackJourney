console.log("Array in Js");

// We have 2 data type for store data in a manner : Array and List

// let marks = [20, 10, 15,26]
// console.log(marks)

// // let student = ["Ram", "Shyam", "Ghanshyam", skills]
// // console.log(student);
// // console.log(student[1]); 

// let skills = {
//     frontend:"React",
//     backend:"Express",
//     Database:"MongoDB"
// }

// const greet = ()=>{
//     console.log("Hello Ji")
// }
// let student = ["Ram", "Shyam", "Ghanshyam", skills,greet]
// console.log(student);
// console.log(student[4]());


// Array can be created using array constractor

// let arr = new Array("Ram", "Shyam", "Mohan");
// console.log(arr)


// 1. SHopping Cart System 

// let cart = ["Milk", "Butter", "Eggs"];

// // add 
// cart.push("Bread")
// cart.push("Banana")
// console.log(cart)

// cart.unshift("juice")
// console.log(cart) 

// let index = cart.indexOf("Butter")
// console.log(index)

// if(index !== -1){
//     cart.splice(index,2)
// }
// console.log(cart)



// Student Marks Analysis

let marks = [20,99,30,25,45,56,67,78,89,90];

// Marks greater then 60

// let above60 = marks.filter((item)=>item > 60)
// console.log(above60)

//  filter, find -> return 1st occurence 
// let topper = marks.find((m)=> m>95)
// console.log(topper)

// avrage 
// let totalMarks = marks.reduce((sum,m)=> {
//     sum = sum+m
//     return sum
// },0)
// // console.log(totalMarks)

// let avg = (totalMarks)/marks.length
// console.log(avg)


// // sorting and reverse array 
// console.log(marks.sort().reverse())


// // 3.Movie Ratings

// let rating =[4.5, 3.4, 4.9, 5.0, 2.9, 3.7, 2.0];

// // check if present or not 
// console.log(rating.includes(5.0))

// // find index first which is below 3 

// let lowIndex = rating.findIndex((r) => r < 3);
// console.log(rating[lowIndex]) // lowIndex is 4 value is 2.9


let words  = ['rAm', "shyam", "Prince"]

let UpperCaseArray = words.map((w)=> w.toUpperCase())

console.log(words)
console.log(UpperCaseArray)