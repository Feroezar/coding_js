// document.getElementById("judul").innerText="form login";
// document.getElementById("judul").style.color
// document.getElementsByTagName("h1")[0].innerHTML="Konlot";
// document.getElementsByClassName("title")[0].innerHTML="BLOC";
// document.getElementById("username").value ="Fero";
// document.getElementById("pass").value ="12345678";

// const userlog,passlog;
const userlog = "Fero";
const passlog = "1234";

function checklogin(url){
    // let pesan = "wowkowko";
    let username,password;
    username = document.getElementById("username").value;
    password = document.getElementById("pass").value;
    if((userlog == username) && (passlog == password)){
        alert("login berhasil");
        window.location = url;
    }else{
        alert("Login gagal!!");
        clear();
    }
    if(username == userlog){
        alert("username berhasil!!");
    }else{
        alert("username salah!!");
        username = document.getElementById("username").value= "";
    }

    if(password == passlog){
        alert("password berhasil!!");
    }else{
        alert("Passward salah!!");
        password = document.getElementById("pass").value= "";
    }
    alert("proses cek login : "+ username + " - " + password);
    pesan("Login Berhasil, ",username);
 }

function pesan(msg, user){
    alert(msg + user);
}

function clear(){
    username = document.getElementById("username").value= "";
    password = document.getElementById("pass").value= "";
}

