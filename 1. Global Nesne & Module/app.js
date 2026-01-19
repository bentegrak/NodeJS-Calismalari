/*************************************************
 * MODULE KULLANIMI
 *************************************************/


/*
  🔹 REQUIRE
  math.js dosyasını buraya dahil eder.
  Node.js bu dosyayı bir kere çalıştırır
  ve sonucu cache'ler.
*/
const math = require("./math");


/*
  🔹 MODULE'DEN GELEN DEĞERLER
  Sadece module.exports ile açılanlar erişilebilir.
*/
console.log(math.topla(3, 4)); // 7
console.log(math.version);     // 1.0.0


/*
  🔹 GLOBAL DEĞİŞKEN KULLANIMI
  global.appName her dosyada erişilebilir.
  Ama bu kontrolsüz olduğu için önerilmez.
*/
console.log(global.appName);


// Global = Her yerden erişilir ama tehlikelidir
// Module = Sadece export edilen erişilir, güvenlidir
// Node.js = Her dosya ayrı bir module'dür
