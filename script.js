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

