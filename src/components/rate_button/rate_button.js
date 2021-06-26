imgs = [...document.querySelector(".room-rating").children];

function setRating(starred, unstarred) {
  unstarred = 5 - starred
  for (let i = 0; i < starred; i++) {
    const element = imgs[i];
    element.setAttribute("src", "/src/img/star.svg");
    
    
  }

  for (let i = starred; i < unstarred+starred; i++) {
    const element = imgs[i];
    element.setAttribute("src", "/src/img/unstarred.svg");
    
  }
  

}

setRating(4)








// for (let item = 0; item < imgs.length; item++) {
//   const element = imgs[item];


//   prevItems = imgs.slice(0, item);
//   for (let prevItem = 0; prevItem < prevItems.length; prevItem++) {    Прикольная штука получилась, но оказалась не нужна
//     const element = prevItems[prevItem];
//     element.setAttribute("src", "/src/img/star.svg");
//   }

//   element.setAttribute("src", "/src/img/star.svg");


// }