/*************************************************
 * server.js
 * - Server burada kurulur
 * - Gelen request router'a paslanır
 *************************************************/

const http = require("http");
const { URL } = require("url");
const router = require("./routes");

const server = http.createServer((req, res) => {
    // req.url tek başına tam URL olmadığı için base veriyoruz
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    // Routing işini routes.js'e devrediyoruz
    router(req, res, urlObj);
});

server.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});
