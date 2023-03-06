
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDMoGObDZ5pzkJ8kpUzhw0ZSYaCji1T4Eg",
  authDomain: "school-chat-4e8af.firebaseapp.com",
  databaseURL: "https://school-chat-4e8af-default-rtdb.firebaseio.com",
  projectId: "school-chat-4e8af",
  storageBucket: "school-chat-4e8af.appspot.com",
  messagingSenderId: "997603978614",
  appId: "1:997603978614:web:3103c665d1f07a34219e57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
       console.log("ROOM NAME - " + Room_names)
       row="<div class='room_name' id="+Room_names+"onclick='redirrect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>"
       document.getElementById("output").innerHTML +=row
 //End code
 });});}
getData();

user1=localStorage.getItem("user")
document.getElementById("username").innerHTML= "WELCOME"+"  "+user1+"!!"

function addRoom() {
new_room=document.getElementById("room_name").value
localStorage.setItem("room_name",new_room)
firebase.database().ref("/").child(new_room).update({
       purpose:"adding room name"
})
window.location="kwitter_page.html"

}

function redirrect_to_room_name(name){
 console.log(name)
 localStorage.setItem("ROOM NAMES",name)
 window.location="kwitter_page.html"
}

    function userNamez() {
      var user_Name =  localStorage.getItem("user")
      firebase.database().ref("/").child(localStorage.getItem("user")).update({
        USER: user_Name
   });
 }

 userNamez()



