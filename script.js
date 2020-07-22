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
        debugger
    }
    document.getElementById('sonuc').innerHTML = test;
}
function tek_sayilari_yaz(){
    var test="";
    for(var i=0;i<=100;i++){
        if(!(i % 2) == 0){
            test += i+" ";
            document.getElementById("sonuc").innerHTML = test;
        }
    }
}
function fiyata_kdv_ekle(){
    var fiyat = Number(document.getElementById('fiyat').value);
    var sonuc = document.getElementById('sonuc');
    var kdv = fiyat * 1.18;

    sonuc.value = (kdv);
}
function hesapla(){
    var toplam = Number(document.getElementById('toplam').value);
    var ortalama = Number(document.getElementById('ortalama').value);
    var toplama = 0;
    var ortalama = 0;
    for(var i = 1; i <= 5 ; i++){
        toplama += i;
        ortalama +=i /5;

    }
    document.getElementById("toplam").innerHTML = toplama;
    document.getElementById("ortalama").innerHTML = ortalama;
}
function vergi_kar_hesapla(){
    var fiyat = Number(document.getElementById('fiyat').value);
    var vergi = Number(document.getElementById('vergi').value);
    var kar = Number(document.getElementById('kar').value);
    var satis_fiyat = fiyat =fiyat + (fiyat * vergi/100)+(fiyat * kar/100);

    document.getElementById("son-fiyat").innerHTML = satis_fiyat;
}
function vize_final_ortalama_hesapla(){
    var vize = Number(document.getElementById('vize').value);
    var final = Number(document.getElementById('final').value);
    var ortalama = ( vize * 30/100) + (final * 70/100);

    document.getElementById("ortalama").innerHTML = ortalama;
}
function ucgenin_alani_hesaplama(){
    var yukseklik_element = Number(document.getElementById('yukseklik').value);
    var taban_element = Number(document.getElementById('taban').value);
    var alan = (yukseklik_element * taban_element) /2;
    
    document.getElementById("sonuc").innerHTML = alan;
}
function gerilim_hesaplama(){
    var akım_element= Number(document.getElementById('akım').value);
    var direnc_element = Number(document.getElementById('direnc').value);
    var gerilim = akım_element * direnc_element;
    document.getElementById("sonuc").innerHTML = gerilim;
}