let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let sec4 = document.querySelector(".sec4");
let sec5 = document.querySelector(".sec5");
let nav2 = document.querySelector(".nav2");
let cross = document.querySelector(".cross");
let popup = document.querySelector(".popup");
let button = document.querySelector(".button");



let fetchSec1 = async()=>{
    let response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-03-27&to=2024-03-27&sortBy=popularity&apiKey=0a05fa28f6754343baf25b4690e831d8" 
   
    )
    let  data = await response.json();
    console.log(data);
    data.articles.forEach((ele,index)=> {
        displaySec1(ele);
    }); 
};
 fetchSec1();

 let displaySec1 = (ele)=>{
    let div = document.createElement("div")
       div.setAttribute("class","cardDiv");
     div.innerHTML = ` <img src="${ele.urlToImage}" alt"" class = "cardImg">
             <p >${ele.title.slice(0,30)}...</p> 
             <h4 class="Innercard">${ele.author}</h4>
             <h4 class = "Innercard2">${ele.source.name}</h4>
             <p class ="Innercard3">${ele.publishedAt}</p>
             <p class = "Innercard4">Click For More Detail's</p>
             `;
             
     sec1.append(div);
     div.addEventListener("click",(e)=>{
        e.stopPropagation();
        popup.style.display = "block";
        displayPopupData(ele);
     })
 };



// news section 2

let fetchSec2 = async()=>{
    let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-12&sortBy=publishedAt&apiKey=0a05fa28f6754343baf25b4690e831d8" )
    let  data = await response.json();
    console.log(data.articles);
    data.articles.forEach((ele,index)=> {
        displaySec2(ele);
    });
    
};
 fetchSec2();

let displaySec2 = (ele)=>{
    let div = document.createElement("div")
       div.setAttribute("class","cardDiv");
     div.innerHTML = ` <img src="${ele.urlToImage}" alt"" class = "cardImg">
     <p >${ele.title.slice(0,30)}...</p> 
     <h4 class="Innercard">${ele.author}</h4>
     <h4 class = "Innercard2">${ele.source.name}</h4>
     <p class ="Innercard3">${ele.publishedAt}</p>
     <p class = "Innercard4">Click For More Detail's</p>`;
     sec2.append(div);
     div.addEventListener("click",()=>{
        popup.style.display = "block";
        displayPopupData(ele);
     })
 };


 //news section 3

 let fetchSec3 = async()=>{
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a05fa28f6754343baf25b4690e831d8" 
   
    )
    let  data = await response.json();
    console.log(data.articles);
    data.articles.forEach((ele,index)=> {
        displaySec3(ele);
    });
    
};
fetchSec3();

let displaySec3 = (ele)=>{
    let div = document.createElement("div")
       div.setAttribute("class","cardDiv");
     div.innerHTML = ` <img src="${ele.urlToImage}" alt"" class = "cardImg">
     <p >${ele.title.slice(0,30)}...</p> 
     <h4 class="Innercard">${ele.author}</h4>
     <h4 class = "Innercard2">${ele.source.name}</h4>
     <p class ="Innercard3">${ele.publishedAt}</p>
     <p class = "Innercard4">Click For More Detail's</p>`;
     sec3.append(div);
     div.addEventListener("click",()=>{
        popup.style.display = "block";
        displayPopupData(ele);
     })
 };



 //news section 4

 let fetchSec4 = async()=>{
    let response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0a05fa28f6754343baf25b4690e831d8" 
   
    )
    let  data = await response.json();
    console.log(data.articles);
    data.articles.forEach((ele,index)=> {
        displaySec4(ele);
    });
    
};
fetchSec4();

let displaySec4 = (ele)=>{
    let div = document.createElement("div")
       div.setAttribute("class","cardDiv");
     div.innerHTML = ` <img src="${ele.urlToImage}" alt"" class = "cardImg">
     <p >${ele.title.slice(0,30)}...</p> 
     <h4 class="Innercard">${ele.author}</h4>
     <h4 class = "Innercard2">${ele.source.name}</h4>
     <p class ="Innercard3">${ele.publishedAt}</p>
     <p class = "Innercard4">Click For More Detail's</p>`;
     sec4.append(div);
     div.addEventListener("click",()=>{
        popup.style.display = "block"
        displayPopupData(ele);
     })
 };



 //news section5
let fetchSec5 = async()=>{
    let response = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a05fa28f6754343baf25b4690e831d8" 
   
    )
    let  data = await response.json();
    console.log(data.articles);
    data.articles.forEach((ele,index)=> {
        displaySec5(ele);
       
    });
    
};
 fetchSec5();

let displaySec5 = (ele)=>{
    let div = document.createElement("div")
       div.setAttribute("class","cardDiv");
     div.innerHTML = ` <img src="${ele.urlToImage}" alt"" class = "cardImg">
     <p >${ele.title.slice(0,30)}...</p> 
     <h4 class="Innercard">${ele.author}</h4>
     <h4 class = "Innercard2">${ele.source.name}</h4>
     <p class ="Innercard3">${ele.publishedAt}</p>
     <p class = "Innercard4">Click For More Detail's</p>`;
     sec5.append(div);
     div.addEventListener("click",()=>{
        popup.style.display = "block"
        displayPopupData(ele);
     })
 };



 
 let handelpopup =()=>{
    popup.style.display = "none";
    cross.style.cursor = "pointer";
 } 
 cross.addEventListener("click", handelpopup);
 button.addEventListener("click",handelpopup);

 let displayPopupData = (ele)=>{
    nav2.innerHTML = ` <img src="${ele.urlToImage}" alt"" class="popupCard1">
    <p class = "cardtitle1">${ele.description}...</p> 
    <p class = "cardtitle1">${ele.title}...</p> 
    <h4></h4>
    <h4 class = "cardtitle4">Author : ${ele.author}</h4>
    <h4 class ="cardtitle3">Surce Name : ${ele.source.name}</h4>
    <p class = "cardtitle2">Published on : ${ele.publishedAt}</p>`;

 }


