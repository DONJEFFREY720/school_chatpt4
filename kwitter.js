function login(){
     user=document.getElementById("USER11").value;
     localStorage.setItem("user",user)
     document.getElementById("USER11").value=""
     window.location="kwitter_room.html"

}