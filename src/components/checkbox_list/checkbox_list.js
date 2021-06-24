const title = document.querySelector(".dropdown__title");
const dropdown = document.querySelector(".dropdown-area__checkbox-list");
const button = document.querySelector(".only-title__check")
const before = document.querySelectorAll(".dropdown-area__checkbox-list__item__before");


title.onclick = () => {
  dropdown.classList.toggle("dropdown-area__checkbox-list__transform");
  button.classList.toggle("only-title__check__transform");
}

button.onclick = () => {
  dropdown.classList.toggle("d-none");
}

for (let i = 0; i < before.length; i++) {
  const beforeIndex = before[i];
  beforeIndex.classList.remove("dropdown-area__checkbox-list__item__before"); 
  beforeIndex.onclick = () => {
    beforeIndex.classList.toggle("dropdown-area__checkbox-list__item__before")
  }
}

