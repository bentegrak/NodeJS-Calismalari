/*************************************************
 * NODE.JS PATH MODÜLÜ
 *************************************************/

/*
  path modülü:
  - Dosya ve klasör YOLLARI ile çalışmak için kullanılır
  - İşletim sisteminden BAĞIMSIZ çalışır
  - Windows (\) – Linux/Mac (/) farkını düşünmez
*/

const path = require("path");


/* =================================================
   path.basename()
   -------------------------------------------------
   Verilen yolun sadece DOSYA adını döndürür
   ================================================= */

const dosyaYolu = "C:/Users/furkan/Desktop/app.js";

// Dosya adını alır
console.log(path.basename(dosyaYolu));
// ÇIKTI: app.js



/* =================================================
   path.dirname()
   -------------------------------------------------
   Verilen yolun sadece KLASÖR kısmını döndürür
   ================================================= */

console.log(path.dirname(dosyaYolu));
// ÇIKTI: C:/Users/furkan/Desktop



/* =================================================
   path.extname()
   -------------------------------------------------
   Dosyanın uzantısını döndürür
   ================================================= */

console.log(path.extname(dosyaYolu));
// ÇIKTI: .js



/* =================================================
   path.parse()
   -------------------------------------------------
   Dosya yolunu parçalara ayırır
   ================================================= */

const parcalanmis = path.parse(dosyaYolu);

console.log(parcalanmis);
/*
  {
    root: 'C:/',
    dir: 'C:/Users/furkan/Desktop',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  }
*/



/* =================================================
   path.join()
   -------------------------------------------------
   Güvenli şekilde yol birleştirir
   ================================================= */

/*
  ASLA string ile yol birleştirme:
  ❌ "C:/Users/" + "furkan" + "/Desktop"

  Bunun yerine path.join kullanılır
*/

const yeniYol = path.join("C:", "Users", "furkan", "Desktop", "app.js");

console.log(yeniYol);
// Windows: C:\Users\furkan\Desktop\app.js
// Linux : C:/Users/furkan/Desktop/app.js



/* =================================================
   path.resolve()
   -------------------------------------------------
   Verilen yolu ABSOLUTE PATH haline getirir
   ================================================= */

/*
  resolve:
  - Baştan sona tam yol üretir
  - En sağdaki dosyayı baz alır
*/

const absoluteYol = path.resolve("src", "controllers", "user.js");

console.log(absoluteYol);
// ÇIKTI: C:\...\src\controllers\user.js



/* =================================================
   __dirname ile path.join (EN ÇOK KULLANILAN)
   ================================================= */

/*
  __dirname:
  - Dosyanın bulunduğu klasörü verir
  - Gerçek projelerde ALTIN kombinasyon
*/

const dosyaTamYolu = path.join(__dirname, "data", "users.json");

console.log(dosyaTamYolu);



/* =================================================
   HIZLI ÖZET
   ================================================= */

/*
  path.basename() → dosya adı
  path.dirname()  → klasör yolu
  path.extname()  → uzantı
  path.parse()    → tüm parçalar
  path.join()     → güvenli yol birleştirme
  path.resolve()  → absolute path üretir

  GERÇEK HAYATTA:
  __dirname + path.join = vazgeçilmez
*/
