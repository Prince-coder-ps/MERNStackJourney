console.log("Hello Mitro....");

// 1.E-commerce Order

// let orders =[
//     {id : 1, product : "laptop", price : 60000},
//     {id : 1, product : "Mobile", price : 40000},
//     {id : 1, product : "Headphone", price : 2000},
//     {id : 1, product : "Tablet", price : 15000} 
// ]

// // find all order above 10000
// let expensive = orders.filter((obj)=>{return obj.price > 10000});
// console.log(expensive);

// // totalKarcha
// let totalKarcha = orders.reduceRight((sum, obj)=>{
//     return sum += obj.price;
// },0); // 0-> sum = 0;

// console.log(totalKarcha);

// // products name

// let products = orders.map((obj)=>console.log(obj.product));

// // sort by price

// let sortOrder = orders.sort((a,b) => a.price - b.price);
// console.log(sortOrder)


let salaries = [20000,35000, 45000, 52000];

// total salary using for each loop

function totalSalary(arr){
    let sum = 0;
    arr.forEach((sal) => {
        sum += sal;
    })  
    console.log(sum);
}
totalSalary(salaries)

