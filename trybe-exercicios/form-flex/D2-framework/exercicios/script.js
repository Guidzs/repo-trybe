let buttonSend = document.querySelector(".button")
let bestDate = document.querySelector("#best-date")

bestDate.addEventListener("click", function() {
    bestDate.style.border = cadetblue
})

function prevDefault(event) {
    event.preventDefault()
    
}

buttonSend.addEventListener('click', prevDefault)


