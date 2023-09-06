'use strict';

//constructor function that creates an object associated with each product
function oddDuckProd(productName, filePath, timesShown){
this.productName = productName;
this.filePath = filePath;
this.timesShown = 0;
}


const product1 = new product();
const product2 = new product();
const product3 = new product();
const product4 = new product();
const product5 = new product();
const product6 = new product();
const product7 = new product();
const product8 = new product();
const product9 = new product();
const product10 = new product();
const product11 = new product();
const product12 = new product();
const product13 = new product();
const product14 = new product();
const product15 = new product();
const product16 = new product();
const product17 = new product();
const product18 = new product();
const product19 = new product();


function displayRandomImg(){
    const imgPaths = [
        img/assets/bag.jpg,
        img/assets/banana.jpg,
        img/assets/bathroom.jpg,
        img/assets/boots.jpg,
        img/assets/breakfast.jpg,
        img/assets/bubblegum.jpg,
        img/assets/chair.jpg,
        img/assets/cthulhu.jpg,
        img/assets/dog-duck.jpg,
        img/assets/dragon.jpg,
        img/assets/pen.jpg,
        img/assets/pet-sweep.jpg,
        img/assets/scissors.jpg,
        img/assets/shark.jpg,
        img/assets/sweep.png,
        img/assets/tauntaun.jpg,
        img/assets/unicorn.jpg,
        img/assets/water-can.jpg,
        img/assets/wine-glass.jpg,
    ];

    const productPhoto = [];
    const maxImages = 3;

    while (productPhoto.length < maxImages) {
        const randomImg = Math.floor(Math.random() * imagePaths.length);
        if (productPhoto.includes(randomImg)) {
          productPhoto.push(randomImg);
        }
    }
};

for (let i = 0; i < maxImages; i++) {
    const imgElm = document.getElementById(`image-container`);
    imgElement.src = imagePaths[productPhoto[i]];
};

displayRandomImg();

