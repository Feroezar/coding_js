document.getElementById("kmenu").onkeyup = function(){
    let txtnama = document.getElementById("kmenu").value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById("kmenu").value = txtnama2;
};

document.getElementById("global1").onload = function(){
    let today = new Date();
    let dd = String(today.getDate());
    let yy = today.getFullYear();
    let tgl;

    today = dd + yy;
    tgl = document.getElementById('kode').value = "INV" + today + "001";
    pembayaran();
};

document.getElementById("btn").onclick = function(){
    let menu = document.getElementById('kmenu').value;

    let nama = document.getElementById('nm').value;

    combobox();
    
    let jb = document.getElementById('jb').value;

    let pembayaran;
        if(document.getElementById("tn").checked == true){
            pembayaran = "Tunai"}
        if(document.getElementById("ntn").checked == true){
            pembayaran = "Non-Tunai"}
        else{
            pembayaran = ""
            alert("wajib dipilih")
        }

    let harga = document.getElementById('harga').value;
    
    total(jb,harga); 
            
    document.getElementById('data1').innerHTML = menu;
    document.getElementById('data2').innerHTML = nama;
    document.getElementById('data4').innerHTML = jb
    document.getElementById('data7').innerHTML = pembayaran;
    document.getElementById("harga").value = harga
}

function combobox(){
    let jenis = document.getElementById('form1').jm.value;
        if(jenis ==  "Makanan"){
            document.getElementById('data3').innerHTML="Makanan";
        }
        if(jenis == "Minuman"){
            document.getElementById('data3').innerHTML="Minuman";
        }
        else if(jenis == "Snack"){
            document.getElementById('data3').innerHTML="Snack";
        }
}

function total(jb,harga){ 
    let diskon;  
    if(jb > 10){
        diskon = document.getElementById('data5').innerHTML = "2%";
    }else {
        diskon = document.getElementById('data5').innerHTML = "0%";
    } 
    if(diskon == "2%"){
        let first = (jb*harga)*2/100;
        let sc = (jb*harga)-first;
        document.getElementById('data6').innerHTML = sc;
    }
    else{
        first = (jb*harga);
        document.getElementById('data6').innerHTML = first;
    }
}

document.getElementById('nm').onchange = function(){
    let bs = document.getElementById('nm').value;
    let harga = document.getElementById('harga').value;
    if(bs == "bakso"){
        harga = 20000;
    }
    else if(bs == "mieayam"){
        harga = 30000;
    }
    else{
        harga = 10000;
    }
    document.getElementById("harga").value = harga;
}

document.getElementById("jb").onchange = function(){
    let harga = document.getElementById("harga").value;
    let jb = document.getElementById('jb').value;

    let total = harga * jb
    alert("Total harga = "+ total);
}

function pembayaran(){
    let carabayar = ["tunai","nonTunai"];
    let jenis = "";
    for (let i = 0; i <carabayar.length; i++){
        jenis += '<input class="form-check-input" type="radio" name="flexRadioDefault" id="'+carabayar[i]+'" value="Tunai" > <label class="form-check-label" for="flexRadioDefault2">'+carabayar[i]+'</label>'
    }
        document.getElementById('jenisbayar').innerHTML = jenis;
}