'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"assets/NOTICES": "161f126a914723d1637c7bfb4f6c5dbb",
"assets/assets/images/background.png": "214a0a70e9ae043a415827cac6e18193",
"assets/assets/images/pipe_rotated.png": "fe5ae3384732b22c8bb0ce7eabfbecf1",
"assets/assets/images/bird_downflap.png": "90d735480ca11ffe8bc484d74d3d96c1",
"assets/assets/images/clouds.png": "374513ba0744127e31d02df48b4b5612",
"assets/assets/images/ground.png": "177b44c637520dc293a834c27a9d7778",
"assets/assets/images/bird_midflap.png": "d3b2614fed6bea3ee9b2f05fa0f29093",
"assets/assets/images/menu.jpg": "2fbd0163745b38c44f56df8ad4e47c3c",
"assets/assets/images/message.png": "72e7d3f9bb4f432a695ff01d40d33cbf",
"assets/assets/images/gameover.png": "b82eea6dbb4771dd5e9cd1cd7dc39648",
"assets/assets/images/pipe.png": "091333756afc93b5b7990b1ee4c43e63",
"assets/assets/images/bird_upflap.png": "0bd5de336539877152f2555da4fb44f9",
"assets/assets/audio/fly.wav": "4355dd665aa14ae22458f03e6b5643f8",
"assets/assets/audio/point.wav": "5a6c267d6743faf5069536fda2553b27",
"assets/assets/audio/collision.wav": "0941f389fbd65a06291a90dd17ef2e36",
"assets/assets/fonts/Game.ttf": "d67d06f7d85dbc599e8e422605c25130",
"assets/AssetManifest.bin.json": "3cc9c4d673b0d53fc3627e0dacadd6e0",
"assets/FontManifest.json": "9b66b99f794436da7c47a64013645f15",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "43504eed501cda16d3b52d6c5bb20af6",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "052a4e7826decda0364ff512429fe3d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_bootstrap.js": "364724062f5c699b02f8120df6698731",
"manifest.json": "bfb6c499d7ec88249f7b0f4b0c85229f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origin/master": "1bbbabae3df06c32e1ad48c052070465",
".git/refs/heads/master": "1bbbabae3df06c32e1ad48c052070465",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/logs/HEAD": "a0b8fb7ea33cf6f138cd4417013990f7",
".git/logs/refs/remotes/origin/master": "c32814e759685ba362e2646349692fea",
".git/logs/refs/heads/master": "3de561ff9ed89530970af4f85d813312",
".git/config": "c50501bee54116d145cf17e76f73a517",
".git/COMMIT_EDITMSG": "f4d5d0c0671be202bc241807c243e80b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "eced13f04a2404f2772895eadd145787",
".git/objects/65/23f6ff6ecc996ec2e679f8c708cbbdd8f3163a": "d0155ed55ab8905decddab0a5fef46ba",
".git/objects/a1/54511f77bdafecfe4d2b5279b4b94e358ef438": "574eb109a0fe26fe4d57d6242dd8fe71",
".git/objects/2a/e6bdb506174782b0c717263001e6c7785a0250": "442a2bf5de262379a8cb344b08133d91",
".git/objects/af/cb5ec982a3de74cb9186f6af3ba329d63a22bb": "d3e46e1bac2e4a4d273eb4afaa060732",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/df7f5757198bec3b165e12bc139b94178b8f19": "f67e8ec05d72c3f15b42edcb80b5f72e",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/77/92b91a5e1acc432ed12ac21af1935edce0618a": "668161cf970abfeb1f542fda512d98ae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/31/3e61e80922c8c2456e9c5ac0c695666a629cef": "7975c2e91df06140e870b0ce47615026",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d3/093cc6b5e9da33d59dc8cee4f89f4c5e6639f3": "98336abd9b0d99df4ce42fce43a28567",
".git/objects/c1/b00feebddf3661a3f1203f2ca656ba887882df": "c957b23a4c3d71fc8fe57b505b9af654",
".git/objects/c3/74f2b34f2d8a75f74641775970314b462cb337": "3d1d96fe377eaa6dd1ff8c5c70ebcbd3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/bc/75897709cd23174d5247c4c76830de873dad5f": "5a92f4b81f441d73a63969600eba2930",
".git/objects/5b/b1652c759c6ad77368f3a278f7fa17ab0447b6": "510c9b06311f99fa40aa907df8460cde",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8b/4e4b422b219a77f6df9c51b2f9aab084aaba4f": "756c1429f01b42cd19b3f564c0b2c29c",
".git/objects/92/cbc0674b9083a3b38e806776d45ba15753b2f8": "1c2cd85c51392873cd54862475a7256d",
".git/objects/92/43ab58b2910ae63393eb28ac5867237826d7e0": "1cccb6d59867d6fa9cddc25ed6890f25",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/91/f9766b154a2a8fe4554160f4995282a8cac55c": "90126ef6e94b24802992ccea18428cc0",
".git/objects/91/03a5fd0e1ed3306313a4c433b87ea7cd1bae92": "fa4e7287ca2d3bf7ee640034fa17e603",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/4f/d8d433b6402b0833ed43110d6d5c28bb95bfd8": "9f1842d3583f88908c063abfc54bf591",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a9/7ee24616fbd2de382f61d4a1f84cacce3d4fe4": "9bfec617dfc8ff8ecedd7c49e8f3ac1c",
".git/objects/3b/7b4f3284fa4563af8aceef1088a7847d1d651b": "efbeedafa34e725189754b60db171e27",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1e/55519aae50200f660e04537fafe6134a1dddb0": "c3a7c9019d1b09007c91160524a79466",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/428ccf801c157708880d8ade469f690372f594": "06a69568866741d644229ca88eef5b03",
".git/objects/f0/bbd419a8b63a61beb7cec9b3ecbed9f7147ebc": "8cd256fa39008a552e9ba4613a04e601",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/d2/19dd72d2933bb907022913b215835877a9d796": "ce0575470690f3e4910683eee8476f92",
".git/objects/13/358b0c65b4fda088bf0d17de92a4e03ae1e036": "f8b8d8318a16620a5b82859d71722d13",
".git/objects/13/48e91eac8ca34a69d28a5cc717c82af6ff9e07": "6932ac53ecca6f2682f0eb865d14d5ef",
".git/objects/13/6f1e6837f6d29ed335658dd27497da527d709e": "b7b0273fe704d11653bad4b7dd8ade10",
".git/objects/05/c371fc8fbe62f72336ffc7be78b3a445734fb3": "6f1e5f1753c670fa9c60a766cb61c658",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/27/6beb9ab5785d9a19d22c35c1a89f79ea411e23": "bdb5deb12b9ef268086e7b30ec44e3e8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a3/7c774a76bbe90ec45ff427f262a4e3cd7a4263": "46eb491dfc8aed4af4102ea047e3f36f",
".git/objects/15/33ab423b450f429dd3ac146d8c02b53c66c880": "382226af3e55a82bb209657e7ced6670",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/0e/51ba1c3b733b555b6233167ad06f1d3ff5bff6": "cb59336cd611a1dd8efb7ee771b3052d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/bc5aae85fd04e7027384701ca9da38ffed050a": "ca2561b74f70c4e890ca7ee0ca5b7057",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
"index.html": "fcea701c189a76a0c6daa75be785d10c",
"/": "fcea701c189a76a0c6daa75be785d10c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "be7de2c99c7fff7f280388419486c958",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"version.json": "2df906e65dfcb389a5888523a4d3180b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
