
  var firebaseConfig = {
    apiKey: "AIzaSyCIsgITzJ1G0n40piL4Gu4Hi9_ebTtTwIw",
    authDomain: "electromessaging201011.firebaseapp.com",
    databaseURL: "https://electromessaging201011-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "electromessaging201011",
    storageBucket: "electromessaging201011.appspot.com",
    messagingSenderId: "11688048386",
    appId: "1:11688048386:web:9220d7c861c5ba105d341b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username")

  document.getElementById("h3_username").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
    room_name= document.getElementById("tiroomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "index.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row
   });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function LogOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }