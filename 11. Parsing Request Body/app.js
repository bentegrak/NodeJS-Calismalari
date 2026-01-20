/*************************************************
 * KONU: PARSING REQUEST BODY (NODE.JS)
 *************************************************/

/*
  Request body:
  - Client'ın server'a GÖNDERDİĞİ VERİDİR
  - Genelde POST / PUT isteklerinde gelir
  - JSON, form-data, text olabilir

  ÖNEMLİ:
  Node.js body'yi TEK PARÇA vermez
  Parça parça (chunk) gönderir
*/

const http = require("http");

const server = http.createServer((req, res) => {

    /*
      Sadece POST isteğini yakalıyoruz
    */
    if (req.method === "POST" && req.url === "/login") {

        let body = "";

        /*
          data event'i:
          - Body parça parça gelir
          - Her parça body değişkenine eklenir
        */
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        /*
          end event'i:
          - Tüm body geldi
          - Artık parse edebiliriz
        */
        req.on("end", () => {

            /*
              Body genelde STRING gelir
              JSON gönderildiyse parse etmek gerekir
            */
            const parsedBody = JSON.parse(body);

            console.log(parsedBody);
            console.log(parsedBody.username);
            console.log(parsedBody.password);

            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Request body alındı ve parse edildi ✅");
        });

        return;
    }

    /*
      POST dışında bir istek gelirse
    */
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Route bulunamadı");
});

server.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});
