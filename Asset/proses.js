console.log('Helloo javascript');
document.write("Belajar Javascript Mudah!");
var nama = "Fero ezar";
nama = "wokowkowowkowo";
let alamat = "surabaya";
alamat = "menganti";
const no_telp = "09821293203929038";
document.write("<br/>"+ nama);
document.write("<br/>"+ alamat +", telp."+ no_telp);

let mhs = ["Daud", "Syarif","Fero", "Dzaky"];
document.write("<br/>nama saya : "+ mhs[2]);
let rekap = { nama: "Fero", asal: "Surabaya", nilai: 90};
document.write("<br/>"+ rekap.nama, "<br/>"+ rekap.asal, "<br/>"+ rekap.nilai);

// -----------------------------------another------------------------------------------------

let jumlah, nilai1, nilai2, x,y;

nilai1 = 90;
nilai2 = 60;


document.write("<br/>Hasil penjumlahan: "+ nilai1 * nilai2);
jumlah = nilai1 * nilai2;
document.write("<br/>Hasil perkalian: "+ jumlah);
jumlah = nilai1 - nilai2;
document.write("<br/>Hasil pengurangan: "+ jumlah);
jumlah = nilai1 / nilai2;
document.write("<br/>Hasil pengurangan: "+ jumlah);
jumlah = nilai1 ** nilai2;
document.write("<br/>Hasil Pangkat: "+ jumlah);
jumlah = nilai1 % nilai2;
document.write("<br/>Hasil Sisa Bagi: "+ jumlah);

rement = nilai1++;
rement++;
document.write("<br/>Hasil increment: "+ rement);
rement--;
document.write("<br/>Hasil decrement: "+ rement);
document.write("<hr/>");
x = 10;
y = 5;

document.write("<br/>"+ (x+=y));
document.write("<br/>"+ (x-=y));
document.write("<br/>"+ (x/=y));
document.write("<br/>"+ (x*=y));
document.write("<br/>"+ (x*=y));
document.write("<br/>"+ (x%=y));
document.write("<br/>"+ (x**=y));
document.write("<br/>"+ (300 % 2));
let harga = 200;
harga = 100;
document.write(harga);