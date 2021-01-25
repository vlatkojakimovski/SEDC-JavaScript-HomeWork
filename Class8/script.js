let name = document.getElementById("name");
let kind = document.getElementById("kind");
let submitBtn = document.getElementById("submitBtn");

function Animal(name, kind, speak) {
    this.name = name;
    this.kind = kind;
    this.speak = function () {
        console.log(`${this.kind} says: Hey bro!!!`);
        return `${this.kind} says: Hey bro!!!`;
    };
}

submitBtn.addEventListener("click", function () {
    if (name.value !== "" && kind.value !== "") {
        let animal1 = new Animal(name.value, kind.value);
        console.log(animal1.kind);
        document.body.innerHTML += `<p>${animal1.speak()}</p>`;
    } else {
        alert("Please fill the fields Animal name and Animal kind !!!");
    }
});
