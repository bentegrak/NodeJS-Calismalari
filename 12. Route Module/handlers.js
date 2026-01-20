/*************************************************
 * handlers.js
 * - Burada "iş yapan" fonksiyonlar durur
 * - Her route buradan bir handler çağırır
 *************************************************/

function home(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Ana sayfa ✅");
}

function users(req, res, urlObj) {
    // Query örneği: /users?id=10
    const id = urlObj.searchParams.get("id");

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ route: "/users", receivedId: id }));
}

function login(req, res) {
    // POST body parsing (data + end)
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        let payload;

        // JSON parse hatasını yakalamak için try/catch
        try {
            payload = JSON.parse(body);
        } catch {
            res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
            return res.end("Hatalı JSON ❌");
        }

        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ ok: true, received: payload }));
    });
}

function notFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Route bulunamadı ❌");
}

/*
  Bu dosyadan dışarı açtıklarımız:
  - server başka dosyadan require edince bunları kullanabilecek
*/
module.exports = { home, users, login, notFound };
