/*************************************************
 * NODE.JS FILE SYSTEM (fs) MODÜLÜ
 *************************************************/

/*
  fs modülü:
  - Dosya OKUMA
  - Dosya YAZMA
  - Dosya SİLME
  - Klasör işlemleri
  için kullanılır
*/

const fs = require("fs");
const path = require("path");


/* =================================================
   DOSYA YOLU (EN GÜVENLİ KULLANIM)
   ================================================= */

/*
  __dirname:
  - Bu dosyanın bulunduğu klasörü verir

  path.join:
  - İşletim sisteminden bağımsız yol oluşturur
*/

const dosyaYolu = path.join(__dirname, "data", "example.txt");



/* =================================================
   DOSYA OKUMA – SENKRON
   -------------------------------------------------
   Kod BURADA BEKLER (blocking)
   Küçük işler için kullanılır
   ================================================= */

const veri = fs.readFileSync(dosyaYolu, "utf-8");

console.log(veri);



/* =================================================
   DOSYA OKUMA – ASENKRON
   -------------------------------------------------
   Kod BEKLEMEZ (non-blocking)
   Node.js felsefesi budur
   ================================================= */

fs.readFile(dosyaYolu, "utf-8", (err, data) => {
    if (err) {
        console.log("Dosya okunamadı ❌");
        return;
    }

    console.log("Dosya içeriği:", data);
});



/* =================================================
   DOSYA YAZMA – SENKRON
   ================================================= */

fs.writeFileSync(dosyaYolu, "Merhaba Çeto 👋");



/* =================================================
   DOSYA YAZMA – ASENKRON
   ================================================= */

fs.writeFile(dosyaYolu, "Node.js fs modülü", (err) => {
    if (err) {
        console.log("Dosya yazılamadı ❌");
        return;
    }

    console.log("Dosya başarıyla yazıldı ✅");
});



/* =================================================
   DOSYA EKLEME (APPEND)
   ================================================= */

fs.appendFile(dosyaYolu, "\nYeni satır eklendi.", (err) => {
    if (err) {
        console.log("Ekleme başarısız ❌");
    }
});



/* =================================================
   DOSYA SİLME
   ================================================= */

fs.unlink(dosyaYolu, (err) => {
    if (err) {
        console.log("Dosya silinemedi ❌");
        return;
    }

    console.log("Dosya silindi 🗑️");
});



/* =================================================
   KLASÖR OLUŞTURMA
   ================================================= */

const klasorYolu = path.join(__dirname, "data");

if (!fs.existsSync(klasorYolu)) {
    fs.mkdirSync(klasorYolu);
}



/* =================================================
   KLASÖR OKUMA
   ================================================= */

fs.readdir(klasorYolu, (err, files) => {
    if (err) return;

    console.log("Klasördeki dosyalar:", files);
});



/* =================================================
   SENKRON vs ASENKRON (ÇOK SORULUR)
   ================================================= */

/*
  readFileSync  → Kod durur, bekler
  readFile      → Kod akmaya devam eder

  Node.js:
  - Asenkronu sever
  - Senkronu mecbur kalmadıkça sevmez
*/



/* =================================================
   SINAVLIK ÖZET
   ================================================= */

/*
  fs.readFile()      → Dosya oku (async)
  fs.writeFile()     → Dosya yaz (async)
  fs.appendFile()    → Dosyaya ekle
  fs.unlink()        → Dosya sil
  fs.mkdir()         → Klasör oluştur
  fs.readdir()       → Klasör oku

  GERÇEK PROJE:
  fs + path + __dirname = vazgeçilmez üçlü
*/
