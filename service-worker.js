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
    "revision": "e4b13d5bdc7fa076da73f45a39510a78"
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
    "url": "assets/img/2023-03-15-15-01-26.7769f1b2.png",
    "revision": "7769f1b2661a05e69021cc0e5c711744"
  },
  {
    "url": "assets/img/2023-03-15-15-43-26.79844fa5.png",
    "revision": "79844fa590034a0cc11db3b48443abd2"
  },
  {
    "url": "assets/img/2023-03-15-16-05-56.613eba13.png",
    "revision": "613eba13c3355fff254771f113b8fa37"
  },
  {
    "url": "assets/img/2023-03-15-16-20-28.d1c783ab.png",
    "revision": "d1c783aba28e1a8f3c2c031d7e988b06"
  },
  {
    "url": "assets/img/2023-03-15-16-26-37.679c7b42.png",
    "revision": "679c7b42903687158b2cce4b8a432104"
  },
  {
    "url": "assets/img/2023-03-15-16-57-52.4069a2fa.png",
    "revision": "4069a2fa7ae55c45d1880fc2acb941a1"
  },
  {
    "url": "assets/img/2023-03-15-17-00-36.d283ecad.png",
    "revision": "d283ecad29c851ed45be18852d968842"
  },
  {
    "url": "assets/img/2023-03-15-17-05-23.1fc2189a.png",
    "revision": "1fc2189a8020fdf5c72b0d0749217642"
  },
  {
    "url": "assets/img/2023-03-16-14-13-47.c62a661a.png",
    "revision": "c62a661ab37faaba76c981cf246eb8d6"
  },
  {
    "url": "assets/img/2023-03-16-15-57-04.d687b2d1.png",
    "revision": "d687b2d1f587fc66efa1629b90e4cb7e"
  },
  {
    "url": "assets/img/2023-03-16-15-58-02.13ed79ba.png",
    "revision": "13ed79bafa4d491cfa59914db73e12ea"
  },
  {
    "url": "assets/img/2023-03-16-16-16-50.bf170cff.png",
    "revision": "bf170cff54dd1e597337d9cd5a4f09cd"
  },
  {
    "url": "assets/img/2023-03-16-17-20-33.0d542b17.png",
    "revision": "0d542b17f50a9389ff6eed574aaf5f54"
  },
  {
    "url": "assets/img/2023-03-17-15-42-09.a030e1a7.png",
    "revision": "a030e1a7a1c4d17981fba0e32b4eece3"
  },
  {
    "url": "assets/img/2023-03-17-15-47-25.5aff2a69.png",
    "revision": "5aff2a69607cbbbe91e8fa7889ccde89"
  },
  {
    "url": "assets/img/2023-03-17-15-53-45.76e59265.png",
    "revision": "76e592653e50a9c082791023007ad0a5"
  },
  {
    "url": "assets/img/2023-03-17-15-57-44.864c609d.png",
    "revision": "864c609df717429418b35f5154e581f6"
  },
  {
    "url": "assets/img/2023-03-17-16-15-32.d0c525aa.png",
    "revision": "d0c525aae975325bd0372e80deb9a520"
  },
  {
    "url": "assets/img/2023-03-17-16-35-55.2e1e6b16.png",
    "revision": "2e1e6b164399054798082c239c8f3533"
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
    "url": "assets/js/1.6709379a.js",
    "revision": "e9a554e64b692211e11baf33c51f68c4"
  },
  {
    "url": "assets/js/10.2fe1d479.js",
    "revision": "1a212c426dc5d53ad5de7065f0f7d9e3"
  },
  {
    "url": "assets/js/11.1e326341.js",
    "revision": "23dccfe6720df4103077f4eab5c5d72d"
  },
  {
    "url": "assets/js/12.ae6f747f.js",
    "revision": "2235473f873b854509cc54aca143cfd4"
  },
  {
    "url": "assets/js/13.c55ddc96.js",
    "revision": "da040d518e51d74fc9996be63bd2b153"
  },
  {
    "url": "assets/js/14.78f349d0.js",
    "revision": "e35375f53d6f3ffd1b15018406eda8e7"
  },
  {
    "url": "assets/js/15.75cceaec.js",
    "revision": "54deee47b80f7b1e31f1b900509fbed4"
  },
  {
    "url": "assets/js/16.1322c2e7.js",
    "revision": "96379d5bd9ce8bfd6266a392370eb9e4"
  },
  {
    "url": "assets/js/17.3601daf9.js",
    "revision": "9a455be8e05fa4406aa7dad82f804d9c"
  },
  {
    "url": "assets/js/18.b823b630.js",
    "revision": "17f7f6d604d47eeba2f5adf1a60c88fe"
  },
  {
    "url": "assets/js/19.c8417fbd.js",
    "revision": "60d33dd89181c5388ad595b22a3aecf8"
  },
  {
    "url": "assets/js/20.fc6fd6d5.js",
    "revision": "b9d38e3d883fc95eace28d62b17385b5"
  },
  {
    "url": "assets/js/21.cbf7a6d5.js",
    "revision": "1fb288ab7604920f4eea18f7c72bc2e4"
  },
  {
    "url": "assets/js/22.d0b322c3.js",
    "revision": "cf519019b8c79a6d3050cd838c5776b7"
  },
  {
    "url": "assets/js/23.e88ef683.js",
    "revision": "e600899d99dfafac1fb4f045fbdd0989"
  },
  {
    "url": "assets/js/24.eb18bb38.js",
    "revision": "12770ccd490530801fd6750b64b08c5b"
  },
  {
    "url": "assets/js/25.28b217eb.js",
    "revision": "ae5e354ee26550638c3ebd030373f0a1"
  },
  {
    "url": "assets/js/26.0486a5c9.js",
    "revision": "d9193ca063c7bbebb297ca67099adb1e"
  },
  {
    "url": "assets/js/27.31657f4e.js",
    "revision": "0018e661ea1a4ba51c2d4f8a6ca8eb7e"
  },
  {
    "url": "assets/js/28.01c20704.js",
    "revision": "74b0fb3d290228f3a22eafaaca6f8fb2"
  },
  {
    "url": "assets/js/29.dfdfddc3.js",
    "revision": "32fb7ff991ec1470aa3d6b14572609b6"
  },
  {
    "url": "assets/js/30.4a395879.js",
    "revision": "a624a32bfe75d59f7d52c341653c5a26"
  },
  {
    "url": "assets/js/31.754f722e.js",
    "revision": "a2c4fd68607ee17d5bf8ba7a4d073662"
  },
  {
    "url": "assets/js/32.67810511.js",
    "revision": "af37c666b39d88f8ec1363386a72e3ef"
  },
  {
    "url": "assets/js/33.b40bf3e1.js",
    "revision": "6a9ab7bb1273677011f3a3a3e0f00f76"
  },
  {
    "url": "assets/js/34.aaa356c0.js",
    "revision": "7d8999501aacd2691689222c6d9bb653"
  },
  {
    "url": "assets/js/35.447c51d1.js",
    "revision": "7916a42369caa73e25da74e6d3f02f14"
  },
  {
    "url": "assets/js/36.aaa20c1c.js",
    "revision": "533184c275ffafe702b6440db7e3bdb7"
  },
  {
    "url": "assets/js/37.3fb4b668.js",
    "revision": "53558384cae46faa5a39cbbb62ab5068"
  },
  {
    "url": "assets/js/38.13dbd284.js",
    "revision": "0aaa03ed4a4d5e30eef540882d7b7fd6"
  },
  {
    "url": "assets/js/39.b0c0001a.js",
    "revision": "c4148d552047351a1e7ae8d525ecc6ad"
  },
  {
    "url": "assets/js/4.1f97914e.js",
    "revision": "2163d02f2af8c4575dbd70256ae0e5eb"
  },
  {
    "url": "assets/js/40.d8b370b7.js",
    "revision": "250ebf71959fbe52667af3aa4e8c1228"
  },
  {
    "url": "assets/js/41.2f4ea534.js",
    "revision": "85cfb4a24f8b25d1420fff1447cdc86e"
  },
  {
    "url": "assets/js/5.7416f2a0.js",
    "revision": "7ae314880f0e16d15bc90f1f205c901d"
  },
  {
    "url": "assets/js/6.5dd43fd2.js",
    "revision": "1239f48cdaee1357f4a35b549fce9817"
  },
  {
    "url": "assets/js/7.8d2e731e.js",
    "revision": "0d86a62ef5daab192b18bc6dd1af0e71"
  },
  {
    "url": "assets/js/8.0eb6e835.js",
    "revision": "1872087ba235bb0b7c058a86a8afff3d"
  },
  {
    "url": "assets/js/9.c1e918b5.js",
    "revision": "7d6166031638378d2ff6766571ee79eb"
  },
  {
    "url": "assets/js/app.8af9c257.js",
    "revision": "d1bd9e4ba8e4bd830d0972c1b256ff56"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.d378c598.js",
    "revision": "20d471ecfb16531437dee85e7a9e477c"
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
    "revision": "0dbbbe637ebe6309dd7de1b5c454827d"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "19db56ac46a7c6d4e9c4673a0035323a"
  },
  {
    "url": "categories/个人笔记/page/2/index.html",
    "revision": "2e2729e5b143961d1e7aa3e58e7352e3"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "0ce437cd7596ede4fe3be025b3909e82"
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
    "revision": "0ad4bc4d772c1dd157ebbdfc2023081c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "040befc6d7b16c3ffe0bba5e6d19f581"
  },
  {
    "url": "tags/css/index.html",
    "revision": "df5b2e0572e67ba5bdda04f9b0691312"
  },
  {
    "url": "tags/git/index.html",
    "revision": "726264acf2c8fe96f3e6780384054c3b"
  },
  {
    "url": "tags/html/index.html",
    "revision": "314f51cb85d29c42a23725aae73a324a"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "217d9a8b14e4a0dfabd8893ba8f08fa3"
  },
  {
    "url": "tags/javascript/page/2/index.html",
    "revision": "0818e8a9b86a995c5caa41752e6195a6"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "57843d63a65138a0857e70abbcf4cb68"
  },
  {
    "url": "tags/react/index.html",
    "revision": "befb5da88c88a29d09070ce88a80136e"
  },
  {
    "url": "tags/this/index.html",
    "revision": "e9bf8b628e88344eba45ae908da19422"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "31bb06d2a5d9fc17d65a21bffac00001"
  },
  {
    "url": "tags/V8引擎/index.html",
    "revision": "64eca5ef958e0b7c8672af8c4f32faeb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9ccc832335ababfbe50e9fb40a9a5db9"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "8cff10106c340a1a87f1f8553be90f53"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e59dbcfba5f02be68f322fc19e394850"
  },
  {
    "url": "timeline/index.html",
    "revision": "5672ebcdf379f41f2a2ce2fce6fadc7c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/CSS笔记/CSS基础使用.html",
    "revision": "7022b7a5f6cb6afd18e178eb70917cb0"
  },
  {
    "url": "个人笔记/Git笔记/Git基础使用.html",
    "revision": "acc9fc359805b62affc6283784410cbd"
  },
  {
    "url": "个人笔记/HTML笔记/HTML基础使用.html",
    "revision": "024928620276100453470827e04ec4e8"
  },
  {
    "url": "个人笔记/JavaScript笔记/JavaScript基础使用.html",
    "revision": "9209eb1723eba5d572c51ce84c8c2104"
  },
  {
    "url": "个人笔记/JavaScript笔记/JS内存管理.html",
    "revision": "db6c8bae2fd4696a0be140832dd2c398"
  },
  {
    "url": "个人笔记/JavaScript笔记/JS执行原理.html",
    "revision": "31218e4f8321e9422fcf05abb71bea4e"
  },
  {
    "url": "个人笔记/JavaScript笔记/JS闭包.html",
    "revision": "ac7ca6a23c6c982578d4429a8c15cb10"
  },
  {
    "url": "个人笔记/JavaScript笔记/this的学习.html",
    "revision": "8baaf8d71551f2a849a8fb64d0254dda"
  },
  {
    "url": "个人笔记/JavaScript笔记/V8引擎执行代码的流程.html",
    "revision": "788a7aa2d767340dcbefc098f4666a4a"
  },
  {
    "url": "个人笔记/JavaScript笔记/浏览器渲染页面的流程.html",
    "revision": "bae5a2aeb1de4eb27588dc858978674b"
  },
  {
    "url": "个人笔记/JavaScript笔记/闭包的使用场景.html",
    "revision": "e62d63715290d30831775a551ca029b4"
  },
  {
    "url": "个人笔记/MySQL笔记/MySQL基础使用.html",
    "revision": "df77e2132a965ea72ef58a97c31f425a"
  },
  {
    "url": "个人笔记/React笔记/React 项目搭建.html",
    "revision": "8e240a81a0df37a45ba8f0f2e1b67fb5"
  },
  {
    "url": "个人笔记/React笔记/react-hooks基础使用.html",
    "revision": "49750b7d7f6ff5cb37813cfe4f3df9bd"
  },
  {
    "url": "个人笔记/TypeScript笔记/TypeScript基础使用.html",
    "revision": "1aab03239e84b93c740ba3164a010e55"
  },
  {
    "url": "个人笔记/Vue笔记/Vue 项目搭建.html",
    "revision": "6a04d7f7a6527aa2af57eefb376f46f3"
  },
  {
    "url": "个人笔记/小程序笔记/微信小程序自定义导航栏.html",
    "revision": "6c2d173a56bb3b62b3c43c7582483c42"
  },
  {
    "url": "作业/题目.html",
    "revision": "54adefe0a473dc85a2d06ce8576644b1"
  },
  {
    "url": "关于/index.html",
    "revision": "b8b82a520d96d146ab94c90c61ebffa6"
  },
  {
    "url": "面试指南/CSS面试题/flex1是哪些属性缩写有什么含义.html",
    "revision": "4fc37c868546248990c570652a5f8a20"
  },
  {
    "url": "面试指南/CSS面试题/常见的水平垂直居中实现方案.html",
    "revision": "714f4bd24b9060b7f8a9759f46c563a2"
  },
  {
    "url": "面试指南/HTML面试题/html语义化的理解.html",
    "revision": "92b665199c02977c7bde469287e25cbf"
  },
  {
    "url": "面试指南/JavaScript面试题/es6新增哪些东西.html",
    "revision": "dd2cbd9ec67cd8eb0034760c5f3df88c"
  },
  {
    "url": "面试指南/JavaScript面试题/JS数据类型检测的方法有哪些.html",
    "revision": "700d5dc9de511e1aaedfbcdc2684dd56"
  },
  {
    "url": "面试指南/JavaScript面试题/JS的基本数据类型有哪些？基本数据类型和引用数据类型的区别.html",
    "revision": "80d4ef715858473cde9e6d64611e2d5f"
  },
  {
    "url": "面试指南/JavaScript面试题/letcosntvar的区别.html",
    "revision": "a8e9093af19c968c3dc0325aae4a15e6"
  },
  {
    "url": "面试指南/JavaScript面试题/防抖节流是什么.html",
    "revision": "ddf5d871dd8c29db5bfbcc081e5d18cf"
  },
  {
    "url": "面试指南/React面试题/React事件机制.html",
    "revision": "2c5aa6021d510d759927371d6ea8d636"
  },
  {
    "url": "面试指南/Vue面试题/父子组件声明周期.html",
    "revision": "dab32a8ca74834815e19e99bb925b63d"
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
