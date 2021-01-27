let textInput = $("#textInput");
let colorInput = $("#colorInput");
let btn = $("#btn");

btn.click(function () {
    if (colorInput.val() !== "" && textInput.val() !== "") {
        if (isColor(colorInput.val())) {
            btn.after(
                `<h3 style="color: ${colorInput.val()} ;"> ${textInput.val()} </h3> `
            );
        } else {
            btn.after(
                `<h3 style="color: black ;"> The color that you entered is not valid !!! </h3> `
            );
        }
    } else {alert(`Please fill the fields for text and color !!!`);}
    clear();
});

function clear() {
    textInput.val("");
    colorInput.val("");
}

function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}
