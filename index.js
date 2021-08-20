let navbar = document.getElementById("navbar");

// chnage background in scroll
window.onscroll = () => {
  let top = window.scrollY;

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
    document.body.classList.add("dark-theme");
  } else {
    one.classList.add("fa-moon");
    one.classList.remove("fa-star");
    document.body.classList.remove("dark-theme");
  }
};

one.addEventListener("click", change);

// menu hamburger animated
const menu = document.querySelector(".menu");
const mobilemenu = document.getElementById("mobilemenu");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  mobilemenu.classList.toggle("menuactive");
});

// chnage active class in menu list

let navbarmenu = document.querySelectorAll(".list-item");

for (let i = 0; i < navbarmenu.length; i++) {
  const element = navbarmenu[i];
  element.addEventListener("click", function () {
    for (let j = 0; j < navbarmenu.length; j++) {
      const element2 = navbarmenu[j];
      element2.classList.remove("active");
    }
    this.classList.add("active");
  });
}

//work project js

let productlist = document.querySelectorAll(".product-list");
let itembox = document.querySelectorAll(".item-box");

for (let l = 0; l < productlist.length; l++) {
  const element = productlist[l];
  element.addEventListener("click", function () {
    for (let j = 0; j < productlist.length; j++) {
      const ele = productlist[j];
      ele.classList.remove("active");
    }
    this.classList.add("active");
    let datafilter = this.getAttribute("data-filter");
    console.log(datafilter);
    for (let k = 0; k < itembox.length; k++) {
      const element3 = itembox[k];
      console.log(element);
      console.log(itembox.length);
      element3.classList.add("hide");
      if (
        element3.getAttribute("data-item") == datafilter ||
        datafilter == "all"
      ) {
        element3.classList.remove("hide");
        element3.classList.add("active");
      }
    }
  });
}

// top btn js
let topbtn = document.getElementById("top");
topbtn.style.display = "none";
window.addEventListener("scroll", function () {
  let yx = window.scrollY;
  if (yx > 450) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
});
topbtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// counter animated in js

let user = document.querySelectorAll(".target");
let count = 0;
window.addEventListener("scroll", function () {
  let yy = window.scrollY;
  
  if (yy > 4000) {
    for (let u = 0; u < user.length; u++) {
      const elementu = user[u];
      let datatarget = elementu.getAttribute("data-target");
      setInterval(() => {
        if (count < datatarget) {
          elementu.innerHTML = count;
          count++;
        } else {
          elementu.innerHTML = datatarget;
        }
      }, 400);
    }
  } else {
    count = 0;
  }
});
