const toggleButton = document.getElementById("button");
const navbar = document.getElementById("navbar");
const myList = document.getElementById("ul")
const mainContent = document.getElementById("main")
/* const navbarContent = document.getElementsByName("li") */

toggleButton.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "false") {
    navbar.setAttribute("data-visible", true)
  } else if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
  }
})

mainContent.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
  }
})

myList.addEventListener("click", () => {
  navbar.setAttribute("data-visible", false)
});