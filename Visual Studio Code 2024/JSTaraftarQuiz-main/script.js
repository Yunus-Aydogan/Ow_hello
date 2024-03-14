//Veri havuzu
const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png",sampiyonluk: 14 , stad:"İnönü" , HangiYil:"1903"},
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" ,sampiyonluk: 19,stad:"Saraçoğlu" , HangiYil:"1907"},
    { ad: "GALATASARAY", src: "images/galatasaray.png", sampiyonluk: 23,stad:"Ali Sami Yen" , HangiYil:"1905"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png", sampiyonluk: 7, stad:"Avni Aker" , HangiYil:"1967" },
];

//Sık kullanılan HTML nesneleri
const takim=document.getElementById("takim");
const btnBasla=document.getElementById("btnBasla");
const soru=document.getElementById("soru");
const secenekler=document.getElementById("secenekler");
const sonuc=document.getElementById("sonuc");

//Olay yakalyıcı
btnBasla.addEventListener("click",yaris);


// Soruların bulunduğu bir dizi
const sorular = [
    "Kaç kez şampiyon olmuştur?",
    "Hangi stadı kullanmaktadır?",
    "Hangi yılda kurulmuştur?",
    // İsterseniz daha fazla soru ekleyebilirsiniz
];

//Fonksiyon tanımı
function yaris(){
    soru.innerHTML="";
    secenekler.innerHTML="";

    // Rastgele bir takım seçme
    let rastgeleTakimIndex = Math.floor(Math.random() * takimlar.length);
    let rastgeleTakim = takimlar[rastgeleTakimIndex];
    
     // Rastgele bir soru seçme
     let rastgeleSoruIndex = Math.floor(Math.random() * sorular.length);
     let rastgeleSoru = sorular[rastgeleSoruIndex];
 
     takim.src = rastgeleTakim.src;
     soru.innerHTML = rastgeleTakim.ad + " " + rastgeleSoru;

 // Doğru cevabı al
 let dogruCevap;
 switch(rastgeleSoruIndex) {
     case 0: // "kaç kez şampiyon olmuştur?" sorusu
         dogruCevap = rastgeleTakim.sampiyonluk;
         break;
     case 1: // "hangi stadı kullanmaktadır?" sorusu
         dogruCevap = rastgeleTakim.stad;
         break;
     case 2: // "hangi yıl kurulmuştur?" sorusu
         // Örnek olarak bir tarih belirtilebilir
         dogruCevap = rastgeleTakim.HangiYil;
         break;
     // İsterseniz diğer sorular için de doğru cevapları ekleyebilirsiniz
 }


    
  // Cevap seçeneklerini döngü ile oluşturma
  for (let i = 0; i < 4; i++) {
    const secenek = document.createElement("button");
    secenekler.appendChild(secenek);
    secenek.setAttribute("id", "secenek" + (i + 1));
    secenek.classList.add("secenek");
    // Doğru cevapları butonlara yerleştirme
    secenek.innerHTML = i === 0 ? dogruCevap : rastgeleCevap(); // İlk butona doğru cevabı yerleştirme, diğer butonlara rastgele cevaplar
    secenek.addEventListener("click", function() {
        if (secenek.innerHTML === dogruCevap) {
            sonuc.innerHTML = "Tebrikler, doğru cevap!";
        } else {
            sonuc.innerHTML = "Maalesef, yanlış cevap!";
        }
        btnBasla.disabled = false;
    });
}

    // Rastgele cevaplar oluşturma
    function rastgeleCevap() {
        let rastgeleCevap;
        switch(rastgeleSoruIndex) {
            case 0: // "kaç kez şampiyon olmuştur?" sorusu için rastgele sayı oluşturma
                rastgeleCevap = Math.floor(Math.random() * 30); // Örnek olarak 0-30 arası rastgele bir sayı
                break;
            case 1: // "hangi stadı kullanmaktadır?" sorusu için rastgele bir stad seçme
                rastgeleCevap = takimlar[Math.floor(Math.random() * takimlar.length)].stad;
                break;
            case 2: // "hangi yıl kurulmuştur?" sorusu için rastgele bir tarih seçme
                rastgeleCevap = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900; // Örnek olarak 1900-2023 arası rastgele bir yıl
                break;
            // İsterseniz diğer sorular için de rastgele cevapları ekleyebilirsiniz
        }
        return rastgeleCevap;
    }
}

    // Cevap seçeneklerini karıştırma
    cevaplar = shuffle(cevaplar);

    // Cevap seçeneklerini ekrana ekleyen döngü
    for (let i = 0; i < cevaplar.length; i++) {
        const secenek = document.createElement("button");
        secenekler.appendChild(secenek);
        secenek.setAttribute("id", "secenek" + (i + 1));
        secenek.classList.add("secenek");
        secenek.innerHTML = cevaplar[i];

        secenek.addEventListener("click", function() {
            if (parseInt(secenek.innerHTML) === takimlar[rastgeleTakim].sampiyonluk) {
                sonuc.innerHTML = "Tebrikler, doğru cevap!";
            } else {
                sonuc.innerHTML = "Maalesef, yanlış cevap!";
            }
            btnBasla.disabled = false;
        });
    }


// Diziyi karıştıran fonksiyon
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}