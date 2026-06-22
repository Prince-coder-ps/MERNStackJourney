console.log("Hello Mittron !!");

// setTimeout example
// console.log("Task 1");
// console.log("data of task 1");

// console.log("Task 1");
// console.log("data of task 1");

// console.log("Task 2");
// setTimeout(() => {
//     console.log("data of task 2");
// },3000); // 3sec - it's appear after the 3sec of execution

// console.log("Task 3");
// console.log("data of task 3");

// // One of the way perfor ASYNC Operation/ Behaviour
//  setTimeout(() => {
//     console.log("Data given in response object");
//  },3000); // 3sec

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 2000);
// console.log("C"); // Output : A C B rather than A B C 

// Async Behaviour using DOM

const youtube = document.getElementById("btn");
youtube.addEventListener('click', () => {
    console.log("Template for Profile");
    setTimeout(() => {
        console.log("Data for Profile")
    }, 3000);

        console.log("Template for Main Section");
    setTimeout(() => {
        console.log("Data for Main Section")
    }, 6000);

        console.log("Template for Footer");
    setTimeout(() => {
        console.log("Data for Footer")
    }, 1000);
});