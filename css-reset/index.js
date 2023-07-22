const toggleButton = document.getElementById("button");
const navbar = document.getElementById("navbar");
const myList = document.getElementById("ul");
const mainContent = document.getElementById("main");
const copyButton = document.getElementById("copy");
const header = document.getElementById("header");
const blurSheet = document.getElementById("blurSheet")

const text = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  color-scheme: dark light; /* Adds a default dark mode to your website */
  scroll-behavior: smooth;
}

:root {
  /* Your custom properties */
}

*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  font: inherit; /* Resets font sizes and font weights */
  font-size: 100%;
  line-height: 1.25;
}

/* For debugging purpose in case of an overflow or something like that */

/*

  * {
    background-color: hsla(150, 100%, 50%, 0.2)
  }

*/

a {
  text-decoration: none;
  color: inherit;
}

img, 
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

img {
  object-fit: cover /* Fixes the problem of stretching for images with fixed dimensions */
}

body {
  min-height: 100dvh, 100vh;
  font-family: Poppins, sans-serif;
}

button {
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
}

ol,
ul {
  list-style: none;
}

.grid {
  display: grid;
}

.flex {
  display: flex;
}

.center-items {
  align-items: center;
  justify-content: center;
}

/* A way to center an item with position absolute or something like that on it */
/* BTW, if you do not know what inset is, it is a shorthand for top, bottom, left and right position properties */

.center-position {
  inset: 0;
  margin: auto;
}

.static {
  position: static;
}

.relative {
  position: relative
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.sticky {
  position: sticky;
}

.inset0 {
  inset: 0;
}

`;

console.log(document.documentElement);

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(text);
  copyButton.setAttribute("data-copied", true);
  setTimeout(() => {copyButton.setAttribute("data-copied", false)}, 2500);
})

toggleButton.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "false") {
    navbar.setAttribute("data-visible", true)
    blurSheet.setAttribute("data-turned-on", true);
    toggleButton.setAttribute("aria-expanded", true)
  } else if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
    blurSheet.setAttribute("data-turned-on", false);
    toggleButton.setAttribute("aria-expanded", false)
  }
});

blurSheet.addEventListener("click", () => {
  if(navbar.getAttribute("data-visible") === "true") {
    navbar.setAttribute("data-visible", false)
    toggleButton.setAttribute("aria-expanded", false)
    blurSheet.setAttribute("data-turned-on", false)
  }
})