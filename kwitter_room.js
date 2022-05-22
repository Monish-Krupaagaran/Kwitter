
var firebaseConfig = {
      apiKey: "AIzaSyBqqg38rqDVZASD00a6KB_jkA1IskEUMjs",
      authDomain: "kwitter-97026.firebaseapp.com",
      databaseURL: "https://kwitter-97026-default-rtdb.firebaseio.com",
      projectId: "kwitter-97026",
      storageBucket: "kwitter-97026.appspot.com",
      messagingSenderId: "376693848543",
      appId: "1:376693848543:web:43644e6afcbb6ebb432c6a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user")
document.getElementById("Monish").innerHTML=" Welcome "+ user_name + " ! "
function addroom() {
      room_name=document.getElementById("Room_Name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       row="<div class='room_name' id="+Room_names+" onclick='redirecttorooom(this.id)'># "+Room_names+"</div> <hr>"
       document.getElementById("output").innerHTML +=row

      //End code
      });});}
getData();

function redirecttorooom(name) {
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
