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
    "revision": "4949e7fd42317f6a4615654919fc66b6"
  },
  {
    "url": "assets/css/0.styles.1be57b2a.css",
    "revision": "f1e4e0e79c41fedb4c8077eac9066546"
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
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.1ea4bb84.js",
    "revision": "3ec3d33bece8a3fde4aeafd655b94394"
  },
  {
    "url": "assets/js/10.acd4da03.js",
    "revision": "79b70a4d767aefaa554c318c8519a9ee"
  },
  {
    "url": "assets/js/11.659096ca.js",
    "revision": "f155163404ed1bb4cdf9c17661d8bcca"
  },
  {
    "url": "assets/js/12.832e6d23.js",
    "revision": "06fce8606774c72467224818e8399be9"
  },
  {
    "url": "assets/js/13.4d4e1d89.js",
    "revision": "c6ec8c393116ba76195b219d1a27048d"
  },
  {
    "url": "assets/js/14.5063191e.js",
    "revision": "c4698a1f849abffd525c48e11a6bd14e"
  },
  {
    "url": "assets/js/15.d28681c0.js",
    "revision": "e456664437a2a77fec846cd1c3da6645"
  },
  {
    "url": "assets/js/16.bb7bb0dd.js",
    "revision": "79dcd87f64ee7ac247264714306d5954"
  },
  {
    "url": "assets/js/17.2264dbac.js",
    "revision": "cee7d578420c969f0a71bdb877e015c2"
  },
  {
    "url": "assets/js/18.178ce701.js",
    "revision": "1bc977d7c9d647e70b5cf90ee58a5eb0"
  },
  {
    "url": "assets/js/19.6abfa94b.js",
    "revision": "279adaa1576055e906c6d24036c0df88"
  },
  {
    "url": "assets/js/20.0ad3ec7a.js",
    "revision": "d7d3b6c760bc140105bbc015ea1c5d9b"
  },
  {
    "url": "assets/js/21.8e2875fa.js",
    "revision": "66af549067ff66a46ededd844fe4f8cb"
  },
  {
    "url": "assets/js/22.f5f14c1a.js",
    "revision": "c8012af84c89f128317449ba96bc804f"
  },
  {
    "url": "assets/js/23.44c3de21.js",
    "revision": "2fda33e02d5b4b460228682e9e47d709"
  },
  {
    "url": "assets/js/24.4f84471b.js",
    "revision": "5a931fc94ab6dc0b29d93f2865faff91"
  },
  {
    "url": "assets/js/25.9398eeb5.js",
    "revision": "8e77a44f9aeaf13a0334b6603021ba96"
  },
  {
    "url": "assets/js/26.e39f48c2.js",
    "revision": "f0583fbf0284e2c3becf9272bc83459a"
  },
  {
    "url": "assets/js/27.bbdd6108.js",
    "revision": "3fdfa53a03cdd6bff99da1e7d8be37c0"
  },
  {
    "url": "assets/js/28.430af97d.js",
    "revision": "1ea9a20dd7c8ff1f511a127eda01b878"
  },
  {
    "url": "assets/js/29.a65819ef.js",
    "revision": "b3fcbd4176446058b5f14ce02a75bfee"
  },
  {
    "url": "assets/js/4.bf546a5d.js",
    "revision": "7e51dcb25e1db9ae8d0ed9b0a31ea172"
  },
  {
    "url": "assets/js/5.306ca5d4.js",
    "revision": "e09ff5f29f0c1da3178b6f599000d562"
  },
  {
    "url": "assets/js/6.df5be34a.js",
    "revision": "3e8eecc02505b631a87981dc6ee98401"
  },
  {
    "url": "assets/js/7.2f1f818d.js",
    "revision": "fe9356c24a3e99c035c6142517e1ca97"
  },
  {
    "url": "assets/js/8.50dd0613.js",
    "revision": "a25ca52f5aeabc05a51037a89d73c063"
  },
  {
    "url": "assets/js/9.4082b90d.js",
    "revision": "52e7fef2461db4bd4857d4a05e9b6f75"
  },
  {
    "url": "assets/js/app.f7064e2f.js",
    "revision": "c6426d57f126bda55e0963c486c33d96"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a62600c5.js",
    "revision": "030dda51881882d33bb67f0543f6a0e9"
  },
  {
    "url": "avatar.png",
    "revision": "4b3cd08462fb0142f6bc3e208f87586d"
  },
  {
    "url": "avatar·.jpg",
    "revision": "564c2f119839c9710702d059f3dec90f"
  },
  {
    "url": "avatar1.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "d20accdff7db7f3317cd164550c16746"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "29301a3d5f8318e32ea21483191dd538"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "534a1c91f95af50f677635407de8b86f"
  },
  {
    "url": "css/style.css",
    "revision": "30f055cef1a03bdb391832906afa843e"
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
    "revision": "072d52ba455d459e9b1d470cb4a3f7b5"
  },
  {
    "url": "index.html",
    "revision": "8af3e63a2d1a0baf8f5ae5d68674c39b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "414ec08c5d5b496a6044352ba8bab58b"
  },
  {
    "url": "tags/css/index.html",
    "revision": "26b2a928b24af4e2c14552a18f9b96a0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "437cffb27db115770b8eb654fa7cff87"
  },
  {
    "url": "tags/html/index.html",
    "revision": "1ff441cd456c768b31a13f05d67e205d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "39589b8e52531bd0f1e44c619c5a8261"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "ed55aa3de225566085e1270f167f5f16"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1a16869c07b221418591a78095492bf6"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "6bc516f248f5fb126a445ac70798c563"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8b744293f979ddb7672b46e6b4d25539"
  },
  {
    "url": "timeline/index.html",
    "revision": "81422ce3b2ac77ba50d56bc3037299df"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/CSS笔记/CSS基础使用.html",
    "revision": "64a49a482462686c5779c0785e8a1a9e"
  },
  {
    "url": "个人笔记/Git笔记/Git基础使用.html",
    "revision": "a21aa15b203866ab09162b89e4f1901a"
  },
  {
    "url": "个人笔记/HTML笔记/HTML基础使用.html",
    "revision": "e535d30bbc7d61ccba80208c1fdb3f8e"
  },
  {
    "url": "个人笔记/JavaScript笔记/JavaScript基础使用.html",
    "revision": "e8de53a3f09b58e7982c4b947cacc170"
  },
  {
    "url": "个人笔记/MySQL笔记/MySQL基础使用.html",
    "revision": "6d53a6d5e1c1d4b0ded120a157c07e73"
  },
  {
    "url": "个人笔记/React笔记/React 项目搭建.html",
    "revision": "351431354b6a1fd1c4f4c063dbce4856"
  },
  {
    "url": "个人笔记/React笔记/react-hooks基础使用.html",
    "revision": "880171ffe0cb700be94980491bafaf89"
  },
  {
    "url": "个人笔记/TypeScript笔记/TypeScript基础使用.html",
    "revision": "14552995f2325e255d2ae4b91a1c2bd0"
  },
  {
    "url": "个人笔记/Vue笔记/Vue 项目搭建.html",
    "revision": "d872d0c1e144ec31a6ee7876bd663f6a"
  },
  {
    "url": "个人笔记/Vue笔记/Vue2基础使用.html",
    "revision": "b05e2946baec558b4ed24d2adde60a35"
  },
  {
    "url": "关于/index.html",
    "revision": "2d295f92ebb59241499d3f67f802a94c"
  },
  {
    "url": "面试指南/CSS面试题/flex1是哪些属性缩写有什么含义.html",
    "revision": "38a0b1baceb1804ff19bde3619e57d01"
  },
  {
    "url": "面试指南/CSS面试题/常见的水平垂直居中实现方案.html",
    "revision": "4f84f01804b93523b762acb184184244"
  },
  {
    "url": "面试指南/HTML面试题/html语义化的理解.html",
    "revision": "0c364b45d72c109170c7403ddc0c1e93"
  },
  {
    "url": "面试指南/JavaScript面试题/JS的基本数据类型有哪些？基本数据类型和引用数据类型的区别.html",
    "revision": "513bb1e029ae5cee568b36e82216191e"
  },
  {
    "url": "面试指南/React面试题/React事件机制.html",
    "revision": "366a146e1103bdba66b3dc00c9707ede"
  },
  {
    "url": "面试指南/Vue面试题/父子组件声明周期.html",
    "revision": "7b5bd30e2e2ca12047085e9ca3c5c4ca"
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
