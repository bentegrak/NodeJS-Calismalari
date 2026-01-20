/*************************************************
 * NODE.JS HTTP MODULE – GENEL KULLANIM
 *************************************************/

/*
  http modülü:
  - Server kurar
  - Tarayıcıdan gelen isteği alır
  - Cevap döner
*/

const http = require("http");


/*
  createServer:
  - req  → gelen istek (request)
  - res  → gidecek cevap (response)
*/
const server = http.createServer((req, res) => {

    /*
      req.method → GET / POST
      req.url    → endpoint (/, /users vs.)
    */
    if (req.method === "GET" && req.url === "/") {
        // Header + status code
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

        // Cevap gönder ve bitir
        res.end("Ana sayfa");
        return;
    }

    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

        // JSON cevap
        res.end(JSON.stringify({ users: ["Furkan", "Çeto"] }));
        return;
    }

    /*
      Hiçbir route uymadıysa
      404 dön
    */
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Sayfa bulunamadı");
});


/*
  listen:
  - Server'ı ayağa kaldırır
  - Tarayıcıdan localhost:3000 ile erişilir
*/
server.listen(3000, () => {
    console.log("Server çalışıyor 🚀 http://localhost:3000");
});


// http modülü = gelen isteği al, URL'e göre cevap ver