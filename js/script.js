const accountType = document.getElementById("accountType");
const idLabel = document.getElementById("idLabel");
const userID = document.getElementById("userID");
const codeLabel = document.getElementById("codeLabel");
const usercode = document.getElementById("usercode");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

function changeLoginFields() {

    if (accountType.value === "staff") {

        idLabel.textContent = "Staff ID:";
        userID.placeholder = "Enter your staff ID";

        codeLabel.textContent = "Employee Code:";
        usercode.placeholder = "Enter your employee code";

    } else {

        idLabel.textContent = "Unit Number:";
        userID.placeholder = "Enter your unit number";

        codeLabel.textContent = "Resident Code:";
        usercode.placeholder = "Enter your resident code";

    }

    userID.value = "";
    usercode.value = "";
    errorMessage.textContent = "";
}

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const selectedAccount = accountType.value;
    const id = userID.value.trim();
    const code = usercode.value.trim();
    const password = document.getElementById("password").value.trim();

    if (id === "" || code === "" || password === "") {

        errorMessage.textContent = "Please complete all fields.";

    } else {

        errorMessage.textContent = "Login submitted successfully! Account Type: " +  selectedAccount;

    }

});
