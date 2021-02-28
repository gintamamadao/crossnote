if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4f429bf5c953825aa45d691abe208cb9","url":"assets/manifest-icon-192.png"},{"revision":"e00af3595dde18bb08e737e4989ce141","url":"assets/manifest-icon-512.png"},{"revision":"a603db26591594692651f763e9f96be0","url":"deps/echarts-gl/echarts-gl.min.js"},{"revision":"96877f62ac512e6237be3ddcd61c0f9c","url":"deps/echarts/echarts.min.js"},{"revision":"655728740b80652ea50e659edb7d273c","url":"deps/marked/marked.min.js"},{"revision":"154feb66ec0f182d08bf30c76b6eb753","url":"deps/mermaid/mermaid.min.js"},{"revision":"2957bccff80a89590386430d08d0c3ce","url":"deps/plantuml-encoder/plantuml-encoder.min.js"},{"revision":"b55b886dbca1b8c934cba786de6fdcd4","url":"deps/prism/prism.css"},{"revision":"772731ba6545374bb5f259c29ff970f4","url":"deps/prism/prism.js"},{"revision":"72af3b883f97adca1ba9ab7b446f381b","url":"deps/vega-embed/vega-embed.min.js"},{"revision":"07186f4877cdd1075c9797cb54d26c71","url":"deps/vega-lite/vega-lite.min.js"},{"revision":"9df1daba283619a34c5625e0f456ba02","url":"deps/vega/vega.min.js"},{"revision":"498f6becfe4b4cd798f4e394559c9471","url":"deps/wavedrom/skins/default.js"},{"revision":"ceb32ac22d37f14433692ef3e1c83c57","url":"deps/wavedrom/wavedrom.min.js"},{"revision":"ea5de727cbca4b9176c8595a464ed6b5","url":"deps/yamljs/yaml.min.js"},{"revision":"813915a82b60e29bc81f4235f908f7cf","url":"index.html"},{"revision":"cffaa34e0894e46b4183fbda039f3a42","url":"logo.svg"},{"revision":"2e60df9f4a63707deae443598f745afc","url":"logo192.png"},{"revision":"21bd3603cdcc62f38f25a7c4ebed89f2","url":"logo512.png"},{"revision":"afe44c87aad234a741b84c00eabbaee8","url":"logo64.png"},{"revision":"7c622fc4ef8c5371cc57811a059429ce","url":"static/css/2.4b71ecc8.chunk.css"},{"revision":"e23451b743b11353c031ba2a1123452c","url":"static/css/main.703e111a.chunk.css"},{"revision":"4f6bbb7f7c9c19a1770454be1cfdb86e","url":"static/js/2.8a9bb193.chunk.js"},{"revision":"c18280587fb796706e57ef42984fad1c","url":"static/js/main.a6f488e5.chunk.js"},{"revision":"1eb430ea2b3add525b95ff644601e0a5","url":"static/js/runtime-main.eaad50b8.js"},{"revision":"38a68f7d18d292349a6e802a66136eae","url":"static/media/KaTeX_AMS-Regular.cf3cce94.woff2"},{"revision":"342b2969be13827f320614c923fc0a5b","url":"static/media/KaTeX_Caligraphic-Bold.13c778b4.woff2"},{"revision":"b50049735e77e336f8a0c5007cfdd5e5","url":"static/media/KaTeX_Caligraphic-Regular.3f5d46fc.woff2"},{"revision":"7a3757c0bfc580d91012d092ec8f06cb","url":"static/media/KaTeX_Fraktur-Bold.df40f734.woff2"},{"revision":"450cc4d9319c4a438dd00514efac941b","url":"static/media/KaTeX_Fraktur-Regular.ce898e4c.woff2"},{"revision":"78b0124fc13059862cfbe4c95ff68583","url":"static/media/KaTeX_Main-Bold.8d75a1e6.woff2"},{"revision":"c7213ceb79250c2ca46cc34ff3b1aa49","url":"static/media/KaTeX_Main-BoldItalic.b7ed9854.woff2"},{"revision":"eea32672f64250e9d1dfb68177c20a26","url":"static/media/KaTeX_Main-Italic.477273ae.woff2"},{"revision":"f30e3b213e9a74cf7563b0c3ee878436","url":"static/media/KaTeX_Main-Regular.94c5cef0.woff2"},{"revision":"753ca3dfa44302604bec8e08412ad1c1","url":"static/media/KaTeX_Math-BoldItalic.d3d8666a.woff2"},{"revision":"2a39f3827133ad0aeb2087d10411cbf2","url":"static/media/KaTeX_Math-Italic.4fe95573.woff2"},{"revision":"59b3773389adfb2b21238892c08322ca","url":"static/media/KaTeX_SansSerif-Bold.02293ffd.woff2"},{"revision":"99ad93a4600c7b00b961d70943259032","url":"static/media/KaTeX_SansSerif-Italic.652da464.woff2"},{"revision":"badf3598c22478fd9155a49391ecd396","url":"static/media/KaTeX_SansSerif-Regular.39626825.woff2"},{"revision":"af7bc98b2200573686405dc784f53cf2","url":"static/media/KaTeX_Script-Regular.330012c5.woff2"},{"revision":"10ec8be67344c83bb4bbec989de57d8a","url":"static/media/KaTeX_Size1-Regular.c03114ec.woff2"},{"revision":"96a09bfe8978368486ffbbe628932b21","url":"static/media/KaTeX_Size2-Regular.a136fd4c.woff2"},{"revision":"2c2f0efb060cbd8357ebed929528f485","url":"static/media/KaTeX_Size3-Regular.5cce6e91.woff2"},{"revision":"d5822f1b0a0baeb76e6bded30dad1043","url":"static/media/KaTeX_Size4-Regular.cf8982ba.woff2"},{"revision":"641339e2cd86c7816bfb8028ee7f86e0","url":"static/media/KaTeX_Typewriter-Regular.e613fbb8.woff2"},{"revision":"7a44ea195f395e1d086010e44555a5c4","url":"static/media/materialdesignicons-webfont.e9db4005.woff2"},{"revision":"b407bc643909bb5e3520f354d8c5797d","url":"static/media/noto-sans-sc-latin-100.a534b968.woff2"},{"revision":"474217d05d8b03e5170176556311c588","url":"static/media/noto-sans-sc-latin-300.c4a70611.woff2"},{"revision":"9ad046bc118f6c2809a161e6b0f76d85","url":"static/media/noto-sans-sc-latin-400.96d7ebc0.woff2"},{"revision":"f5407fa5f8ffd05d32b886e2504ce918","url":"static/media/noto-sans-sc-latin-500.201a7f64.woff2"},{"revision":"e07e03f004c51de7d1b6a99227bd5211","url":"static/media/noto-sans-sc-latin-700.c6cd00f2.woff2"},{"revision":"9bb3d76e9a0d9ae2dd4a447015162f95","url":"static/media/noto-sans-sc-latin-900.6d9705a4.woff2"},{"revision":"7370c3679472e9560965ff48a4399d0b","url":"static/media/roboto-latin-100.c2aa4ab1.woff2"},{"revision":"f8b1df51ba843179fa1cc9b53d58127a","url":"static/media/roboto-latin-100italic.7f839a86.woff2"},{"revision":"ef7c6637c68f269a882e73bcb57a7f6a","url":"static/media/roboto-latin-300.37a7069d.woff2"},{"revision":"14286f3ba79c6627433572dfa925202e","url":"static/media/roboto-latin-300italic.c64e7e35.woff2"},{"revision":"479970ffb74f2117317f9d24d9e317fe","url":"static/media/roboto-latin-400.176f8f5b.woff2"},{"revision":"51521a2a8da71e50d871ac6fd2187e87","url":"static/media/roboto-latin-400italic.d022bc70.woff2"},{"revision":"020c97dc8e0463259c2f9df929bb0c69","url":"static/media/roboto-latin-500.f5b74d7f.woff2"},{"revision":"db4a2a231f52e497c0191e8966b0ee58","url":"static/media/roboto-latin-500italic.0d8bb5b3.woff2"},{"revision":"2735a3a69b509faf3577afd25bdf552e","url":"static/media/roboto-latin-700.c18ee39f.woff2"},{"revision":"da0e717829e033a69dec97f1e155ae42","url":"static/media/roboto-latin-700italic.7d8125ff.woff2"},{"revision":"9b3766ef4a402ad3fdeef7501a456512","url":"static/media/roboto-latin-900.870c8c14.woff2"},{"revision":"ebf6d1640ccddb99fb49f73c052c55a8","url":"static/media/roboto-latin-900italic.cb5ad999.woff2"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/echomd@^1.0.1/common/color.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/echomd@^1.0.1/common/constant.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/echomd@^1.0.1/common/math.css"},{"revision":"7b05658abd1f9ab5449d93616542c609","url":"styles/echomd@^1.0.1/editor_themes/dark.css"},{"revision":"fd12ea514a520525403e9b9be909efb6","url":"styles/echomd@^1.0.1/editor_themes/light.css"},{"revision":"80ed6e9363a18cf7959fd7f269f9de58","url":"styles/echomd@^1.0.1/editor_themes/one-dark.css"},{"revision":"b0134801114630a537cec5fe0d6b9284","url":"styles/echomd@^1.0.1/editor_themes/solarized-light.css"},{"revision":"49be949b20f748ec885c8527a08c2b7e","url":"styles/echomd@^1.0.1/index.js"},{"revision":"5c0cd29f557ea33c2a58e5ae59e7a852","url":"styles/echomd@^1.0.1/preview_themes/github-dark.css"},{"revision":"d1c0a3c339e15ceb0b0dccbf61b60e8a","url":"styles/echomd@^1.0.1/preview_themes/github-light.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/echomd@^1.0.1/preview_themes/github.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/echomd@^1.0.1/preview_themes/math.css"},{"revision":"5d928de80518becc6e1dab1ef3093dd7","url":"styles/echomd@^1.0.1/preview_themes/one-dark.css"},{"revision":"cb9b2df5f3fc477ef28b75e2ae08cfee","url":"styles/echomd@^1.0.1/preview_themes/solarized-light.css"},{"revision":"b1aba04470f34c403092b5834dd9c605","url":"styles/echomd@^1.0.1/prism_themes/github.css"},{"revision":"05a887fe7bd1ef42dfd82e67b116c847","url":"styles/echomd@^1.0.1/prism_themes/monokai.css"},{"revision":"41dd6125efb6b516970f63d9a7e8bb10","url":"styles/echomd@^1.0.1/prism_themes/one-dark.css"},{"revision":"3e19271e6e917500a0c0d3e7f379c6d1","url":"styles/echomd@^1.0.1/prism_themes/solarized-light.css"}]);

    /* custom cache rules*/
    const handler = workbox.precaching.createHandlerBoundToURL(
      `${
        self.location.hostname.match(/0xgg\./i) ? "/crossnote" : "" // Check GitHub Pages
      }/index.html`,
    );
    const navigationRoute = new workbox.routing.NavigationRoute(handler, {
      denylist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp("^/_"),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp("/[^/?]+\\.[^/]+$"),
      ],
    });
    workbox.routing.registerRoute(navigationRoute);

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    );

    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
