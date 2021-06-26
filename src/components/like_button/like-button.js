const likeBtn = document.querySelector('.like-button');
let img = likeBtn.querySelector('.like-button__like-icon');
let likes = likeBtn.querySelector('.like-button__likes-value');
let likesValue = Number(likes.innerHTML)


likeBtn.onclick = () => {

  if (likeBtn.classList.contains("liked")) {
    likeBtn.classList.remove("liked");
    img.setAttribute("src", "/src/img/unliked.svg");
    likesValue--
    likes.innerHTML = likesValue;
  } else {
    likeBtn.classList.add("liked");
    img.setAttribute("src", "/src/img/liked.svg");
    likesValue++
    likes.innerHTML = likesValue
  }

}