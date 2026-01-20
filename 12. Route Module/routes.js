/*************************************************
 * routes.js
 * - Route module burası
 * - Gelen request'in URL + method'una bakar
 * - Doğru handler'a yönlendirir
 *************************************************/

const { home, users, login, notFound } = require("./handlers");

function router(req, res, urlObj) {
    const method = req.method;
    const pathname = urlObj.pathname;

    // GET /
    if (method === "GET" && pathname === "/") return home(req, res);

    // GET /users
    if (method === "GET" && pathname === "/users") return users(req, res, urlObj);

    // POST /login
    if (method === "POST" && pathname === "/login") return login(req, res);

    // Hiçbiri değilse 404
    return notFound(req, res);
}

module.exports = router;
