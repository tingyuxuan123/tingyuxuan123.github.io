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
    "revision": "608c40d18b35205e7a7c0fd59d0dfe71"
  },
  {
    "url": "assets/css/0.styles.1be57b2a.css",
    "revision": "f1e4e0e79c41fedb4c8077eac9066546"
  },
  {
    "url": "assets/img/2023-03-14-14-58-22.733a7ffd.png",
    "revision": "733a7ffd1526c07b26bd8e2d7dbb8a71"
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
    "url": "assets/js/1.6532d2ea.js",
    "revision": "3ec3d33bece8a3fde4aeafd655b94394"
  },
  {
    "url": "assets/js/10.27fdc2d5.js",
    "revision": "b4628c38af853fcd71fe5291ab9a13be"
  },
  {
    "url": "assets/js/11.14699239.js",
    "revision": "a8c628776f29af54c12f0174bfa03470"
  },
  {
    "url": "assets/js/12.683250ea.js",
    "revision": "6baae603c39e20389a2b429fb3ab225b"
  },
  {
    "url": "assets/js/13.c95e8277.js",
    "revision": "4fb1caeb63a3aad3afa9638ff0e6b733"
  },
  {
    "url": "assets/js/14.347bb1f4.js",
    "revision": "a278b39fd82853c6f40337b9a1f21278"
  },
  {
    "url": "assets/js/15.580956fe.js",
    "revision": "a4ac38d754d85db73006789a76dbaa0d"
  },
  {
    "url": "assets/js/16.51816367.js",
    "revision": "17463976d0d9ec293f80d604381e8500"
  },
  {
    "url": "assets/js/17.80dd6c40.js",
    "revision": "f85f498eb4ccbab8cbfb2a6dcc8961e3"
  },
  {
    "url": "assets/js/18.da6e8fb1.js",
    "revision": "c1d92829e8b97b02ccd6c015b762186e"
  },
  {
    "url": "assets/js/19.a2c5f8bc.js",
    "revision": "6f88c8dbb011f024ee5143bcb0a26c38"
  },
  {
    "url": "assets/js/20.e5db7c5a.js",
    "revision": "b2adcc605d501b94225dcf2890712cab"
  },
  {
    "url": "assets/js/21.6f1a5aa3.js",
    "revision": "21ed34a8c9f300c24007ee3f957b6d72"
  },
  {
    "url": "assets/js/22.2ff83380.js",
    "revision": "1e827a0bc85e7e3b07198270e236eba7"
  },
  {
    "url": "assets/js/23.d8cf53b8.js",
    "revision": "7088465695d89cd49a5b34f8264cb653"
  },
  {
    "url": "assets/js/24.4d8b1728.js",
    "revision": "63ed91341f937174dbc2278de7eb2d91"
  },
  {
    "url": "assets/js/25.9ed26d79.js",
    "revision": "78c7005979b054b58290bf5fac9a999b"
  },
  {
    "url": "assets/js/26.b70495a8.js",
    "revision": "6ae5021a409b34dcacafd654b2a8afea"
  },
  {
    "url": "assets/js/27.90fa2a34.js",
    "revision": "9356c0b786bea83a664d894eb1e1e3e5"
  },
  {
    "url": "assets/js/28.43127ca7.js",
    "revision": "53138ad521bc6363ddddb68dd9e74f67"
  },
  {
    "url": "assets/js/29.bc6f57a0.js",
    "revision": "ab036b7acb19b7e1b93df66393af6b52"
  },
  {
    "url": "assets/js/30.e25abd05.js",
    "revision": "21d15d1d42174fd34cc201b170be9893"
  },
  {
    "url": "assets/js/4.a329f0cb.js",
    "revision": "cf17b6fb5448072f42e7fa7d3ff38e0b"
  },
  {
    "url": "assets/js/5.b41abb72.js",
    "revision": "c4d3255c08b1089ff551ac5b4f0cdcad"
  },
  {
    "url": "assets/js/6.dddbef84.js",
    "revision": "89868314f13d16cb128c948e5a3faa88"
  },
  {
    "url": "assets/js/7.be96f1c8.js",
    "revision": "b2516992bccdab6fcdb4a638c8e3cdd2"
  },
  {
    "url": "assets/js/8.991a4f0a.js",
    "revision": "0ae0dba22d02abdcb3ffbd56d7cdca97"
  },
  {
    "url": "assets/js/9.641c16e7.js",
    "revision": "fa4750c1115d19e3ecaa22d9a14bf583"
  },
  {
    "url": "assets/js/app.6b3fbf56.js",
    "revision": "5792d4e598e3589d7a3c20df1ab5d9bd"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e05a432c.js",
    "revision": "a80342e044edad83fc0c49f42121c7b3"
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
    "revision": "9844d88847443c420b0f0545cc8260f4"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "fa3cc318f90110d1d3b2a461c7bee50a"
  },
  {
    "url": "categories/个人笔记/page/2/index.html",
    "revision": "b1fbaa2df2166520485a1e303f7f34ee"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "3ed25318f442fa21d589e58f3a0ddce2"
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
    "revision": "7da239d29ec97616ceeb4da33fc4e7b4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2c582bf3603215092a82075e4bf158fa"
  },
  {
    "url": "tags/css/index.html",
    "revision": "15f2129ae353771096c3aedc5f21aeda"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2076f72fc4c36e00358df149d49b5853"
  },
  {
    "url": "tags/html/index.html",
    "revision": "d13941f6a6e9d186bafc66a4fa69e943"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "8a6e2e08c4f550716c6395eae0bbd33b"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "cd0736f3a218fff60c8a6cf174719751"
  },
  {
    "url": "tags/react/index.html",
    "revision": "25ab09d92b5eedae2fda3de1329b1b5d"
  },
  {
    "url": "tags/this/index.html",
    "revision": "4c992f037aea8816abb9230f6e94a33e"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "3a742d8ae573ba5f0830dc92fb2fae21"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "34be19927246a5be5afe4152561fd9c9"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "b0137db0ac83e515d6a7a2b87278be7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f3affb5df1e4278838c1f4deffd7e45"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/CSS笔记/CSS基础使用.html",
    "revision": "d4d9e02efbdde3c41149412606b9476b"
  },
  {
    "url": "个人笔记/Git笔记/Git基础使用.html",
    "revision": "88cbc57a9092ffb2d5ba3c099b82851c"
  },
  {
    "url": "个人笔记/HTML笔记/HTML基础使用.html",
    "revision": "9bab06303c87cf9968541819af249a1f"
  },
  {
    "url": "个人笔记/JavaScript笔记/JavaScript基础使用.html",
    "revision": "8cf17156764f335c067b1a5e828f12ca"
  },
  {
    "url": "个人笔记/JavaScript笔记/this的学习.html",
    "revision": "0f01713d6dcfa264cb0ade481176af9a"
  },
  {
    "url": "个人笔记/MySQL笔记/MySQL基础使用.html",
    "revision": "1bb3207a948ff8748e34a0e9975424f6"
  },
  {
    "url": "个人笔记/React笔记/React 项目搭建.html",
    "revision": "45f26b12cf6bbe92e8cf24c3685ddd00"
  },
  {
    "url": "个人笔记/React笔记/react-hooks基础使用.html",
    "revision": "2331e35b276106ca713397a4b40f05f5"
  },
  {
    "url": "个人笔记/TypeScript笔记/TypeScript基础使用.html",
    "revision": "2fb7324e42ac1ee71ec6edd7f6ab6734"
  },
  {
    "url": "个人笔记/Vue笔记/Vue 项目搭建.html",
    "revision": "f465dda1e94a81ad3a5d1104df9ed779"
  },
  {
    "url": "个人笔记/小程序笔记/微信小程序自定义导航栏.html",
    "revision": "1ecbd52742b70939dd3c582f42d2b760"
  },
  {
    "url": "关于/index.html",
    "revision": "b5fad28528099ce2d3de972db6284962"
  },
  {
    "url": "面试指南/CSS面试题/flex1是哪些属性缩写有什么含义.html",
    "revision": "34dc6cd1739816c242074ddb06469c69"
  },
  {
    "url": "面试指南/CSS面试题/常见的水平垂直居中实现方案.html",
    "revision": "58e5dd994b6d356636e897f4646ad50e"
  },
  {
    "url": "面试指南/HTML面试题/html语义化的理解.html",
    "revision": "44a3ee28bbd596a38a7a44a9d71c943d"
  },
  {
    "url": "面试指南/JavaScript面试题/JS的基本数据类型有哪些？基本数据类型和引用数据类型的区别.html",
    "revision": "5d159621615fdb8a7843d569bf4d86c6"
  },
  {
    "url": "面试指南/React面试题/React事件机制.html",
    "revision": "e05a1b5fe466c0f0c953d81bff5c52d3"
  },
  {
    "url": "面试指南/Vue面试题/父子组件声明周期.html",
    "revision": "ea6fb818bb100379baef981892c57e22"
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
