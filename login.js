function addUser()
{
    console.log("Recieved and Completely Understood!");

    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "letschat.html";
}
