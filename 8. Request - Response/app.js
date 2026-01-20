/*************************************************
 * REQUEST & RESPONSE MANTIĞI (NODE.JS)
 *************************************************/

const http = require("http");

/*
  REQUEST (req):
  - Client'tan (tarayıcı / postman) gelen İSTEK
  - "Ne istiyorsun?" sorusunun cevabı

  RESPONSE (res):
  - Server'ın verdiği CEVAP
  - "İstediğine karşılık ne döndüm?"
*/

const server = http.createServer((req, res) => {

    /* =======================
       REQUEST (req)
       ======================= */

    // HTTP metodu (GET, POST...)
    console.log(req.method);

    // İstenen adres (endpoint)
    console.log(req.url);

    // Tarayıcı bilgileri vs.
    console.log(req.headers);


    /* =======================
       RESPONSE (res)
       ======================= */

    /*
      writeHead:
      - Status code (200, 404...)
      - Header bilgileri
    */
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    /*
      end:
      - Client'a cevabı gönderir
      - Response'u BİTİRİR
      - Olmazsa tarayıcı bekler
    */
    res.end("İstek alındı, cevap gönderildi");
});


/*
  Server'ı ayağa kaldır
*/
server.listen(3000, () => {
    console.log("Server çalışıyor 🚀");
});
