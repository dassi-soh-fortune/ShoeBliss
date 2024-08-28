const sliderWrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
   {
      id: 1,
      title: "DIOR",
      price: 112.89,
      colors: [
         {
            code: "white and ash",
            img: "./img/dior1.jpg",
         },
         {
            code: "black",
            img: "./img/dior (2).jpg",
         },
      ],
   },
   {
      id: 2,
      title: "ADIDAS",
      price: 109.00,
      colors: [
         {
            code: "gray",
            img: "./img/adidas.jpg",
         },
         {
            code: "black",
            img: "./img/adidas (2).jpg",
         },
      ],
   },
   {
      id: 3,
      title: "JORDAN",
      price: 130.41,
      colors: [
         {
            code: "gray",
            img: "./img/jordan4.jpg",
         },
         {
            code: "lightblue",
            img: "./img/jordan4 (2).jpg",
         },
      ],
   },
   {
      id: 4,
      title: "RESPONSIBLE",
      price: 208.14,
      colors: [
         {
            code: "black",
            img: "img/responsible.jpg",
         },
         {
            code: "brown",
            img: "./img/responsible (2).jpg",
         },
      ],
   },
   {
      id: 5,
      title: "DIOR HOMME",
      price: 99.99,
      colors: [
         {
            code: "ash",
            img: "img/dior.jpg",
         },
         {
            code: "pink",
            img: "./img/dior.webp",
         },
      ],
   },

];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)   => {
   item.addEventListener("click", () => {
      // change the current slide
      sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the choosen product
      choosenProduct = products[index]

      //change texts of current products
      currentProductTitle.textContent = choosenProduct.title
      currentProductPrice.textContent = "$" + choosenProduct.price
      currentProductImg.src = choosenProduct.colors[0].img

      //assign new colors
      currentProductColors.forEach((color, index) =>{
               color.style.backgroundColor = choosenProduct.colors[index].code;
      }
       );

   });
});

currentProductColors.forEach((color,index) =>{
   color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img

   });
});

currentProductSizes.forEach((size, index)=>{
   size.addEventListener("click", ()=>{
      currentProductSizes.forEach(size=>{
         size.style.backgroundColor = "white"
      size.style.color = "black"
      })
      size.style.backgroundColor = "black"
      size.style.color = "white"
   });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
   payment.style.display= "flex"

})
close.addEventListener("click", ()=>{
   payment.style.display= "none"

})
