console.log("Hello Mittron !!")

// Select all input Element 
// const inputs = document.querySelectorAll('input')



// // Loop through each input and attach a event to it 
// inputs.forEach((inp)=>{
//     inp.addEventListener('input',(e)=>{
//         const id = e.target.id;
//         const value = e.target.value;

//         // console.log(`Input changed -> ID: ${id}, Current value: ${value}`);

//         const displayElement = document.getElementById(`display-${id}`);
//         if(displayElement){
//             displayElement.textContent = value || '-';
//         }

//     });
// });

// input vs Change 
// Dropdown 

// const Select = document.getElementById('citySelect')
// Select.addEventListener('change',(event)=>{
//     document.getElementById("selectedCity").textContent = `Selected City : ${event.target.value}`;
// });

// Focus and Blur 
// const email = document.getElementById("email");
// email.addEventListener("focus",()=>{
//     email.style.background = "lightgreen"
// });
// email.addEventListener("blur",()=>{
//     email.style.background = '';

//     if(email.value === ''){
//         alert('Email field still empty');
//     }
// });

// Submit with preventDefault()
// Validation Task

const form = document.getElementById('LoginForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault(); // it's stop your page to reload for checking validate
    // console.log(e);
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === '' || pass === ''){
        alert("pls fil all the fields");
    }else{
        alert(`Welcome ${user}`);
    }

});

// HW -> validations -> password -> 1.special Character, 2. lenght > 6, 3. one capital char 
