function cancelRegistration() {

    let studentName = document.getElementById("studentName").value;
    let eventName = document.getElementById("eventName").value;
    let message = document.getElementById("message");

    if (studentName == "" || eventName == "") {
        message.innerHTML = "Please enter all details.";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
        "Registration for " + eventName +
        " has been cancelled successfully.";

    message.style.color = "green";

    document.getElementById("studentName").value = "";
    document.getElementById("eventName").value = "";
}