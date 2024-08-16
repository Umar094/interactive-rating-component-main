const form = document.querySelector(".rate-box")
const rateInputs = document.querySelectorAll(".rate-circle-input")
const rateCountTextHolder = document.querySelector(".howMuchRate")
const submitMessage = document.querySelector(".submit-message")

submitMessage.style.display = "none"

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let selectedRate;

    rateInputs.forEach((rateItem, index) => {
        rateItem.checked ? selectedRate = index + 1 : undefined
    })
    
    if(selectedRate === undefined) {return}

    rateCountTextHolder.innerHTML = selectedRate

    submitMessage.style.display = "flex"
})