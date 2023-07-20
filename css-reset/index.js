const toggleButton = document.getElementById("button");
const navbar = document.getElementById("navbar");
const myList = document.getElementById("ul")
const mainContent = document.getElementById("main")

toggleButton.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "false") {
    navbar.setAttribute("data-visible", true)
    toggleButton.setAttribute("aria-expanded", true)
  } else if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
    toggleButton.setAttribute("aria-expanded", false)
  }
})

mainContent.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
    toggleButton.setAttribute("aria-expanded", false)
  }
})

myList.addEventListener("click", () => {
  navbar.setAttribute("data-visible", false)
  toggleButton.setAttribute("aria-expanded", false)
});