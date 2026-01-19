/*************************************************
 * NODE.JS URL MODÜLÜ
 *************************************************/

/*
  url modülü:
  - URL'leri PARÇALAMAK ve OKUMAK için kullanılır
  - Özellikle server tarafında (request URL) çok kullanılır
*/

const url = require("url");


/* =================================================
   ÖRNEK URL
   ================================================= */

const adres = "https://www.site.com:8080/products/list?id=5&sort=asc";


/* =================================================
   url.parse()
   -------------------------------------------------
   URL'yi parçalara ayırır
   ================================================= */

/*
  İkinci parametre true verilirse:
  query string otomatik OBJECT olur
*/

const parsedUrl = url.parse(adres, true);

console.log(parsedUrl);
/*
{
  protocol: 'https:',
  slashes: true,
  host: 'www.site.com:8080',
  hostname: 'www.site.com',
  port: '8080',
  pathname: '/products/list',
  search: '?id=5&sort=asc',
  query: { id: '5', sort: 'asc' },
  href: 'https://www.site.com:8080/products/list?id=5&sort=asc'
}
*/


/* =================================================
   URL BÖLÜMLERİ (EN ÇOK KULLANILANLAR)
   ================================================= */

// Protokol (http / https)
console.log(parsedUrl.protocol); // https:

// Host adı
console.log(parsedUrl.hostname); // www.site.com

// Port
console.log(parsedUrl.port); // 8080

// Path (endpoint)
console.log(parsedUrl.pathname); // /products/list

// Query parametreleri (OBJECT)
console.log(parsedUrl.query); // { id: '5', sort: 'asc' }

// Tek tek erişim
console.log(parsedUrl.query.id); // 5
console.log(parsedUrl.query.sort); // asc



/* =================================================
   GERÇEK HAYAT KULLANIMI (SERVER TARAFI)
   ================================================= */

/*
  Tarayıcıdan gelen istek:
  /user?name=furkan&age=25

  Server'da bu şekilde okunur:
*/

const requestUrl = "/user?name=furkan&age=25";

const parsedRequest = url.parse(requestUrl, true);

console.log(parsedRequest.pathname); // /user
console.log(parsedRequest.query.name); // furkan
console.log(parsedRequest.query.age);  // 25



/* =================================================
   YENİ YAPI (WHATWG URL API)
   -------------------------------------------------
   Modern ve önerilen kullanım
   ================================================= */

const myURL = new URL(adres);

console.log(myURL.href);        // Tam URL
console.log(myURL.hostname);    // www.site.com
console.log(myURL.pathname);    // /products/list
console.log(myURL.searchParams.get("id"));   // 5
console.log(myURL.searchParams.get("sort")); // asc



/* =================================================
   KLASİK vs YENİ KULLANIM
   ================================================= */

/*
  url.parse()           → Eski (legacy)
  new URL()             → Yeni ve önerilen

  Ama:
  - Hocalar genelde url.parse anlatır
  - Express ve modern Node yeni API kullanır
*/



/* =================================================
   AKILDA KALICI ÖZET
   ================================================= */

/*
  URL modülü:
  - URL'yi PARÇALAR
  - Path ve query'yi ayırır

  pathname → endpoint
  query    → parametreler

  Server tarafında:
  "hangi endpoint'e istek geldi?"
  "parametre ne gönderildi?"
  sorularının cevabı URL modülüdür
*/
