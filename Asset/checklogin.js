// document.getElementById("judul").innerText="form login";
// document.getElementById("judul").style.color
// document.getElementsByTagName("h1")[0].innerHTML="Konlot";
// document.getElementsByClassName("title")[0].innerHTML="BLOC";
// document.getElementById("username").value ="Fero";
// document.getElementById("pass").value ="12345678";

let userlog,passlog;
userlog = "Fero";
passlog = "1234";

function checklogin(){
    // let pesan = "wowkowko";
    let username,password;
    username = document.getElementById("username").value;
    password = document.getElementById("pass").value;
    alert("proses cek login : "+ username + " - " + password);
    pesan("Login Berhasil, ",username);
    clear();
}
function pesan(msg, user){
    alert(msg + user);
}
function clear(){
    username = document.getElementById("username").value= "";
    password = document.getElementById("pass").value= "";
}