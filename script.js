function buyuk_olani_bul() {
    var sayi1 = Number(document.getElementById('sayi1').value);
    var sayi2 = Number(document.getElementById('sayi2').value);
    var sonuc = document.getElementById('sonuc');

    if (sayi1 > sayi2) {
        sonuc.value = ("Sayı1 :) " + sayi1 + " Daha Büyük");
    } else if (sayi1 < sayi2) {
        sonuc.value = ("Sayı2 :) " + sayi2 + " Daha Büyük");
    } else {
        sonuc.value = ("Eşit");
    }
}
function vize_final_hesapla(){
    var vize = Number(document.getElementById('vize').value);
    var final = Number(document.getElementById('final').value);
    var sonuc = document.getElementById('sonuc');
    var ortalama = vize * 0.40 + final * 0.60;
    if(ortalama  >= 60){
        sonuc.value = ("Ort: "+ortalama+" Öğrenci Geçti");
        sonuc.style.color = "green";
    }else{
        sonuc.value = ("Ort: "+ortalama+" Öğrenci Geçemedi");
        sonuc.style.color = "red";
    }
}
function pozitif_negatif_bulma(){
    var sayi = Number(document.getElementById('sayi').value);
    var sonuc = document.getElementById('sonuc');
    if(sayi > 0){
        sonuc.value = (sayi+" Sayı Pozitiftir");
    }else if(sayi < 0){
        sonuc.value = (sayi+" Sayı Negatiftir");
    }else{
        sonuc.value = (sayi+" Sayı Sıfırdır");
    }
}
function on_kere_yaz(){
    test="";
    for(var i = 1; i <= 10; i++){
        test += "berat"+"<br>"
        document.getElementById('sonuc').innerHTML = test;
    }
}