// let i=10;
// do{
//     console.log(i);
//     i--;
// }while(i>1);

// for(let i=1; i<=10; i++){
//     if(i %2==0){
//         if(i == 2){
//             document.write("Bilangan genap : ")
//         }
//         document.write(i+ ", ");
//     }
// }

// let menu = ["Kalkulator","Pertandingan Bola","Pendaftaran"];
// let jumlah = menu.length;
// for(let i=0;i < jumlah;i++){
//     console.log(menu[i])
// }
function Menghitung(){
    let nilai1,nilai2,operator,hasil_akhir;    
    nilai1 = document.getElementById("Nilai-1").value;
    nilai2 = document.getElementById("Nilai-2").value;
    operator = document.getElementById("operator").value
    if(nilai1 == "" || nilai1 == null) {
        alert("nilai-1 belum diisi");
    }else if(nilai2 == "" || nilai2 == null){
        alert("nilai-2 Belum diisi");
    }else if (operator == "" || operator == null){
        alert("Operator Belum diisi");
    }else{
        // alert(nilai1+", "+nilai2);
        // alert(operator);
        hasil_akhir = hasil(nilai1, nilai2, operator);
        // alert(Math.round(hasil_akhir));
        document.getElementById("hasilkalkulator").innerHTML = "hasil Perhitungan : "+ Math.round(hasil_akhir);
        document.getElementById("hasilkalkulator").style.display = "inline";
        document.getElementById("oke").innerHTML = '<i class="spinner-border"></i> Proses';
    }
}
function hilang(){
    document.getElementById("hasilkalkulator").style.display = "none";
    document.getElementById("oke").innerHTML = '<i class="bi bi-save"></i> Proses';
}
function hasil(nil1, nil2, oper){
    let hasil_hitung = 0;
    if(oper == "+"){
        hasil_hitung = parseInt(nil1) + parseInt(nil2);
    } else if(oper == "-"){
        hasil_hitung = nil1 - nil2;
    } else if (oper == "/"){
        hasil_hitung = nil1 / nil2;
    } else if(oper == "*"){
        hasil_hitung = nil1 * nil2;
    }
    return hasil_hitung;
}
// for(let i=5; i<=30; i++){
    
    // if(i %5==0){ 
    //     if(i == 20){
    //         document.write("kemarin tgl ")
    //     }if(i == 25){
    //         document.write(" 4 hari lagi tgl ")
    //     }     
    //     document.write(i+", ")
    // }


// let ni, nama;
// nama = "Dina";
// ni = 80;

// if(ni >= 85 && ni <=100){
//     document.write("Nilai "+nama+" "+ ni+ ", grade A");
// }else if(ni >= 75){
//     document.write("Nilai "+nama+" "+ ni+ ", grade B");
// }else if(ni >= 60){
//     document.write("Nilai "+nama+" "+ ni+ ", grade C");
// }else {
//     document.write("Nilai "+nama+" "+ ni+ ", grade E");
// }

// let nama = ["dzaky" , "syarif" , "daud" , "fero"];
// let text= "";
// let i;
// for (i = 0; i < nama.length; i++) {
    
//     if(text == "syarif" || text== "fero"){
//         text += nama[i] +", ";
//     }else {
        
//         text += nama[i] + "(asal surabaya), ";
//     }
//     document.write(text);

//    } 
