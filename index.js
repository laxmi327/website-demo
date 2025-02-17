
const data = [{
    id:1,
    name:"Sugar(chini)",
    img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNpAVrowWAm-AsJW13NNjI4173zj2zd0N7A& width = 200px;",
   price:100,
   cat:"animal",
},


{
    id:2,
    name:"Jar Water(Paani)",
    img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh0aWi85320je5zqTi1E0HQG91gx3I3_4mw&swidth=200px",
    price:45,
    cat:'wearing',
},


{
    id:3,
    name:"Red Lentils(Rato Dal)",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPGs0sCU2YRPJrHq5RJZpS1b43OLFKQ7EnA&s width = 200px",
    price:160,
    cat:'stationery'
},


{
    id:4,
    name:"Tasty",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgfwxgMyXZRKYfNeM1B_8DfeIsZJ83yfL6IlUfr8TH-6lqEbU3pvZ_UjdEKCgOJzRIMs&usqp=CAU width = 200px",
    price:10,
    cat:'tourism',
},


{
    id:5,
    name:"Arna beer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAwZxQXL8kEwu6jwuDe3R_4mWBIX6yuMAJg&s width =200px",
    price:150,
    cat:'tourism',
},


{
    id:6,
    name:"Muhan Rice(Muhan Chamal)",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1YKq6Rj5NnpFEPXH3R3nttNlruSQbtaZaw&s width =200px",
    price:1750,
    cat:'stationery'
},


{
    id:7,
    name:"Jira Masina Rice(jira masina Chamal)", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaRSuhah703WxWQTApXrgdly6elB87PCAUA&s width = 200px",
    price:2500,
    cat:'tourism',
},



];

const newdata = ["hey", ...(data)]
console.log(newdata)






const produdctContainer = document.querySelector(".products");

const searchinput = document.querySelector(".input");

const produdctCategories = document.querySelector(".categories");

const priceValue = document.querySelector(".priceValue");

const priceRange = document.querySelector(".priceRange");




const showProducts = (filteredproducts)=>{
    produdctContainer.innerHTML = filteredproducts.map(product=>
        `
        <div class="product">
    <img src=${product.img}
    
    <span class="name">${product.name}</span>
    <span class="pricevalue">Rs${product.price}</span>

</div>
        `
    ).join("");


}
  showProducts(data);






searchinput.addEventListener("keyup",function(e){
const value = e.target.value.toLowerCase();

if(value){
       showProducts(data.filter(item=> item.name.toLowerCase().indexOf(value)!== -1));
}else{
    showProducts(data);
}
}
);