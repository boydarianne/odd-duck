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

let randomImages = [];

let oldImages = [];

getData();


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

product.prototype.renderResult = function () {
  const listElm = document.createElement("li");
  listElm.textContent = `${this.productName} had ${this.votes} votes, and was seen ${this.timesShown} times.`;
  imgVariable.resultsContainer.appendChild(listElm);
};

function handleRenderResults(event) {
  event.preventDefault();

  for (let i = 0; i < imgVariable.imgArray.length; i++) {
    imgVariable.imgArray[i].renderResult();
  }
  renderChart();
}

//algorithm that will randomly generate three unique product images from the images directory.

function getRandomImg() {
  imgVariable.imageContainer.innerHTML = null;
  //   let arrayCopy = "imgArray";
  oldImages = randomImages;
  randomImages = [];

  for (let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * imgVariable.imgArray.length);
    let randomImg = imgVariable.imgArray[randNum];
    while (randomImages.includes(randomImg) || oldImages.includes(randomImg)) {
      randNum = Math.floor(Math.random() * imgVariable.imgArray.length);
      randomImg = imgVariable.imgArray[randNum];
    }
    randomImg.timesShown++;
    randomImg.render();
    randomImages.push(randomImg);
  }
}

getRandomImg();

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
    viewResultsButton.addEventListener("click", handleRenderResults);

    imgVariable.imageContainer.removeEventListener("click", handleClickImg);
  }

  getRandomImg();
  console.log(imgVariable, rounds);
  storeData();
}

imgVariable.imageContainer.addEventListener("click", handleClickImg);

function renderChart() {
  const ctx = document.getElementById("myChart");

  const namesArray = [];
  const votesArray = [];
  const viewsArray = [];

  for (let i = 0; i < imgVariable.imgArray.length; i++) {
    const product = imgVariable.imgArray[i];
    namesArray.push(product.productName);
    votesArray.push(product.votes);
    viewsArray.push(product.timesShown);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: namesArray,
      datasets: [
        {
          label: "# of Votes",
          data: votesArray,
          borderWidth: 1,
        },
        {
          label: "# of Views",
          data: viewsArray,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  console.log(namesArray, ctx);
}

console.log(imgVariable);

function storeData() {
  localStorage.setItem("products", JSON.stringify(imgVariable.imgArray));
}

function getData() {
  const storeInfo = JSON.parse(localStorage.getItem("products"));
  if (storeInfo) {
    imgVariable.imgArray = [];
    for (let i = 0; i < storeInfo.length; i++) {
      const newProduct = new product(
        storeInfo[i].productName,
        storeInfo[i].filePath
      );
      imgVariable.imgArray.push(newProduct);
    }
  }
  console.log(storeInfo)
}

