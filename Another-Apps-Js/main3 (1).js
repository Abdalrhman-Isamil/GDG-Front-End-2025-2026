// let w;
// if(window.Worker!==undefined){
//     w=new Worker("./w.js")
//     w.onmessage=(e)=>{
//         console.log(e.data)
//     }
// }else{
//     console.log(" ur brawoser dosen't support woker ")
// }

//********************************************** */

// let counter=document.querySelector("span")
// let p=document.

//********************************************** */

// var x;
// var x=10;
// var x="abood"

// x={
//     name:"ahmed"
// }

// console.log(x)

//* هوسيتنج مع الفار يعني الجافا بتعدي على كل الفاريبلز يعني مهما كتبتب بيطلع ان ديفايند مش ايرور ده مع الفار

//* الليت مش شغال معاها هويستينج

// let y;
// y=20;
// console.log(y);
// let y="abood" دي كده ايرور 

//****************************************** */

// const x=0;


//****************************************** */

// let arr[1,2,3,4,,4]
// console.log(...arr)

//****************************************** */

localStorage.setItem("name","abood");
//* حتى لو عملنا كومن عليهم مش يتمسحوا ولا حتى من تابه جديدة تتميح بإيدك من الويب او من
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));
localStorage.setItem("age,30")
//* "ب لو عايزين نفضيها كلها مرة واحدة عن طريق الكلير"
// localStorage.clear();

let student={
    name:"abood",
    age:20
}

let courses=["html","css","js"]
localStorage.setItem("student",JSON.stringify(student))
localStorage.setItem("cours")