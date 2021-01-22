let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
let headers = document.querySelectorAll("h1,h3");
console.log(headers);

paragraphs.forEach(element => {
    element.innerHTML = "Text in all paragraphs is changed !!! ";
});

headers.forEach(element => {
    element.innerHTML = "Text to all headers is changed !!!";
});