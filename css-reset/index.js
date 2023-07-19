const navbar = document.getElementById("navbar");
const button = document.getElementById("button");
const button2 = document.getElementById("button2")
const mainContent = document.getElementById("main");
const body = document.body;

let isCollapsed = false;

button2.addEventListener("click", () => {
  if(document.body.clientWidth >= 911) {
    if(isCollapsed === true) {
      navbar.classList.add("slide-in")
      navbar.classList.remove("slide-out")
      navbar.classList.add("nav");
      navbar.classList.remove("none");
      mainContent.classList.remove("one-by-three");
      mainContent.classList.add("two-by-three");
      isCollapsed = false;
    } else if(isCollapsed === false) {
      navbar.classList.remove("slide-in")
      navbar.classList.add("slide-out")
      setTimeout(() => {
        navbar.classList.add("none");
        mainContent.classList.add("one-by-three");
        navbar.classList.remove("nav")
      }, 100)
      mainContent.classList.remove("two-by-three");
      isCollapsed = true;
    }
  } else if(document.body.clientWidth < 911) {
    if(isCollapsed === true) {
      navbar.classList.add("mobile-nav");
      navbar.classList.remove("slide-out")
      navbar.classList.remove("nav");
      navbar.classList.remove("none");
      mainContent.classList.add("one-by-three");
      mainContent.classList.remove("two-by-three");
      isCollapsed = false;
    } else if(isCollapsed === false) {
      navbar.classList.remove("mobile-nav")
      navbar.classList.remove("slide-out")
      navbar.classList.remove("nav")
      navbar.classList.add("none");
      mainContent.classList.add("one-by-three");
      mainContent.classList.remove("two-by-three");
      isCollapsed = true;
    }
  }
})