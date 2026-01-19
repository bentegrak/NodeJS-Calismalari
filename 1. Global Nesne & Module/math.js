/*************************************************
 * NODE.JS GLOBAL & MODULE MANTIĞI – ÖRNEK KOD
 *************************************************/


/*
  🔹 GLOBAL DEĞİŞKEN
  global ile tanımlanan değişken,
  uygulamadaki TÜM dosyalardan erişilebilir.
  Ama büyük projelerde KAOS yarattığı için önerilmez.
*/
global.appName = "My Node Application";


/*
  🔹 MODULE SCOPE
  Bu değişken SADECE bu dosyada geçerlidir.
  Node.js her dosyayı ayrı bir module olarak çalıştırır.
*/
const version = "1.0.0";


/*
  🔹 FONKSİYON TANIMI
  Bu fonksiyon sadece export edilirse
  başka dosyalardan kullanılabilir.
*/
function topla(a, b) {
    return a + b;
}


/*
  🔹 MODULE EXPORT
  Burada neyi export edersek,
  başka dosyalar SADECE ona erişebilir.
*/
module.exports = {
    topla,
    version
};
