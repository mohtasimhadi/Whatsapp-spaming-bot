var message = prompt("Enter your message", "‎");
var time = prompt("When to send?", "MM/DD/YYYY XX:XX:XX AM");
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];

async function sendMessage() {
    textbox.innerHTML = message;
    textbox.dispatchEvent(event);
    document.getElementsByClassName("_4sWnG")[0].click();
}

var timeIsBeing936 = new Date(time).getTime(),
  currentTime = new Date().getTime(),
  subtractMilliSecondsValue = timeIsBeing936 - currentTime;
setTimeout(sendMessage, subtractMilliSecondsValue);