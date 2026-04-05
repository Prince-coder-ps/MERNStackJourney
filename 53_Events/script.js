console.log("Hello MIttron !!!");

const button = document.querySelector("#btn");

// function greet(){
//     alert("Welcome Yaroo....");
// }
// function changeColor(){
//     button.style.backgroundColor = "lightgreen"
// }
// button.addEventListener("click", greet);
// button.addEventListener("click", changeColor);


// click will be triggered on single click & dblclick iwill be triggered on double clicks


// function printMessage(){
//     let msgBox = document.querySelector("#message");
//     let msg = document.createElement("h2");
//     msg.innerText = "Response Submitted.";
//     msgBox.append(msg);
// }
// button.addEventListener("click", printMessage);

// ======= Bonus Request ==========

// let lgIn = document.querySelector("#lgn");
// let screen = document.querySelector("#details");
// screen.style.display = "none";

// function Application(){
//     screen.style.display = "block";

//     let salary = Number(prompt("Enter your salary"));

//     let Salary=document.createElement("h3");

//     Salary.innerText = "Your current salary is : " + salary;

//     screen.append(Salary);


// // bonus btn

// let bonus = document.querySelector("#bonus");
// bonus.addEventListener('click', function(){
    
//     salary += 2000;
//     Salary.innerText = "Your salary after bonus is : " + salary;
// })
//     // console.log(salary);
// }

// lgIn.addEventListener('click', Application)

// ===== MouseHover Event =====
//chage parking color

let Box = document.querySelector("#box");

Box.addEventListener('mouseover', ()=>{
    Box.style.background = 'lightgreen';
})

Box.addEventListener('mouseout', ()=>{
    Box.style.background = 'red';
})

