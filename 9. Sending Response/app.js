/*************************************************
 * KONU: SENDING RESPONSE (RESPONSE GÖNDERME)
 *
 * Bu örnekte:
 * - Node.js http modülü ile server oluşturuyoruz
 * - Client'tan gelen isteğe response (cevap) gönderiyoruz
 * - HTML dosyasını okuyup client'a yolluyoruz
 *************************************************/

const http = require("http"); // HTTP server kurmak için
const fs = require("fs");     // Dosya sistemi işlemleri için
const path = require("path"); // Dosya yolu problemlerini önlemek için


/*
  createServer:
  - Client'tan gelen HER istek burada yakalanır
  - req  → request (istek bilgileri)
  - res  → response (cevap nesnesi)
*/
const server = http.createServer((req, res) => {

    /*
      fs.readFile:
      - index.html dosyasını okumaya çalışıyoruz
      - Amaç: Dosya varsa client'a göndermek
    */
    fs.readFile(path.join(__dirname, "index.html"), (error, file) => {

        /*
          Eğer dosya bulunamazsa:
          - 404 Not Found döndür
          - Plain text cevap gönder
        */
        if (error) {
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.statusCode = 404;

            // Response gönderilir ve işlem BİTER
            return res.end("Dosya Bulunamadi");
        }

        /*
          Eğer dosya başarıyla okunursa:
          - Content-Type HTML olarak ayarlanır
          - 200 OK status kodu döndürülür
          - HTML dosyası client'a gönderilir
        */
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.statusCode = 200;

        // HTML içeriği response olarak gönderilir
        res.end(file);
    });
});


/*
  listen:
  - Server'ı belirtilen portta ayağa kaldırır
  - Tarayıcıdan bu porta gelen istekler dinlenir
*/
server.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});


/*************************************************
 * ÖZET 
 *
 * - Request (req): Client'tan gelen istek
 * - Response (res): Server'ın verdiği cevap
 *
 * Sending Response konusu:
 * - res.setHeader() → Cevabın tipi
 * - res.statusCode → Durum kodu (200, 404)
 * - res.end()      → Cevabı gönder ve bitir
 *
 * NOT:
 * res.end() çağrıldıktan sonra
 * response kapanır, tekrar yazılamaz
 *************************************************/
