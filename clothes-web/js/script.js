const contactButton = document.querySelector(".form__button")
const sendText = document.querySelector(".form-send-message")
const sendParagraph = document.querySelector(".paragraph__text")
contactButton.onclick = function(){
    sendText.classList.toggle("send-message")
    sendParagraph.classList.toggle("send-message")
}
