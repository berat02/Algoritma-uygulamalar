function buyuk_olanı_bul(){
    var sayi1 = Number(document.getElementById('sayi1').value);
    var sayi2 = Number(document.getElementById('sayi2').value);
    var sonuc = document.getElementById('sonuc');

    if(sayi1 >sayi2){
        document.getElementById('sonuc').value ="Sayı1 :) "+sayi1+" Daha Büyük";
    }else if(sayi1<sayi2){
        document.getElementById('sonuc').value ="Sayı2 :) "+sayi2+" Daha Büyük";
    }else{
        document.getElementById('sonuc').value ="Eşit";
    }

}