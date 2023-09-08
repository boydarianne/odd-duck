"use strict";

//constructor function that creates an object associated with each product (18)

const imgVariable = {
  photoArray: [
    new product("bag", img / assets / bag.jpg),
    new product("banana", img / assets / banana.jpg),
    new product("bathroom", img / assets / bathroom.jpg),
    new product("boots", img / assets / boots.jpg),
    new product("breakfast", img / assets / breakfast.jpg),
    new product("bubblegum", img / assets / bubblegum.jpg),
    new product("chair", img / assets / chair.jpg),
    new product("cthulhu", img / assets / cthulhu.jpg),
    new product("dog-duck", img / assets / dog - duck.jpg),
    new product("dragon", img / assets / dragon.jpg),
    new product("pen", img / assets / pen.jpg),
    new product("pet-sweep", img / assets / pet - sweep.jpg),
    new product("scissors", img / assets / scissors.jpg),
    new product("shark", img / assets / shark.jpg),
    new product("sweep", img / assets / sweep.png),
    new product("tauntaun", img / assets / tauntaun.jpg),
    new product("unicorn", img / assets / unicorn.jpg),
    new product("water-can", img / assets / water - can.jpg),
    new product("wine-glass", img / assets / wine - glass.jpg),
  ],
  imageContainer: document.getElementById("images"),
  
};

function product(productName, filePath, timesShown) {
  this.productName = productName;
  this.filePath = filePath;
  this.timesShown = 0;
}

//algorithm that will randomly generate three unique product images from the images directory.
for (let i=0; i < 3; i++){
const number = Math.floor(Math.random()*imgVariable.length);
}

const productPhoto = [];
const maxImages = 3;

//constructor function to make image objects for images (this.name)
function imageObj() {
  this.imgKey = imgKey;
}
//function to select random images - similar to while loop
//have the randomizer function trigger on a button click

while (productPhoto.length < maxImages) {
  const randomImg = Math.floor(Math.random() * imagePaths.length);
  if (productPhoto.includes(randomImg)) {
    productPhoto.push(randomImg);
  }
}
for (let i = 0; i < maxImages; i++) {
  const imgElm = document.getElementById(`image-container`);
  imgElement.src = imagePaths[productPhoto[i]];
}

displayRandomImg();
