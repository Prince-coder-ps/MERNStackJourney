console.log("Welcome Prince !!....");

// let e1 = document.querySelector("p");
// console.log(e1.innerText);

// // innerText VS textContent
// let e2 = document.querySelector(".para1");
// console.log(e2.innerText) // reaturn only availabe content on the screen

// console.log(e2.textContent) // it's read the text a well as it can read the properties.

// console.log(e2.innerHTML) // return content with the html tags, properties. 
/////////////////////////////////////////////////////////////////////////

// Practice => manipulation

// let e3 = document.querySelector("p");
// console.log(e3.textContent);

// e3.innerText = "Hello Prince, you are studying here about DOM manupulation Properties."
// // console.log(e3.textContent);

// let Name = prompt("Welcome User, Enter your Name ");

// if(Name){
//     e3.innerText = "Hello " + Name + ", you are studying here about DOM manupulation Properties."
// }else{
//     e3.innerText = "Hello User, you are studying here about DOM manupulation Properties."
// }
// console.log(e3.innerText)
///////////////////////////////////////////////////////////////////////////

// Dynamically : Adding Element Using Dom

// 1.create
// 2.add => appendChild()
// 3.Multiple element add -> append()

// let heading = document.createElement("h1");
// let heading2 = document.createElement("h2")

// let section = document.querySelector(".screen");

// heading.innerText = "Hello Developers !!"
// heading2.innerText = "Jai Shree Ram"

// // section.appendChild(heading);
// // section.appendChild(heading2);

// section.append(heading, heading2)

// let para = document.createElement("p");

// para.innerText = "Good morning";

// section.prepend(para);
///////////////////////////////////////////////////////////////////////////


// below logic use also in login/sign up purposes

// let data = Number(prompt("Entry your salary"));

// let display = document.querySelector(".screen");
// if (data > 50000) {
//     let bonus = document.createElement("h2");
//     bonus.innerText = "You will get 10k joining bonus";
//     display.append(bonus);  
// }else{
//     let wishes = document.createElement("h2");
//     wishes.innerText = "Do work smartly and get Promot yourself";
//     display.append(wishes);
// }

///////////////////////////////////////////////////////////////////////////

let orders = ["Laptop", "iPhone", "Headphone", "Cover", "Charger"];
let display = document.querySelector(".screen");
for(let i = 0; i < orders.length; i++){
    let item = document.createElement("h3");
    item.innerHTML = orders[i];
    display.append(item);
}

///////////////////////////////////////////////////////////////////////////
// remove method 

// let e4 = document.querySelector("h2");
// e4.remove()

let footerContent = document.querySelector("footer h3");
// let e5 = document.querySelector("h3");

// footerContent.removeChild(e5);
footerContent.remove()