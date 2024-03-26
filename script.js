var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var i = 0;

function inputLength() {
    return input.value.length > 0;
}

function createItem() {
    i++;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.setAttribute("id", "item" + i);
    li.setAttribute("onclick", "removeItem(this)");
    input.value = "";
}

button.addEventListener("click", function() {
    if (inputLength()) {
        createItem();
    }
});

input.addEventListener("keypress", function(event) {
    if (inputLength() && event.key === "Enter") {
        createItem();
    }
});

function removeItem(el) {
    el.remove();
}

// Color Selector

var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setBackground() {
    body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
}

col1.addEventListener("input", setBackground);
col2.addEventListener("input", setBackground);
