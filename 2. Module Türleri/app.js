/*************************************************
 * NODE.JS MODÜL TÜRLERİ
 *************************************************/

/*
  Node.js'te modüller 3 ana gruba ayrılır:

  1️⃣ Core (Built-in) Modüller
  2️⃣ Local (Kendi Yazdığımız) Modüller
  3️⃣ Third-Party (NPM) Modüller
*/


/* =================================================
   1️⃣ CORE (BUILT-IN) MODÜLLER
   -------------------------------------------------
   Node.js ile BİRLİKTE gelen modüllerdir.
   Ekstra kurulum gerekmez.
   require ile direkt kullanılır.
   ================================================= */

/*
  Örnek Core Modüller:
  - fs    → Dosya işlemleri
  - http  → Sunucu oluşturma
  - path  → Dosya yolu işlemleri
  - os    → İşletim sistemi bilgileri
*/

// fs modülü (dosya okuma/yazma)
const fs = require("fs");

// path modülü (dosya yolu işlemleri)
const path = require("path");



/* =================================================
   2️⃣ LOCAL (KENDİ YAZDIĞIMIZ) MODÜLLER
   -------------------------------------------------
   Proje içinde bizim oluşturduğumuz dosyalardır.
   require ederken ./ veya ../ kullanılır.
   ================================================= */

/*
  Örnek:
  math.js → bizim yazdığımız modül
*/

// Local modül çağırma
const math = require("./math");

// Sadece module.exports ile açılanlara erişilir
math.topla(3, 5);



/* =================================================
   3️⃣ THIRD-PARTY (NPM) MODÜLLER
   -------------------------------------------------
   npm ile sonradan yüklenen modüllerdir.
   package.json içinde listelenir.
   ================================================= */

/*
  Örnek Third-Party Modüller:
  - express → web framework
  - mongoose → MongoDB
  - lodash → yardımcı fonksiyonlar
*/

// express yüklüyse kullanılabilir
const express = require("express");



/* =================================================
   ÖZET – AKILDA KALICI
   ================================================= */

/*
  Core Module     → Node.js ile hazır gelir
  Local Module    → Biz yazarız (./ ile çağrılır)
  Third-Party     → npm ile yüklenir

  require("fs")        → Core
  require("./math")   → Local
  require("express")  → NPM
*/
