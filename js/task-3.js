const innerText = document.querySelector('#name-input')
const outerText = document.querySelector("#name-output")

innerText.addEventListener("input", (event)=> {
    if(innerText.value.trim() === ""){
        outerText.textContent = "Anonymous";
    } else{ outerText.textContent = event.currentTarget.value;}
}
)