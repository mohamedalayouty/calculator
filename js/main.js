var input = document.querySelector(".input");
var buttonIn = document.querySelectorAll(".buttonIn");
var buttonEqaul = document.querySelector(".buttonEqaul");
var buttonRemoveAll = document.querySelector(".buttonRemoveAll");
var buttonRemoveLastElement = document.querySelector(".buttonRemoveLastElement");

// show
buttonIn.forEach((x) => {
    x.addEventListener("click", (y) => {
            input.value += y.target.innerHTML;
    })
});

// removeall
buttonRemoveAll.addEventListener("click", () => {
    input.value = "";
})

// remove last element
buttonRemoveLastElement.addEventListener("click", () => {
    var str = input.value
    var arr = str.split("");
    var t = arr.pop();
    var z = arr.join("");
    input.value = z;
})

// equal
buttonEqaul.addEventListener("click", () => {
    if(input.value === "" || input.value[0] === "+" || input.value[0] === "-" ||
    input.value[0] === "*" || input.value[0] === "/") {
        input.value !== undefined;
    }else {
        input.value = eval(input.value);
    }
})