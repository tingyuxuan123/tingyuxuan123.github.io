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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "41061fc29ac5c1406e6453d14b36749f"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.89fa78e8.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.d5946778.js",
    "revision": "8f5295a943bc9282ba34d7885db10bed"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.c1e5e647.js",
    "revision": "093c90a0e10c4035ae10e0aea613fcc7"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.da8efe2d.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.2bbc4982.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.44085999.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.33c15261.js",
    "revision": "8b8c66ff387f5de22dc87bb0739f04e7"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "462d5ff17da4ed17f26c2bb8960c157e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8ce4c78e2d5354bd87bc2662c47dbacc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d4409fecb69ff1c90b9e05f7036c88b9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6ca6398f6a82c449cdc6ee9c005d3bac"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "750a89762d551da1a8b6da2ec707bdae"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "66dc5665008d16e4152b49694e0828d9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c9f239912fb64b54427ef691bc35023b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9b97258926f6c0bef788d554c5fc1d93"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b8559350e5a341b973f87857eadbc433"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f013cf140396a34afe98ab896557e54e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c8415c56d3000b758344434ca967edf2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6b7221c915687a8eec187526bc1a309a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "cedb31c783540974d2f8cd0e7a842a36"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bbc617f89886e4b822e21932cf40b51d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d5da08c77725ba75cfdbb9c2e37b8d75"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "46bfa3776b7aa7fd483d8f132f243d2a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "79714ea57eb39aab3595a0d8173ca518"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f3fcc4f869c9cf3ca4d59ab8d47631c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "adbaced46d93747ad68901078dc666d5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5378cad8e7e1bcc2e71267702197b8a5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d200adbadd81f7eb60205ad1651b9ca9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4eef880572baa1131f7e5beac9b8366e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fc7aaf4e70b90a6064d8e9cc0fbb6d32"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f3a216eb31a4c67238101933fe1aaed9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
