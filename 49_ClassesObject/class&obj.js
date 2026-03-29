// Object 
// let Cartoon = {
//     name1 : "Shinchen",
//     channel : "Hungama",
//     family : 4,
//     genre : function(){
//         console.log("Funny")
//     } 
// }

// console.log(Cartoon);
// console.log(typeof(Cartoon));

// UserDefined Prototypes

// const Developer ={
//     skill : function(){
//         console.log("Can do Programming")
//     }
// }

// const Pankaj = {
//     salary : 100000,
// }

// // Create a Prototype 
// Pankaj.__proto__ = Developer;

// console.log(Pankaj);

// // Access the functionality of funs which present inside the creating prototype
// console.log(Pankaj.skill()); 


// these data member by default public
// class Player {
//     level;  // variable
//     hight;  // variable
//     fight(){
//         console.log("Player can fight")
//     }

//     run(){
//         console.log("Player can run");
//     }
// }
 
// let shinchan = new Player();

// // console.log(shinchan.run());

// shinchan.level = 3;
// console.log(shinchan.level);



// class HDFC{

//     balance ;

//     constructor(){
//         this.balance = 0;
//     }

//     debit(balance){
//         if(balance < this.balance){
//             this.balance -= balance;
//             console.log("Debitted money.")
//         }
//     }

//     credit(balance){
//         this.balance += balance;
//         console.log("Money credited!..");
//     }

//     showBalance(){
//         console.log("Your current balance is : "+this.balance);
//     }
// }

// let Ram = new HDFC();

// Ram.showBalance();

// Ram.credit(1000);
// Ram.showBalance();

// Ram.debit(200);
// Ram.showBalance();


// class BankAccount{

//     accNo;
//     Name;
//     balance = 0;

//     constructor(accNo, Name, balance){
//         this.accNo = accNo;
//         this.Name = Name;
//         this.balance = balance;
//     }

//     deposit(amount){
//         this.balance += amount;
//         console.log(`${this.Name} deposited ${amount}. `)
//     }

//     withdrwal(amount){
//         if(amount < this.balance){
//             this.balance -= amount;
//             console.log(`${this.Name} withdrawed ${amount}. `)
//         }
//         else{
//             console.log("Insufficient amount.")
//         }

//     }

//     checkBalance(){
//         console.log(`${this.Name}'s balance  : ${this.balance}`)
//     }
// }

// let usr1 = new BankAccount(121, "Prince", 1000);
// let usr2 = new BankAccount(123, "Raj", 10000);
// usr1.checkBalance();

// usr1.deposit(10000)
// usr1.checkBalance();

// usr2.checkBalance();

// usr2.deposit(2500);
// usr2.checkBalance();

// usr1.withdrwal(9000);
// usr2.withdrwal(10000);

// usr1.checkBalance();
// usr2.checkBalance();


// Getter and Setter Method

// class Employee {
//     name;
//     #salary;

//     constructor(name, salary){
//         this.name = name;
//         this._salary = salary;
//         // console.log(this.salary);
//     }

//     set salary(amount){
//         if(amount>0){
//             this._salary=amount;
//         }
//         else{
//             console.log("Invalid Salary!!...");
//         }
//     }

//     get salary(){
//         return this._salary;
//     }
// }

// let emp = new Employee("Prince", 50000);
// console.log(emp.name);
// console.log("Through getter : "+emp.salary);

// emp.salary = 55000;
// console.log("Through getter : "+emp.salary);


// ----- INHERITANCE ---------- //

// class Vehicles{
//     brand;
//     model;
//     year;

//     constructor(brand, model, year){
//         console.log("into Vehicle(parent) class")
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         console.log("Exit from parent cls.");
//     }
//     displayInfo(){
//         console.log(`Details of your vehicle
//                     ${this.brand}, ${this.model}, ${this.year}`);      
//     }
// }

// class Car extends Vehicles{

//     fuelType;

//     constructor(fuelType, brand, model, year){
//         console.log("into child class.");
//         super(brand,model,year)    // if we create a constructor inside the drived cls then we use superkeyword for calling parent class constructor.
//         this.fuelType = fuelType;
//         console.log("Exit from child class.");
//     }

//     getFuelType(){
//         return this.fuelType;
//     }
//     drive(){
//         super.displayInfo();
//         console.log("We can drive this car.")
//     }
// }

// let Scorpio = new Car();
// Scorpio.brand = "Mahindra";
// console.log(Scorpio.brand);
// Scorpio.drive()

// let breeza = new Car("Petrol");

// console.log(breeza.getFuelType());


// let swift = new Car("petrol", "Maruti", "xpz", 2025);

// swift.displayInfo();

// swift.drive();


// ------ Question -> Student Report Card --------- //

// class Student{
//     name;
//     marks;

//     constructor(name, marks){
//         this.name = name;
//         this.marks = marks;
//     }

//     getAvg(){
//         let sum = this.marks.reduce((a,b)=> a+b,0);

//         let avg = sum / this.marks.length;
//         console.log(`${this.name} have ${avg}`);
//         return avg;
//     }

//     static compareStudent(s1, s2){
//        return s1.getAvg() > s2.getAvg() ? s1.name :s2.name;
//     }

// }

// let std1 = new Student("Ravi",[86, 90, 75]);

// let std2 = new Student("Ram",[96, 95, 85]);

// // std1.getAvg();

// console.log(Student.compareStudent(std1, std2))


// Question -> Online Course Management 

// 1.Class Course 2.Title Student[] 3.AddStudent, UpdateProgress(), showReport() 

class Course{
    title;
    students;
    constructor(title){
        this.title = title;
        this.students = [];
    }

    addStudent(name){
        this.students.push({name, progress : 0});
        console.log(`${name} enrolled in ${this.title} course`);
    }

    updateProgress(name, progress){
        let student = this.students.find(s => s.name === name)

        if(student){
            student.progress = progress;
            console.log(`${name}'s progress updated to ${progress}%`)
        }
    }

    showReport(){
        console.log(`\n Course : ${this.title}`)

        this.students.forEach(s => {
            console.log(`${s.name} - Progress : ${s.progress}`);
        })
    }
}

let WebDev = new Course("Mern 0 to Advance");

WebDev.addStudent("Prince");
WebDev.addStudent("Krishan");

WebDev.updateProgress("Prince", 80)
WebDev.updateProgress("Krishan", 85)

WebDev.showReport();

