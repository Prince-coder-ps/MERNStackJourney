console.log("Hello Developer !! ");

// let btn = document.querySelector("#eventBtn");


// btn.addEventListener('click', function(event){
//     // console.log("button clicked");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.timeStamp);
//     console.log(event.clientX, event.clientY);

//     event.target.innerText = "Details in console";
// });

// let Name = document.querySelector("#name");

// Name.addEventListener('change',(e)=>{
//     console.log(e.target.value);
// });

// ======= Mouse Tracker ==========
// let tracker = document.querySelector("#trackArea");
// let coord = document.getElementById("coords");

// tracker.addEventListener('mousemove', (e)=>{
//     // console.log(e);
//     coord.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`
// });

// Box add on click and remove on dblclick

// let container = document.querySelector("#container");
// let Btn = document.querySelector("#btn");

// Btn.addEventListener('click',() => {
//     const newDiv = document.createElement("div");
//     // newDiv.textContent ="New box";

//     newDiv.className = "newDiv";
//     newDiv.style.cssText = `width:60px; height:60px; background: hsl(${Math.random()*360},70%, 60%); margin:5px;`;
//     container.appendChild(newDiv);

//     newDiv.addEventListener('dblclick',() => newDiv.remove())
// });

// ======== Tooltip ===========
let Word = document.querySelector("#word");

let tooltip = document.createElement("span");
tooltip.textContent = "I am a Tooltip!";
tooltip.style.cssText = "position:absolute; background:black; color: white; padding: 5px;";

document.body.appendChild(tooltip);
Word.addEventListener('mouseover', (e) =>{
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = (e.pageY + 20) + "px";
});
Word.addEventListener('mouseout', (e) => {
    tooltip.style.display = "none"
})