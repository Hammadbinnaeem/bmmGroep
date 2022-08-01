'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "43bc6a016d44e5d08740234dc8e52279",
"assets/assets/images/addEmployee.png": "f29e6f75ef2ee27a3b661e319b805be2",
"assets/assets/images/agenda.png": "b5dba0a636ef0a0b4061b6d6a4bb9148",
"assets/assets/images/agenda_view.png": "b6c60583d4fd10d2e13182a50ac9028c",
"assets/assets/images/assignment.png": "9a330befecfcb17283df12b1149daf5e",
"assets/assets/images/builder.png": "dddb50309774457467e1712698428627",
"assets/assets/images/calendar.png": "a8287d942c8f44c922a4d3303fc7a6e6",
"assets/assets/images/camera.png": "c644599121a43657ff2f7a47f876e49c",
"assets/assets/images/check.png": "c4087d5b4b92f2297e08d299e3f387de",
"assets/assets/images/checkmark.png": "c3d32371eadf7baee41377263eb64ddc",
"assets/assets/images/copy-writing.png": "a780759d2892004e2d075565aae7b256",
"assets/assets/images/dashboard.png": "0e2de7e5e781a367753dae3901572b97",
"assets/assets/images/database.png": "cc781cde6a02d86b60a1dedea7b9dd05",
"assets/assets/images/delete.png": "7bf055c6030562b08ccf0012a8b29f3f",
"assets/assets/images/documents.png": "09ea2b6bd551b0443a26a0829272049e",
"assets/assets/images/email.png": "6a3676ae80b1498762c09376198147ad",
"assets/assets/images/emailIcon.png": "6e7ef152cd88c8c4f1feec7e0057ac16",
"assets/assets/images/hand.png": "23d19701846f10ef1d2712089cc53d1d",
"assets/assets/images/homeImage.png": "6f16fe3f01d3421b6f8c153cd7da93c0",
"assets/assets/images/inbox.png": "e37ddcacfab4460dd0b199e09ac41920",
"assets/assets/images/list.png": "178dba1583ccf1faf823f77f4268770f",
"assets/assets/images/logout.png": "6fade482d1ad241de6db9cdb67d5675b",
"assets/assets/images/notes.png": "24a9e3b554e3b3939c3970b6bb809c42",
"assets/assets/images/open_receipt.png": "ba096c8adf1cbba6ff70453c214275e5",
"assets/assets/images/profile.png": "05cd1e0463ca60861104ddcb062a5431",
"assets/assets/images/profileAvator.png": "6a722e7f363847cc76ce5032a8e6d738",
"assets/assets/images/search.png": "55d5b70138d756e49e7c7b13abc222df",
"assets/assets/images/send.png": "81763348fb28132e72ad87e711ed530d",
"assets/assets/images/sendButton.png": "7437212719a937c8e14b700db400acbc",
"assets/assets/images/sure.png": "13759b57e8eb2f98955cd8c91fc12ec9",
"assets/assets/images/tool.png": "c7bd91756edfa3dc81b8894096d6d045",
"assets/assets/images/user.png": "ab1abf3cc26498d4a81959f40ab0aaf4",
"assets/assets/images/visibility.png": "08b4ff477014f27ce8cad51fbc056f2c",
"assets/assets/translations/en.json": "d18d49da6d497cdb98c464d343e43154",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cd499e15c4426b57a106c7c3a79d8223",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7230242922c278f91a5303f31b86caa4",
"/": "7230242922c278f91a5303f31b86caa4",
"main.dart.js": "736fd8dda0f174e4418428efe181dd36",
"manifest.json": "b8f0304c12aed994fe23d56f6541936c",
"version.json": "978bcf2db877073a97cc7b05fd82696b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
