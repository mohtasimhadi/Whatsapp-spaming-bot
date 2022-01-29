var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];

async function sendMessage() {
    textbox.innerHTML = message;
    textbox.dispatchEvent(event);
    document.getElementsByClassName("_4sWnG")[0].click();
}

for (let index = 0; index < counter; index++) {  
  setTimeout(function() { sendMessage() }, index * 5000);
}