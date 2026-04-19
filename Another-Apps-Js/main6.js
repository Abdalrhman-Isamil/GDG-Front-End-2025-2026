console.log("first")
console.log("second")

setTimeout(()=>{
    console.log("third")
},0)

console.log("fourth")

setTimeout(()=>{
    console.log("fifth")
},0)

//*سينكرونس ده سطر سطر , ا سينكرونس ده بلوك 

// setInterval(()=>{
//     console.log("fifth")
// },2000) 

//* Ajax -> Asynchronous js and xml تكنيك في الجافا  ولها 4 خطوات نعرف الريكوست وناخد منه نسخة ثم نعمل اوبن للريكوست عشان افتح التشانل بيني وبين السرفر عشان اطلب منه الداتا 
//* الاوبن محتاج 3 حاجات , الميثود يعني هاخد داتا , اشهرهم بوست وجيت وديليت هنعامل مع الجيت 
//* الجيت بتبعت داتا لكنها نوت سكيور وعملية زي السيرش المفروض جيت لانها 
//* تاني حاجه اليو ار ال ثم يعرف انا بشتغل سينكرونس ولا ا سينكرونس 
//* تالت خطوة في الايجيكس اعرف ايه اللي هيحصل ثم نعمل سيند للريكوست 

//* AJAX -> Asynchronous JavaScript And XML
// *1- define request
// *2- open -> (method, url, async?)
// *3- onload function
// *4- send

// *readyState
//* 0- just defined
// *1- open -> connection established
// *2- request/header received
//* 3- processing 
// *4- response received

// *status: 200->ok
// *        404->not found

let r=new XMLHttpRequest();
r.open("GET",'https://dummyjson.com/products',true)

r.onload=()=>{
    if(r.readyState==4&&r.status==200){
        // console.log(r.responseText)
        let response=JSON.parse(r.responseText)
        // console.log(response)
        console.log(response.total)
        console.log(response.limit)
        let prod =response.products
        prod.map((item) => {
            console.log("Name:", item.title, "Price:", item.price);
        });
        
    }else{
        console.log("there is not found")
    }
    console.log(r)
}

r.send()

// let prodactsSection=document.querySelector(".products")
// r.onload=()=>{
//     if(r.readyState==4&&r.status==200){
//         // console.log(r.responseText)
//         let response=JSON.parse(r.responseText)
//         // console.log(response)
//         console.log(response.total)
//        let allProducts=DataTransfer.products;
//     console.log(r)
// }

// r.send()

// let r = new XMLHttpRequest();
// r.open("GET", "https://dummyjson.com/products", true);

// r.onload = () => {
//     if (r.readyState == 4 && r.status == 200) {
//         // تحويل النص JSON إلى object
//         let response = JSON.parse(r.responseText);

//         // جملة تأكيد
//         console.log("Total:", response.total);
//         console.log("Limit:", response.limit);

//         // المرور على المنتجات
//         let products = response.products;
//         products.map((item) => {
//             console.log("Name:", item.title, "Price:", item.price);
//         });

//     } else {
//         console.log("Error in request");
//     }
// };

// r.send();

/*
*/




let r = new XMLHttpRequest();
r.open("GET", "https://dummyjson.com/products", true);

r.onload = () => {
    if (r.readyState == 4 && r.status == 200) {
     
        let response = JSON.parse(r.responseText);

       
        let container = document.getElementById("products-container");

      
        response.products.map((item) => {
           
            let card = document.createElement("div");
            card.classList.add("card");

          
            card.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class="price">Price: ${item.price} $</div>
                <button class="add">Add to Cart</button>
            `;

          
            container.appendChild(card);
        });
    } else {
        console.log("Error loading data");
    }
};
r.send();
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// let categLInk='https://dummyjson.com/products/categories'
// let catoSce=document.querySelector(".category");

// function getCat(url){
//     let cr=new XMLHttpRequest();
    
// }

//********************************************************************************************************** */

// let productsSection = document.querySelector(".products");


// function getData(url) {
//     productsSection.innerHTML = "";

//     let r = new XMLHttpRequest();
//     r.open("GET", url, true);

//     r.onload = () => {
//         if (r.readyState == 4 && r.status == 200) {
//             let data = JSON.parse(r.responseText);
//             let allProducts = data.products;

//             allProducts.map((p) => {
//                 productsSection.innerHTML += `
//                 <div class="product">
//                   <img src="${p.thumbnail}" alt="${p.title}">
//                   <h2>${p.title}</h2>
//                   <p class="description">${p.description}</p>
//                   <h4 class="price">Price: <span>${p.price}</span> $</h4>
//                   <button><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
//                 </div>
//                 `;
//             });
//         }
//     };
//     r.send();
// }


// getData("https://dummyjson.com/products/");


// let categoriesLink = "https://dummyjson.com/products/categories";
// let categoriesSection = document.querySelector(".categories");

// function getCategories() {
//     let cr = new XMLHttpRequest();
//     cr.open("GET", categoriesLink, true);
//     cr.onload = () => {
//         if (cr.readyState == 4 && cr.status == 200) {
//             let data = JSON.parse(cr.responseText);

//             data.map((c) => {
//                 categoriesSection.innerHTML += `
//                 <span class="category" onclick="getData('https://dummyjson.com/products/category/${c}')">
//                   ${c}
//                 </span>
//                 `;
//             });
//         } else {
//             console.log("error");
//         }
//     };
//     cr.send();
// }

// getCategories();


// let searchForm = document.getElementById("searchForm");
// let searchInput = document.getElementById("searchInput");

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault(); 
//     let newLink = `https://dummyjson.com/products/search?q=${searchInput.value}`;
//     getData(newLink);
// });


//************************************************************************************************************************************** */ 

