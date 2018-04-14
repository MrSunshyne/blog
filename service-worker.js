/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20170413/setup-google-analytics-vuepress.html",
    "revision": "e4eac4458f9a86d3158b2f4fea51839e"
  },
  {
    "url": "404.html",
    "revision": "c79319420368e08d634dff0b17d5801c"
  },
  {
    "url": "assets/css/4.styles.9ab8a37a.css",
    "revision": "f619090a949d7fcecc5215ee437b4054"
  },
  {
    "url": "assets/img/image.222d1b29.jpg",
    "revision": "222d1b29f6f4272a1202b0eba7d3413b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/twitter.f1cdf171.jpg",
    "revision": "f1cdf1711ab47298f18810eb7d08cb34"
  },
  {
    "url": "assets/img/zucc.8b69f089.jpg",
    "revision": "8b69f0891aa6a12b6286daa611825574"
  },
  {
    "url": "assets/js/0.8af1b3f0.js",
    "revision": "ea098aa565c102e1cff7bab3377efff0"
  },
  {
    "url": "assets/js/1.3987cd92.js",
    "revision": "ff10804955019f6b19b09afcb789f7db"
  },
  {
    "url": "assets/js/2.b51eb6c8.js",
    "revision": "961cc2ad0e9d08bc89b25b517e87bfc8"
  },
  {
    "url": "assets/js/3.e542de2a.js",
    "revision": "6adea17f6dadaeb84b15ce1dea1bc200"
  },
  {
    "url": "assets/js/app.62218a6f.js",
    "revision": "6dcbdb31769e17bcff6cadcb143eb696"
  },
  {
    "url": "drawings/index.html",
    "revision": "cbd6fa4ed930ef154c3c0ca8255eb795"
  },
  {
    "url": "drawings/twitter.html",
    "revision": "b151c3fe56a1450c708be9a454683be4"
  },
  {
    "url": "index.html",
    "revision": "3d9673e06cc40ae43ef0df77b82c47c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
