 console.log("Hello Mittron !!");

 // Example for Bubbling
// let Parent = document.getElementById("parent");
// Parent.addEventListener("click",(e) => {
//     console.log("Parent Div clicked");
// });

// let childBtn = document.getElementById("child");
// childBtn.addEventListener("click", (e) => {
//     console.log("Child button is clicked.");
// });

// Example for Capturing Phase
// let Parent = document.getElementById("parent");
// Parent.addEventListener("click",(e) => {
//     console.log("Parent Div clicked");
// },true); // notice this true -> it will enable capturing phase.

// let childBtn = document.getElementById("child");
// childBtn.addEventListener("click", (e) => {
//     console.log("Child button is clicked.");
// },true); // notice this true -> it will enable capturing phase.


// When i enabled capturing phane -> parent, btn

// Stop event Propagation

// let Parent = document.getElementById("parent");
// Parent.addEventListener("click",(e) => {
//     console.log("Parent Div clicked");
// });

// let childBtn = document.getElementById("child");
// childBtn.addEventListener("click", (e) => {
//     console.log("Child button is clicked.");
//     e.stopPropagation();
// });

// let List = document.getElementById("list");
// List.addEventListener("click",function(e){
//     console.log("event.target",e.target.tagName);
//     console.log("this", this.tagName)
// })


// Delegation
// let List = document.getElementById("list");
// List.addEventListener("click", function(e){
//     if(e.target.tagName === 'LI'){
//         alert("You clicked " + e.target.innerText );
//     }
// });

const List = document.getElementById("list"); 
const Btn = document.getElementById("addBtn");

Btn.addEventListener("click", () => {
    const newList = document.createElement("li");
    newList.textContent = prompt("Add fruit");
    List.appendChild(newList);
});

List.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
    e.target.style.backgroundColor = "aqua";
   }
})