const body = document.getElementsByTagName("body")
const buttonthemeSwich = document.getElementById("themeSwich")
let themes = [document.getElementsByClassName("darkMode"), document.getElementsByClassName("clearMode")]

buttonthemeSwich.addEventListener('click', themeSwich)

function themeSwich(event) {
  if (themes[0].length >= 1 ) {
    body.classList.replace('darkMode', 'clearMode')
    buttonthemeSwich.classList.replace('darkMode', 'cleanMode')
  }
  else if (themes[1].length >= 1) {
    body.classList.replace('clearMode', 'darkMode')
  }
}
