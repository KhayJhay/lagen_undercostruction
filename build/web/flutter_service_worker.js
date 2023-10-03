'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5ee021654cf1586fe82000d448491d56",
"index.html": "1d0b8d9f8235132fdbc8756061f5b527",
"/": "1d0b8d9f8235132fdbc8756061f5b527",
"main.dart.js": "397ec094797ac69c85ca062351c86f50",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "1dc5d64cf9c3f2e2a53c96332229447c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "276686ff8386665faba764183861f84e",
"assets/AssetManifest.json": "ae0c9cfe7fa7c183aa1f93eff941339a",
"assets/NOTICES": "446a1b58e7abaddecfa6a8b57c7fd9e4",
"assets/FontManifest.json": "5e2157966f74f46fca989667443ecbea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2efcf0de4510bc1297cff4c71495a6e8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/img4.jpeg": "8db2fd917b9ba426ba629c7e9edb0d2d",
"assets/assets/images/img8.jpeg": "9bc0d1d1ef77ec4dafef831a422cf7b9",
"assets/assets/images/firstbg.jpeg": "f350218f8b0fd4131fe34b2759944a13",
"assets/assets/images/img9.jpeg": "121331f7d8a33904dcd07464eb357654",
"assets/assets/images/lagen.png": "9e1977228a2f74586969b0e01d485822",
"assets/assets/images/img5.jpeg": "a3c1a0c910a1d82be9d297fc3b82ee43",
"assets/assets/images/img2.jpeg": "939a6f068e44ef99c15918a305d620b7",
"assets/assets/images/getlog.png": "19b413543539b8b4ef17658972f3a3f5",
"assets/assets/images/img3.jpeg": "1c60665a55e522e733398e89bd028fee",
"assets/assets/images/lagensplash.jpeg": "6e1825bd930cf3c6bef1516730f4720b",
"assets/assets/images/img11.jpeg": "f50e5624b6520a309d8cc28b83625db1",
"assets/assets/images/img1.jpeg": "3d102641b268bd8dd218058dc15374f0",
"assets/assets/images/bgimage.gif": "ac4793557b2b53a0955d5c978040c4e1",
"assets/assets/images/img10.jpeg": "8406f05bce22cd6dcc5b0c1794d90fa9",
"assets/assets/images/img6.jpeg": "5adcd3f96f804d5362306c5d19051b2d",
"assets/assets/images/img7.jpeg": "da2821980f15d85b9f6218d561e26548",
"assets/assets/pngs/goog.png": "54fe26c1a9357f96948b82e13370aff0",
"assets/assets/pngs/rewards.png": "7d4f676141dcfda5dfaa98fe0355d51f",
"assets/assets/pngs/lagen.png": "1dc5d64cf9c3f2e2a53c96332229447c",
"assets/assets/pngs/r2.png": "2355a42c6d71d61f94d5bf20d6b344ca",
"assets/assets/pngs/g3.png": "93735e2ca6790f42fd5248d902cfdbd7",
"assets/assets/pngs/g2.png": "46a39380e19f084683b9f715522b3050",
"assets/assets/pngs/gown1.png": "7542067282b5b508914411298f96cdbb",
"assets/assets/pngs/r3.png": "a11135cb6ca08356967b3dbd77e5998c",
"assets/assets/pngs/r1.png": "f5f2e0fea0d11e0a9b87eb0caf991ec7",
"assets/assets/pngs/g1.png": "84c73145c90991f4b73eae7450c9b8b5",
"assets/assets/pngs/r4.png": "6aa1ee036b350db2325b2e8764e56ca8",
"assets/assets/pngs/black.png": "5ad85f0d90fa6ae99995ba6cb085160a",
"assets/assets/pngs/r5.png": "e331693e16618606fe0edca90ff93d95",
"assets/assets/pngs/r7.png": "4ae0304f9c365ab2a84f0cc2362dc3d5",
"assets/assets/pngs/r6.png": "2355a42c6d71d61f94d5bf20d6b344ca",
"assets/assets/pngs/pic1.png": "3991a2695d81ca48049b97928351afe3",
"assets/assets/pngs/pic3.png": "a8bb85c3bfa55801b57e411c4d31b0bf",
"assets/assets/pngs/pic2.png": "52afc4f7f87531cae08c8fe40f12a6dd",
"assets/assets/pngs/pp.png": "92d3afbbf72af90ea7f48dc8960a55e9",
"assets/assets/pngs/img3.png": "0d2887bf9d9559193896832293f02d13",
"assets/assets/pngs/bg1.png": "d69544c0e1ac3b7b4f8ca9179e8a03be",
"assets/assets/pngs/img2.png": "f4f6c5440354b642220a7d5e55c5872d",
"assets/assets/pngs/ic2.png": "d680d2b67153bd4b21338f9604b2176f",
"assets/assets/pngs/img1.png": "598186cdff2443bcb63035f697d70ac8",
"assets/assets/pngs/ic1.png": "95603aaa148ac77c6aab71cdb783c5ec",
"assets/assets/pngs/qr.png": "052c2d01196e3aedd829267649edc403",
"assets/assets/pngs/Line%25205.png": "1f1ec3c1ad1668f08d2cc807731bc74a",
"assets/assets/pngs/Line%25206.png": "49e8eb9eaf64c063479216f0ebc12bc9",
"assets/assets/pngs/pro.png": "0bd5482d4d08773301d6309b062dba9a",
"assets/assets/videos/lagenvid.mp4": "440d5f507abbd66f85bfa53718fee457",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
