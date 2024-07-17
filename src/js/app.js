const BaseUrl = "http://localhost:3000/data";

async function fetchData() {
  const response = await fetch("http://localhost:3000/data");
  const data = await response.json();
  addUi(data);
}

fetchData();

function addUi(data) {
  data.map((item) => {
    flowerCard.innerHTML += `
     <div class="flower-card">
            <div>
              <img
                src="${item.url}"
                alt=""
              />
            </div>
            <div class="flower-card-down">
              <p>${item.colors}</p>
              <h2>${item.title}</h2>
              <span>${item.stars}</span>
              <span class="money">${item.price}</span>
              <button class="btn">Select options</button>
            </div>
          </div>
    `;
  });
}

const flowerCard = document.querySelector(".flower-content");

const addButton = document.querySelector("#addBtn");

addButton.addEventListener("click", addCard);

function addCard() {}

const modal = document.querySelector(".modal");
const btn = document.querySelector("#addBtn");
const closer = document.querySelector(".close");
const addArticleBtn = document.querySelector("#addBtn");

closer.addEventListener("click", () => {
  modal.style.display = "none";
});

addArticleBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
