/*************************************************
 * KONU: ROUTING & REQUEST İŞLEMLERİ (NODE.JS)
 *************************************************/

/*
  Routing:
  - Client'tan gelen isteğin URL'ine göre
    hangi cevabın döneceğini belirlemektir

  Request:
  - Gelen isteğin method'u (GET / POST)
  - URL'i (endpoint)
  - Query parametreleri
*/

const http = require("http");
const { URL } = require("url");


/*
  Server oluşturulur
*/
const server = http.createServer((req, res) => {

    /* =============================================
       1) REQUEST BİLGİLERİ
       ============================================= */

    // İstek türü (GET, POST...)
    const method = req.method;

    // Tam URL oluşturmak için host bilgisi eklenir
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);

    // Endpoint (path)
    const pathname = fullUrl.pathname;

    // Query parametreleri (?id=5 gibi)
    const id = fullUrl.searchParams.get("id");


    /* =============================================
       2) ROUTING (URL + METHOD KONTROLÜ)
       ============================================= */

    // Ana sayfa
    if (method === "GET" && pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Ana Sayfa");
    }

    // Query örneği: /users?id=5
    if (method === "GET" && pathname === "/users") {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

        return res.end(JSON.stringify({
            route: "/users",
            receivedId: id
        }));
    }

    // POST isteği örneği
    if (method === "POST" && pathname === "/login") {
        let body = "";

        /*
          POST request body:
          - data event'inde parça parça gelir
          - end event'inde tamamlanır
        */
        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("POST isteği alındı");
        });

        return;
    }


    /* =============================================
       3) 404 ROUTE (EŞLEŞME YOKSA)
       ============================================= */

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Sayfa bulunamadı");
});


/*
  Server ayağa kaldırılır
*/
server.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});


/*************************************************
 * ÖZET
 *
 * - req.method  → isteğin türü
 * - req.url     → hangi route'a geldi
 * - pathname    → endpoint
 * - searchParams→ query değerleri
 *
 * Routing = method + URL kontrolü
 *************************************************/
