area = document.querySelectorAll(".dropdown-area__text");
list = document.querySelectorAll(".dropdown-area__list");
items = document.querySelectorAll(".dropdown-area__list__item")

lists = [];
for (let index = 0; index < list.length; index++) {
  const element = list[index];
  lists.push(element);
  
}

console.log(list)

for (let i = 0; i < area.length; i++) {
  const element = area[i];
  element.onclick = (event) => {
    let target = event.target;
    if (target.className = "dropdown-area__text") {
      lists[i].classList.toggle("d-none");
    }
  
  }
  
}



function changeValue() {
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const elementPlusButton = element.querySelector(".dropdown-area__list__item__counter__plus-button");
    const elementMinusButton = element.querySelector(".dropdown-area__list__item__counter__minus-button");
    let elementString = element.querySelector(".dropdown-area__list__item__counter__value");
    let elementValue = parseInt(elementString.textContent.match(/\d+/));

    elementPlusButton.onclick = () => {
      elementValue += 1;
      elementString.innerHTML = String(elementValue);
    };

    elementMinusButton.onclick = () => {
      if (elementValue >= 1) {
        elementValue -= 1;
        elementString.innerHTML = String(elementValue);
      }

    };
  }
}

changeValue()