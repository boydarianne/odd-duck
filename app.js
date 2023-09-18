"use strict";

//constructor function that creates an object associated with each product (18)

let rounds = 5;

const imgVariable = {
  imgArray: [
    new product("bag", "img/assets/bag.jpg"),
    new product("banana", "img/assets/banana.jpg"),
    new product("bathroom", "img/assets/bathroom.jpg"),
    new product("boots", "img/assets/boots.jpg"),
    new product("breakfast", "img/assets/breakfast.jpg"),
    new product("bubblegum", "img/assets/bubblegum.jpg"),
    new product("chair", "img/assets/chair.jpg"),
    new product("cthulhu", "img/assets/cthulhu.jpg"),
    new product("dog-duck", "img/assets/dog-duck.jpg"),
    new product("dragon", "img/assets/dragon.jpg"),
    new product("pen", "img/assets/pen.jpg"),
    new product("pet-sweep", "img/assets/pet-sweep.jpg"),
    new product("scissors", "img/assets/scissors.jpg"),
    new product("shark", "img/assets/shark.jpg"),
    new product("sweep", "img/assets/sweep.png"),
    new product("tauntaun", "img/assets/tauntaun.jpg"),
    new product("unicorn", "img/assets/unicorn.jpg"),
    new product("water-can", "img/assets/water-can.jpg"),
    new product("wine-glass", "img/assets/wine-glass.jpg"),
  ],
  imageContainer: document.getElementById("images"),
  resultsContainer: document.getElementById("results"),
  buttonContainer: document.getElementById("button"),
};

function product(productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.votes = 0;
}

product.prototype.render = function () {
  const imgElm = document.createElement("img");
  imgElm.src = this.filePath;
  imgElm.alt = this.productName;
  imgVariable.imageContainer.appendChild(imgElm);
};

product.prototype.renderResult = function (){
  const listElm = document.createElement("li")
  listElm.textContent = `${this.productName} had ${this.votes} votes, and was seen ${this.timesShown} times.`
imgVariable.resultsContainer.appendChild(listElm);
}

function handleRenderResults(event){
  event.preventDefault();

  for (let i = 0; i < imgVariable.imgArray.length; i++){
    imgVariable.imgArray[i].renderResult()
  }
}

//algorithm that will randomly generate three unique product images from the images directory.

function getRandomImg() {
  imgVariable.imageContainer.innerHTML = null;
  //   let arrayCopy = "imgArray";
  let newArray = [];

  for (let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * imgVariable.imgArray.length);
    let randomImg = imgVariable.imgArray[randNum];
    while (newArray.includes(randomImg)) {
      randNum = Math.floor(Math.random() * imgVariable.imgArray.length);
      randomImg = imgVariable.imgArray[randNum];
    }
    randomImg.timesShown++;
    randomImg.render();
    newArray.push(randomImg);
  }
  return newArray;
}

const randomImages = getRandomImg();

//event handler
function handleClickImg(event) {
  event.preventDefault();
  const target = event.target.alt;

  for (let i = 0; i < imgVariable.imgArray.length; i++) {
    if (imgVariable.imgArray[i].productName === target) {
      imgVariable.imgArray[i].votes++;
    }
  }

  rounds--;

  if (rounds == 0) {
    const viewResultsButton = document.createElement("button");
    viewResultsButton.textContent = "view results";
    imgVariable.resultsContainer.appendChild(viewResultsButton);
    viewResultsButton.addEventListener("click", handleRenderResults)


    imgVariable.imageContainer.removeEventListener("click", handleClickImg);
  }

  getRandomImg();
  console.log(imgVariable, rounds);
}

imgVariable.imageContainer.addEventListener("click", handleClickImg);

// const productPhoto = [];
// const maxImages = 3;

//constructor function to make image objects for images (this.name)
// function imageObj() {
//   this.imgKey = imgKey;
// }
// //function to select random images - similar to while loop
// //have the randomizer function trigger on a button click

// //while (productPhoto.length < maxImages) {
// //  const randomImg = Math.floor(Math.random() * imagePaths.length);
//   if (productPhoto.includes(randomImg)) {
//     productPhoto.push(randomImg);
//   }
// }
// for (let i = 0; i < maxImages; i++) {
//   const imgElm = document.getElementById(`image-container`);
//   imgElement.src = imagePaths[productPhoto[i]];
// }

// displayRandomImg();
