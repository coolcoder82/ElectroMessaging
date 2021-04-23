  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWrO9UQD1r1KvZ3gU2sQ-ckismwjnRl2M",
    authDomain: "electromessaing.firebaseapp.com",
    projectId: "electromessaing",
    storageBucket: "electromessaing.appspot.com",
    messagingSenderId: "55162417851",
    appId: "1:55162417851:web:63373a551f31f2b7372f9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();