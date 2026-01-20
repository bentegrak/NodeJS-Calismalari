/*************************************************
 * EN BASİT NODE.JS ÖRNEĞİ
 * KONU: REQUEST – ROUTING – RESPONSE
 *************************************************/

/*
  1️⃣ http modülünü alıyoruz
  → Bu modül sayesinde server açabiliyoruz
*/
const http = require("http");


/*
  2️⃣ Server oluşturuyoruz
  → Tarayıcıdan gelen HER istek buraya düşer
*/
const server = http.createServer((req, res) => {

    /*
      3️⃣ Gelen isteğe bakıyoruz
      → Kullanıcı ne istiyor?
    */

    // Eğer kullanıcı /selam adresine geldiyse
    if (req.url === "/selam" && req.method === "GET") {

        /*
          4️⃣ CEVAP HAZIRLA
          → Ben bu isteğe ne döneceğim?
        */

        // Cevabın tipi: düz yazı
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

        // Cevabı gönder ve bitir
        res.end("Selam Çeto 👋");
        return;
    }

    /*
      5️⃣ Eğer başka bir adres isterse
      → Bulunamadı cevabı döneriz
    */
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Sayfa yok");
});


/*
  6️⃣ Server'ı ayağa kaldırıyoruz
*/
server.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});
