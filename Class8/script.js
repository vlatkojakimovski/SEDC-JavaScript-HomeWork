let nameAnimal = document.getElementById("name");
let kind = document.getElementById("kind");
let submitBtn = document.getElementById("submitBtn");
let animalList = document.getElementById("animalList");

function Animal(nameAnimal, kind, speak) {
    this.nameAnimal = nameAnimal;
    this.kind = kind;
    this.speak = function () {
        return `${this.kind} says: Hey bro!!!`;
    };
}

submitBtn.addEventListener("click", function () {
    if (nameAnimal.value !== "" && kind.value !== "") {
        let animal1 = new Animal(nameAnimal.value, kind.value);
        animalList.innerHTML +=  `<li>${animal1.speak()}</li>`
    } else {
        alert("Please fill the fields Animal name and Animal kind !!!");
    }
    clear();
});


function clear() {
    nameAnimal.value = '';
    kind.value = '';
}