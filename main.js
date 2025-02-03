// let num = 1;
// console.log(num++);

// let count = 0;

// let text = document.createElement("h1");
// document.body.appendChild(text);

// setInterval(() => {


//     count++;
//     text.textContent =  count ;
// }, 1000)



// console.log(oclock.getHours());
// console.log(oclock.getMinutes());
// console.log(oclock.getSeconds());
// console.log(oclock.getFullYear());

const oclock = new Date();

let soat = document.querySelector("#hours");
let daqiqa = document.querySelector("#minute");
let soniya = document.querySelector("#second");

function time (){
    let now = new Date();
    soat.textContent = String(now.getHours()).padStart(2,"0");
    daqiqa.textContent = String(now.getMinutes()).padStart(2,"0");
    soniya.textContent = String(now.getSeconds()).padStart(2,"0");


}
setInterval(time, 1000)




