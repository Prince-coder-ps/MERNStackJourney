console.log("Hello Developer!!...");

// document.addEventListener("keydown",(e) => {
//     console.log(e);
//     document.getElementById("output").textContent = `You pressed : ${e.key} (code : ${e.code})`;
// });

//  Keyboard Shortcuts

// document.addEventListener('keydown', (e) =>{
//     if(e.ctrlKey && e.key === 's'){
//         e.preventDefault(); // stop browser to SAVE PAGE action
//         alert("Custom Save Shortcut triggered");
//     }
// });

// Example : Moving a box with Arrow key

const Box = document.querySelector("#box");

let topPos = 100;
let leftPos = 100;

document.addEventListener('keydown',(e) => {
    const step = 10;
    if(e.key === 'ArrowUp'){
        topPos -= step;
    }
    if(e.key === 'ArrowDown'){
        topPos += step
    }
    if(e.key === 'ArrowLeft'){
        leftPos -= step;
    }
    if(e.key === 'ArrowRight'){
        leftPos += step;
    }

    Box.style.top = topPos + "px";
    Box.style.left = leftPos + "px"
    
})