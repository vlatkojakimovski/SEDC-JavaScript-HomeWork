// Elements for register form inputs
// register form
let userNameRegister = document.getElementById("userName");
let userPassRegister = document.getElementById("userPass");
let myBtnForRegister = document.getElementById("btnRegister");
// Login Form
let userNameLogin = document.getElementById("loginUser");
let userPassLogin = document.getElementById("loginPass");
let myBtnForLogin = document.getElementById("btnLogIn");
// Edit form
let editForm = document.getElementById("editForm");
let userNameEdit = document.getElementById("userEdit");
let userPassEdit = document.getElementById("passEdit");
let btnSaveEdit = document.getElementById("btnSave");
//List users
let listOfUsers = document.getElementById("listUsers");
// delete buttons on list users
let deleteButtons = document.querySelectorAll(".deleteUser");
// List user wrapper
let listUsersWrapper = document.getElementById("listUsersWrapper");

// Data
let userNameDataBase = [];

// Constructor user
function NewUser(userName, password, isAdmin) {
    this.userName = userName;
    this.password = password;
    this.isAdmin = isAdmin || false;
}

userNameDataBase.push(new NewUser("Vlatko", "Vlatko12322@", true));
userNameDataBase.push(new NewUser("Vlatko", "Vlatko123@", false));
userNameDataBase.push(new NewUser("Irena", "Vlatko123@", false));
userNameDataBase.push(new NewUser("John", "Vlatko123@", false));

// Create user object and add in user data base
function registerUser(username, password, isAdmin) {
    if (checkUser(userNameLogin, userPassLogin) !== "") {
        console.log( "The user with this credentials already exist, you can log in" );
    } else {
        let newUser = new NewUser(username, password, isAdmin);
        console.log(newUser);
        userNameDataBase.push(newUser);
        alert('User successfully created ');
    }
}

// Check if the password requirements are met
function CheckPassword(inputtxt) {
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
    if (regExPass.test(inputtxt.value)) {
        return true;
    } else {
        return false;
    }
}

//Register user button
myBtnForRegister.addEventListener("click", function () {
    if (
        userNameRegister.value !== "" &&
        userPassRegister !== "" &&
        CheckPassword(userPassRegister)
    ) {
        registerUser(userNameRegister.value, userPassRegister.value, false);
    }
});

// Toggle Login || Register
$(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

// Check if user exist in database and if the user is admin or not
function checkUser(uName, uPass) {
    let userExist = false;
    for (const element of userNameDataBase) {
        console.log(
            `USERNAMES: ${element.userName} = ${uName.value} PASS: ${element.password} = ${uPass.value} `
        );
        if ( element.userName === uName.value && element.password === uPass.value ) {
            userExist = true;
            // break;
            return element;
        }
    }
    return "";
}

// Login user button 
myBtnForLogin.addEventListener("click", function () {
    if (
        checkUser(userNameLogin, userPassLogin) !== "" &&
        checkUser(userNameLogin, userPassLogin).isAdmin === true
    ) {
        console.log("User successfuly loged in");
        listUsersWrapper.style.display = "block";
        listUsers();
    } else if (checkUser(userNameLogin, userPassLogin) !== "") {
        console.log("User successfuly loged in REGULAR");
        listUsersWrapper.style.display = "block";
        listUsersRegular(); 
    } else {
        console.log("You are not registered !");
    }
});

// List all users in DOM for ADMIN user
function listUsers() {
    let i = 1;
    listOfUsers.innerHTML = "";
    for (const element of userNameDataBase) {
        listOfUsers.innerHTML += `<li class="user" >${(i, element.userName)} | ${
            element.password
        } -  <button class="deleteUser" id="${i}" onclick="deleteFunction(id)" >Delete</button> 
          -  <button class="editUser" id="${i}" onclick="editFunction(id)" >Edit</button></li>`;
        i++;
    }
}

// List all users in DOM for REGULAR user
function listUsersRegular() {
    let i = 1;
    listOfUsers.innerHTML = "";
    for (const element of userNameDataBase) {
        console.log("LISTING !!!");
        listOfUsers.innerHTML += `<li class="user" >${(i, element.userName)} | ${element.password} </li>`;
        i++;
    }
}

// Delete specified user
function deleteFunction(id) {
    userNameDataBase.splice(id-1,1);
    listUsers();
}


// Edit user
let currentUserId = 0;
function editFunction(id){
    listUsersWrapper.style.display = "block";
    editForm.style.display = "block";
    userNameEdit.value = userNameDataBase[id-1].userName;
    userPassEdit.value = userNameDataBase[id-1].password;
    currentUserId = id-1;
}

btnSaveEdit.addEventListener('click', function(){
    if(CheckPassword(userPassEdit)){
        userNameDataBase[currentUserId].userName = userNameEdit.value;
        userNameDataBase[currentUserId].password = userPassEdit.value;
        listUsers();
        editForm.style.display = "none";
    }
})