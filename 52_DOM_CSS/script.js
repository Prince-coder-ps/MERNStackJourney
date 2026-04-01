console.log("Hello Developers!!");

let e1 = document.querySelector("div");

console.log(e1.style);

// let color = prompt("Enter your color")
// e1.style.backgroundColor = color;

// e1.style.width = "100%"
// e1.style.fontsize = "22px";
// e1.style.color = "#800081"

// if i want to handle multiple properties in single time

// e1.style.cssText = "background-color: blue;  font-size:20px;  text-decoration:underline; color:#fff;";

// ======================================================================

// let images = ["https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlyYXQlMjBrb2hsaXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlyYXQlMjBrb2hsaXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlyYXQlMjBrb2hsaXxlbnwwfHwwfHx8MA%3D%3D"]

// let pannel = document.querySelector("#rangers");

// for (let i = 0; i < images.length; i++) {
//     let image = document.createElement("img");
//     image.setAttribute("src", images[i]);
//     image.style.cssText = "height : 230px; width : 200px;"
//     pannel.append(image);
// }


//====Form======
//  => user -> Stident(email required) / teacher(not need of email)

let role = prompt("enter your role ");

if(role == "student"){
    let mail = document.querySelector("#email");
    mail.setAttribute("required", "true");
}


