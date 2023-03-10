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
    "revision": "36716241d41cc312eaa80a0ada692b3d"
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
    "url": "assets/js/12.7f231f97.js",
    "revision": "05a328feee3c5a6667fd201c1e077c87"
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
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
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
    "url": "assets/js/app.7c73d7b1.js",
    "revision": "d07394fdadc47ac39018ff33fa8fea87"
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
    "revision": "6dc0fd3f7fe6dfe2c2805fd4865ae19e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "54863867139f9ec1a40c9941a305c719"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "dd8a088aac1cda284f6b550af42ed345"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ee4efcaf2e152b66bb36e37781d1c536"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a00fdd0b43fb7cc9141815008770b581"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5f4f68a3c4f1dc6a5580d758c4998735"
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
    "revision": "56e176044365074541223a9afcf801e3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c021c8b6ecd9c72fcc8362b5e73d7e8b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8f4800d10631918c5f706c7063bc603a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "dca905bed7e40ab6b211d695809b720d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "527c10623aba865cff09b9e5fbe7ff1c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7e9744b8e4051cf59a90dfd23028f3a4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "35d68f25fe5e151e464def2a584527c2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d33f30307940cd0fbe8b301c3a8dc1f6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e8f27e93d182d7b43f5afb05473f8b26"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0cbb4fc9ffeb87c70c0d8c58a0d2a66c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1856fe33b2a93a71a2b9e4a2e01c5b05"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b52157fbb611d0adfabf3870945b101a"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c9b39a1c0eb00f79403a8336e8c87be"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6b18336d8c690d6bd4713b3e4efca5a2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7d600c56668bfd25cf0eaa402df9a875"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "aae1f584248142bc402dabb2a608083e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2d050865e4d40a7e6dcf8516a89064fe"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5397f44f19f749bf939e446f044782bd"
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
