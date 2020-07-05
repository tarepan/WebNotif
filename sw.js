console.log("I am sw.js12");

self.addEventListener("install", function (event) {
  console.log("SW install step");
  // Perform install steps
  event.waitUntil(
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
      self.registration.showNotification("Hello notif", {
        body: "this is my original notification.",
      })
    )
  );
});

self.addEventListener("notificationclick", function (event) {
  console.log("[Service Worker] Notification click Received.");
  event.notification.close();
  //   event.waitUntil(clients.openWindow("https://developers.google.com/web/"));
});
// navigator.serviceWorker.ready.then((registration) => {
//   registration.showNotification("Hello notif", {
//     body: "this is my original notification.",
//   });
// });
