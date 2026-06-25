console.log("Hello Mittron !!");

// const fetchBtn = document.getElementById("fetchbtn");
// const Status = document.getElementById("status");

// fetchBtn.addEventListener('click', () => {
//     Status.textContent = "Loading Data ...."


//     setTimeout(()=>{
//         Status.textContent = "Data Loaded Successfully."
//     },3000);
// });

// setInterval - use when repeat a work or task after a short time/ an interval.

// Eg. Digital clock

// let Clock = document.getElementById("clock");

// setInterval(()=>{
//     const now = new Date();
//     Clock.textContent = now.toLocaleTimeString();
// },1000);

// H/W - Stop watch
let timeLeft = 10;
const Timer = document.getElementById('timer');

const countDown = setInterval(() => {
    timeLeft--;
    Timer.textContent = timeLeft;

    if(timeLeft == 0){
        clearInterval(countDown);
        alert("Time is up!");
    }
},1000)

// Slideshow
// const image = [
//     "https://images.unsplash.com/photo-1780599265096-f648acd58387?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1778165657501-558e29e5e0c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1780599058361-faa819484d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
// ];
// let index = 0;
// const Banner = document.getElementById("banner");
// function changeImage(){
//     Banner.src = image[index];
    
//     index = (index + 1) % image.length;
// }
// changeImage()
// setInterval(changeImage , 3000);

// Typing Annimation
const msg = "Welcome to my MERN Stack Journey !!";
let output = document.getElementById("text");
let index = 0;

function typetext() {
    if(index < msg.length){
        output.textContent += msg.charAt(index);
        // index = (index +1) % msg.length;
        index++;

        setTimeout(typetext,100)
    }
}

typetext();