let postsSection=document.querySelector(".posts")
function getData(myLink){
fetch(myLink)
.then((r)=>{
    console.log(r)

    if(r.ok){
        console.log("true fetch")
    }else{
        console.log("false fetch")
    }
return r.json()
})

.then((data)=>{
    let posts=data.posts
    console.log(data)
    postsSection.innerHTML = "";
    posts.map((t)=>{
    let tags = t.tags;    
    postsSection.innerHTML+=`
    <div class="card">
    <h3 class="title">${t.title}</h3>
    <p class="body">${t.body}</p>
    <div class="tags">#${t.tags.join(" # ")}</div>
    <hr>
    <div class="reactions">
            <span class="views"> <i class="fa-solid fa-eye"></i> ${t.views}</span>
            <span class="likes"> <i class="fa-solid fa-heart"></i> ${t.reactions.likes}</span>
            <span class="dislikes"> <i class="fa-solid fa-thumbs-down"></i> ${t.reactions.dislikes}</span> 
        </div>
        
    </div> `
})
})
.ca
.catch((Errorr)=>{
    console.log(Errorr," Warn Error ")
})
}
getData("https://dummyjson.com/posts")

let searchInput = document.querySelector("form input");
searchInput.addEventListener("input", () => {
    let newLink=`https://dummyjson.com/posts/search?q=${searchInput.value}`;
    getData(newLink);
})

//******************************************************************************************************************************* */


                //  تقسيم التاجات: 3 شمال + 3 يمين
        //         let leftTags = tags.slice(0, 3).map(tag =>
        //             `<span class="main-tag" onclick="getData('https://dummyjson.com/posts/tag/${tag}')">#${tag}</span>`
        //         ).join(" ");

        //         let rightTags = tags.slice(3, 6).map(tag =>
        //             `<span class="main-tag" onclick="getData('https://dummyjson.com/posts/tag/${tag}')">#${tag}</span>`
        //         ).join(" ");

        //         postsSection.innerHTML += `
        //         <div class="card">
        //           <div class="tags-row">
        //             <div class="tags-left">${leftTags}</div>
        //             <div class="tags-right">${rightTags}</div>
        //           </div>
        //           <h3 class="title">${t.title}</h3>
        //           <p class="body">${t.body}</p>
        //           <hr>
        //           <div class="reactions">
        //                 <span class="views"> <i class="fa-solid fa-eye"></i> ${t.views}</span>
        //                 <span class="likes"> <i class="fa-solid fa-heart"></i> ${t.reactions.likes}</span>
        //                 <span class="dislikes"> <i class="fa-solid fa-thumbs-down"></i> ${t.reactions.dislikes}</span> 
        //           </div>
        //         </div> `;
        //     })
        // })
        
// function getCategories() {
//     fetch('https://dummyjson.com/posts/tags')
//         .then((res) => res.json())
//         .then((data) => {
//             let tagsContainer = document.getElementById("tagsContainer");
//             tagsContainer.innerHTML = "";
//             data.map((tag) => {
//                 tagsContainer.innerHTML += `
//                 <span class="main-tag" onclick="getData('https://dummyjson.com/posts/tag/${tag}')">#${tag}</span>
//                 `;
//             })
//         })
// }
// getCategories();
