// function masukan(){
//     var n = document.forms['form']['nama'].value;
//     var c = document.forms['form']['tempat'].value;
//     var e = document.forms['form']['email'].value;
//     var p = document.forms['form']['JK'].value;
//     var o = document.forms['form']['hobby'].value;
//     var a = document.forms['form']['alamat'].value;        
                                            
//     var tabel = document.getElementById("databel");
//     var baris = tabel.insertRow(1);
//     var kol1 = baris.insertCell(0);
//     var kol2 = baris.insertCell(1);
//     var kol3 = baris.insertCell(2);
//     var kol4 = baris.insertCell(3);
//     var kol5 = baris.insertCell(4);
//     var kol6 = baris.insertCell(5);
               
//     kol1.innerHTML = n;
//     kol2.innerHTML = c;
//     kol3.innerHTML = e;
//     kol4.innerHTML = p;
//     kol5.innerHTML = o;
//     kol6.innerHTML = a;
// }
// document.write("");

// function tanggalran()
// {
//     let tanggal,bulan,tahun, date;
//     date = new date();

//     tahun = date.getFullYear();
//     bulan = date.getMonth();
//     tanggal = date.getdate();
    
//     document.write(tahun+bulan+tanggal);
//     // tanggal = document.getElementById("daftar").value = "MHS+tahun + bulan + tanggal"
// }
function tanggalran(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let daftar

    today = mm + dd + yyyy;
    daftar = document.getElementById("daftar").value = "MHS"+today;
// document.write(today);
}

document.getElementById("formdaftar").onload = function(){
    tanggalran();
}
document.getElementById("oke").onclick = function(){
    let kode = document.getElementById("daftar").value;
    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tglahir = document.getElementById("tglahir").value;
    let surat = document.getElementById("email").value;
    let jk;
        if(document.getElementById("LK").checked == true)
            jk = "Laki-Laki";
        if(document.getElementById("PR").checked == true)
            jk = "Perumpuan";

    let hobby1 ="", hobby2 = "", hobby3 = "", hobby4 = "", hobby5 = "", hobby6 = "";
        if(document.getElementById("1a").checked == true)
            hobby1 = "Game";
        if(document.getElementById("2a").checked == true)
            hobby2 = ", Tiduran";
        if(document.getElementById("3a").checked == true)
            hobby3 = ", Coding";
        if(document.getElementById("4a").checked == true)
            hobby4 = ", Gambar";
        if(document.getElementById("5a").checked == true)
            hobby5 = ", Olahraga";
        if(document.getElementById("6a").checked == true)
            hobby6 = ", Lainnya";
        
        let hobi = hobby1 + hobby2 + hobby3 + hobby4 + hobby5 + hobby6;       
    let alamat = document.getElementById("alamat").value;

    let datarows = "<tr>";
        datarows += "<td>" + kode + "</td>";
        datarows += "<td>" + nama + "</td>";
        datarows += "<td>" + tempat +","+ tglahir + "</td>";
        datarows += "<td>" + surat + "</td>";
        datarows += "<td>" + jk + "</td>";
        datarows += "<td>" + hobi + "</td>";
        datarows += "<td>" + alamat + "</td>";
    document.getElementById("row_tabel").innerHTML = datarows;
}
document.getElementById("nama").onchange = function(){
    let txtnama = document.getElementById("nama").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("nama").value = txtnama2;
};
document.getElementById("nama").onkeyup = function(){
    let txtnama = document.getElementById("nama").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("nama").value = txtnama2;
};
document.getElementById("tempat").onkeyup = function(){
    let txtnama = document.getElementById("tempat").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("tempat").value = txtnama2;
}