// function masukan(){
//     var n = document.forms['bolot']['nama'].value;
//     var c = document.forms['bolot']['tempat'].value;
//     var e = document.forms['bolot']['email'].value;
//     var p = document.forms['bolot']['JK'].value;
//     var o = document.forms['bolot']['hobby'].value;
//     var a = document.forms['bolot']['alamat'].value;        
                                            
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
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var tanggal

today = mm + dd + yyyy;
tanggal = document.getElementById("daftar").value = "";
// document.write(today);
}