let slideWrap = document.querySelector('.sliderWrapper');
let menuItems = document.querySelectorAll('.menuItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColor = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');


menuItems.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        /* изменение текущего слайда на главной странице */
        slideWrap.style.transform = `translateX(${-100 * index}vw)`;

        /* изменение выбранного продукта */
        choosenProduct =products[index];


        /* изменение описания текущего продукта */
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        /* изменение цветов для выбора */
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    })

});

    /* Изменение картинки при выборе */
currentProductColor.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choosenProduct.colors[index].img; 
    });
});


    /* Выбор размера */
currentProductSizes.forEach((sizeButt)=>{
    sizeButt.addEventListener('click',()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        });
        sizeButt.style.backgroundColor = 'black';
        sizeButt.style.color = 'white';
    });
});


/* Открыть - закрыть окно */
let buttonProd = document.querySelector('.productButton');
let payment = document.querySelector('.payment');
let paymentEx = document.querySelector('.close');

buttonProd.addEventListener('click',()=>{
    payment.style.display = 'flex';
});

paymentEx.addEventListener('click',()=>{
    payment.style.display = 'none';
});