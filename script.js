var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function input_length() {
    return input.value.length > 0; 
}

var i = 0; 

function create_item(){
    i++;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.setAttribute("id", "item" + i + "");
    li.setAttribute("onclick", "remove(this)");
    input.value = "";
    var key = localStorage.key(i);
    var value = localStorage[key];
}

button.addEventListener("click", function() {
    if (input_length()){
        create_item();
    }
})

input.addEventListener("keypress", function(event) {
    if (input_length()&& event.key === "Enter"){
        create_item();
    }
})

function remove(el) {
    var element = el;
    element.remove();
}

// Color Selector

var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function set_background(){
    body.style.background = 
    "linear-gradient(to right, " 
    + col1.value 
    + ", "
    + col2.value 
    + ")";
}

col1.addEventListener("input", set_background);
col2.addEventListener("input", set_background);
