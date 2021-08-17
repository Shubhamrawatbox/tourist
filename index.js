let navbar = document.getElementById("navbar");

window.onscroll = () => {
  let top = window.scrollY;
  // console.log(top);
  if (top > 80) {
    navbar.style.background = "#192a56";
    navbar.style.boxShadow = "1px 1px 2px 4px rgba(0,0,0,0.5)";
    navbar.style.paddingTop = "0rem";
    navbar.style.padding = "0.3rem 0";
  } else {
    navbar.style.background = "transparent";

    navbar.style.boxShadow = "none";
  }
};

// show answer
let ques = document.getElementsByClassName("question");
let num = document.getElementsByClassName("number");

let i = 0;
for (let i = 0; i < ques.length; i++) {
  const element = ques[i];
  element.addEventListener("click", function () {
    var ans = this.nextElementSibling;
    if (ans.style.height == "0px") {
      ans.style.height = "80px";
      num[i].classList.add("active");
    } else {
      ans.style.height = "0px";
      num[i].classList.remove("active");
    }
  });
}

// toggle background
const one = document.getElementById("moon");
const change = () => {

  if (one.classList.contains("fa-moon")) {
    one.classList.add("fa-star");
    one.classList.remove("fa-moon");
    document.body.classList.toggle('dark-theme')
  } else {
    one.classList.add("fa-moon");
    one.classList.remove("fa-star");
  }
};

one.addEventListener("click", change);
