import "./styles/main.css";
const form = document.querySelector("form");
let input = document.querySelector("#input");
const formBtn = document.querySelector("#inputBtn");
const list = document.querySelector(".list");

function vowelCounter() {
  let arrEng = input.value.match(/[aeiouy]/gi);
  let arrRus = input.value.match(/[уеоаыию]/gi);
  let index = 0;

  const span = document.createElement("span");
  const h1 = document.createElement("h1");
  const counter = document.createElement("div");

  function showVowelCount() {
    counter.classList.add("counter");
    counter.innerHTML = `☛ ${input.value} ☚ have <strong>${index}</strong> vowel`;

    h1.appendChild(span);
    list.appendChild(h1);
    list.appendChild(counter);

    input.value = "";
  }

  if (arrEng) {
    arrEng.forEach((element) => {
      span.innerText += element;
      index++;
    });

    showVowelCount();
  }

  if (arrRus) {
    arrRus.forEach((element) => {
      span.innerText += element;
      index++;
    });

    showVowelCount();
  }
}

formBtn.addEventListener("click", vowelCounter);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  vowelCounter();
});
