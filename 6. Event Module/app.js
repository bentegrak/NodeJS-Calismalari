/*************************************************
 * NODE.JS EVENTS (EVENT) MODÜLÜ
 *************************************************/

/*
  events modülü:
  - OLAY (event) tabanlı çalışma sağlar
  - Node.js'in ASIL mantığı budur
  - Bir olay olur → tepki verilir
*/

const EventEmitter = require("events");


/* =================================================
   EVENT EMITTER OLUŞTURMA
   ================================================= */

/*
  EventEmitter:
  - Event üretir
  - Event dinler
*/

const myEmitter = new EventEmitter();



/* =================================================
   EVENT DİNLEME (listener)
   ================================================= */

/*
  .on():
  - Bir event gerçekleştiğinde çalışır
*/

myEmitter.on("login", () => {
    console.log("Kullanıcı giriş yaptı ✅");
});



/* =================================================
   EVENT TETİKLEME (emit)
   ================================================= */

/*
  .emit():
  - Event'i ÇALIŞTIRIR
*/

myEmitter.emit("login");



/* =================================================
   EVENT'E PARAMETRE GÖNDERME
   ================================================= */

myEmitter.on("message", (user, text) => {
    console.log(`${user} mesaj attı: ${text}`);
});

myEmitter.emit("message", "Furkan", "Selam Çeto 😎");



/* =================================================
   BİRDEN FAZLA DİNLEYİCİ
   ================================================= */

/*
  Aynı event'i birden fazla listener dinleyebilir
*/

myEmitter.on("order", () => {
    console.log("Sipariş alındı 🛒");
});

myEmitter.on("order", () => {
    console.log("Mail gönderildi 📧");
});

myEmitter.emit("order");



/* =================================================
   .once() – TEK SEFERLİK EVENT
   ================================================= */

/*
  .once():
  - Sadece 1 KERE çalışır
*/

myEmitter.once("connect", () => {
    console.log("İlk bağlantı kuruldu 🔗");
});

myEmitter.emit("connect");
myEmitter.emit("connect"); // BU ÇALIŞMAZ



/* =================================================
   EVENT SIRASI
   ================================================= */

/*
  Event'ler:
  - Senkron çalışır
  - emit edildiği anda listener'lar çalışır
*/



/* =================================================
   GERÇEK HAYAT ÖRNEĞİ
   ================================================= */

/*
  Node.js'te bir çok şey event'tir:
  - HTTP request geldi
  - Dosya okundu
  - Bağlantı kuruldu

  Event = "bir şey oldu"
  Listener = "ne yapacağım?"
*/



/* =================================================
   SINAVLIK ÖZET
   ================================================= */

/*
  on()   → Event dinler
  emit() → Event tetikler
  once() → Tek seferlik dinler

  EventEmitter = olay üretici
*/
