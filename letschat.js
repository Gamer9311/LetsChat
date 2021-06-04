var firebaseConfig = {
    apiKey: "AIzaSyAmq1sCo1NVj6DBzgw0MyiavtbTo8kSEjQ",
    authDomain: "letschat-letschat39.firebaseapp.com",
    databaseURL: "https://letschat-letschat39-default-rtdb.firebaseio.com",
    projectId: "letschat-letschat39",
    storageBucket: "letschat-letschat39.appspot.com",
    messagingSenderId: "607350358082",
    appId: "1:607350358082:web:821a15b345dcf619636ddb",
    measurementId: "G-79ZLGBXQKR"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom()
{
    room = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room).update({
        purpose : "Room Added!"
    });

    localStorage.setItem("room_name", room);

    window.location = "letschat_chat.html";
}

function getData()
{
    firebase.database().ref("/").on('value', function (snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot)
        {
            childKey = childSnapshot.key;

            Room_names = childKey;

            console.log("Room Name is " + Room_names);

            output = "<div class='room_name' id='" + Room_names + "' onclick='navigateToRoomName(this.id)'>#" + Room_names + " <br> <hr> </div>";

            document.getElementById("output").innerHTML += output;

        });
    });
}

getData();

function navigateToRoomName(room_name)
{
  console.log(room_name);

  localStorage.setItem("room_name", room_name);

  window.location = "letschat_chat.html";
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room-name");
    window.location = "index.html";
}
