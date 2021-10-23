importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

 importScripts(
   "/precache-manifest.1a2709a5c7bb0c04bf3339d4fef67fd3.js"
 );
 
 workbox.clientsClaim();
 self.__precacheManifest = [].concat(self.__precacheManifest || []);
 workbox.precaching.suppressWarnings();
 workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
 
 workbox.routing.registerNavigationRoute("/index.html", {
   
   blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
 });