/*
promise
a سينكرونس وله حالات معينة
1 pending لسه شغال مفيش رد معايا
2 fulfilled  خلصت الاوبيريشن
3 rejected معناه في ايرور حصل او مشكلة
عندنا طريقين ي اما يمشي في الذين ي اما هيمشي في الكاتش 
ممكن نخلص اكتر من ذين عادي وبنعتبر الكاتش زي الإلس وسواء خلص اي حاجه فيهم هتخش في الاخر على فاينلي

*/

// let myP=new Promise((resolve,reject)=>{ //بياخد كول باك وبتاخد حاجتين ريسولف وريجيكت

//     let salary=5000;

//     if(salary>3000){ 
//         resolve("accepted") // تودي للذين
//     }else{
//         reject("rejected") //تودي للكاتش
//     }

// })

// myP.then((data)=>{
// console.log(`your salary is ${data}`)
// }).catch((error)=>{
//     // console.log("error")
//     console.error
// })

//******************** */

// let p=new Promise((res,rej)=>{
//     let country="cairo"
//     if(country=="alex"){
//         res("accepted , you are in alex")
//     }else{
//         rej("not valid")
//     }
// })


// p.then((e)=>{
//     console.log(e)
// })
// .catch((err)=>{
//     console.warn(err)
// })

// .finally(()=>{
//     console.log("done")
// })

//******************** */

// let myPromise=new Promise((res,rej)=>{
//     let x=5000;
//     if(x>=5000){
//         res(x);
//     }else{
//         rej("not or too small")
//     }
// })

// myPromise.then((res)=>{
//     console.log("the price is :",res)
//     return res;
// })
// .then((data)=>{
//     console.log("the price after discount: ",data/10)
// })

// .catch((err)=>{console.warn(err)})
// .finally(()=>{console.log("done")})

//******************** */


// *********====Fetch=====*********** *// مبينة على البروميز وزي الاجاكس بس ليها طريقة مختلفة
//* بترد ب ذين او كاتش اللي هو ريسبونس عام وبتاخد اللينك 





// let todosSection=document.querySelector(".todos")
// fetch('https://dummyjson.com/todos')
// .then((r)=>{
//     console.log(r)

//     if(r.ok){
//         console.log("true fetch")
//     }else{
//         console.log("false fetch")
//     }
//    return r.json()
// })
// .then((data)=>{
//     let todos=data.todos
//     console.log(data)
//     todos.map((t)=>{
//     let icon =t.completed? `<i class="fa-solid fa-check"></i>`:`<i class="fa-solid fa-circle-xmark"></i>`
//     todosSection.innerHTML+=`
//     <div class="todo" >
//     <p>${t.todo}</p>
//     ${icon}
//     </div>
//     `
// })
// })

// .catch((err)=>{
//     console.log(err,"=====================")
// })

// function getTodo(){
//     fetch('https://dummyjson.com/todos/random')
//     .then(res=>res.json())
//     .then((todo)=>{
//         alert(todo.todo)
//     })

// }

//******************** */

//* async ......wait

// async function getData(){
// let response=await fetch('https://dummyjson.com/todos/random')
// console.log(response)
// let data=await response.json()
// console.log(data)
// }
// getData()


//******************** */
//* regex => regular expression 
//*  syntax /regex/i = يعني مش يفرق معاه كابيتال ولا سمو
//* علامة ^ معناها يبدأ بهذا الحرف وهكذا و $ معناها ينتهي بحرف كذا وهكذا
//*(car) anding
//*[123] oring
//*{2,11} between 2, 11 letters small
//*{4,} more than 4 letters
//*{3} only 3  letters
//*  " " or /s -> space
//* [0-9]or \d ->digits
//*[a-zA-Z0-9] or \w -> letters and digits
//* \/ -> /
// let userWord="cat"
// let wordRegex=/^cat$/i
// console.log(wordRegex.test(userWord)) // return true

//* name regwx 
//*start with capital
//*only letters
//* More than 2 letters

//******************************* */

// let myName="Abood"
// let nameRegex=/^[A-Z][a-z]{2,11}$/
// console.log(nameRegex.test(myName))

//******************************* */

// let fullName="Abood Ismail"
// let 

//******************************* */

// let myPhone="0155429236"
// let phoneRegex /^01[125]\d{8}$/ 
// مفتاح الدولة : 
//******************************* */

// let email="aboodismail@gmail.com"
// let emailRegex=/^[a-z][a-zA-z0-9%$*]{2,20}(@gmail.com)$/

//******************************* */

//* date regex

//******************************* */

//* password regex

//******************************* */

//? age from 10 to 80 
//? ^( 1[0-9] |[2-7][0-9]|80)$/  

/*
/[A-Z][2]/
/^web\s?(design|dev)/
/[A-Z][a-z]{3}[A-Z]/ == //[A-Z][a-z][a-z][a-z][A-Z]//
/^01[0125]\d{8}$/ 
/ ^(\+2|002)?01[0125][0-9]{8} /
/ ^([1-7][0-9]|80)$ /
/ ^( 1[0-9] |[2-7][0-9]|80)$/  

*/

// let mailInput=document.querySelector("form input")

// let textBox=document.querySelector(".warning")

// mailInput.addEventListener("input",()=>{
//     if(mailRegex.test(mailInput.value)){
//         textBox.innerHTML=`
//          <p class="valid">valid mail</p>
//         `
//     }else{
//         console.log("must start with small letter")
//          textBox.innerHTML=`
//          <p class="invalid">must start with small letter</p>
//          `
//     }
// })


// let fullName="Fatma Akram"
let nameRegex= /^[A-Z][a-z]{2,11}\s[A-Z][a-z]{2,11}$/
// console.log(nameRegex.test(fullName))

// phone regex:=====
// start with 01
// only 11 digits

// let myPhone= "01004784403"
// let phoneRegex=/^(01)\d{9}$/

// console.log(phoneRegex.test(myPhone))


// email Regex :========
// end with @gmail.com
// start with small letter

// let email= "fatma$72w@gmail.com"
// let emailRegex=/^[a-z][a-zA-Z0-9%$]{2,20}(@gmail.com)$/
// console.log(emailRegex.test(email))


// date regex:===========
// dd/mm/yyyy
// let date="02/05/1999"
// let dateRegex=/^\d{2}\/\d{2}\/\d{4}$/
// console.log(dateRegex.test(date))


/*
let nameInput= document.querySelector("form input")

let textBox= document.querySelector(".warning")

nameInput.addEventListener("input",()=>{
    if(nameRegex.test(nameInput.value)){
        textBox.innerHTML=`
        <p class="valid">valid name</p>
        `
    }else{
        console.log("must start with capital letter and more than 2 letters")
        textBox.innerHTML=`
        <p class="invalid">must start with capital letter and more than 2 letters</p>
        `
    }
})
*/
//************************************************************************************************ */

let mailInput = document.querySelector("#email");
let textBox = document.querySelector(".warning");


let mailRegex = /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/;

mailInput.addEventListener("input", () => {
  if (mailRegex.test(mailInput.value)) {
    textBox.innerHTML = `<p class="valid"> Valid email</p>`;
  } else {
    textBox.innerHTML = `<p class="invalid"> Invalid email format</p>`;
  }
});
