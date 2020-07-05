// sw load
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // for GitHub Actions
    navigator.serviceWorker
      .register("/WebNotif/sw.js", { scope: "/WebNotif/" })
      .then(
        // for local
        // navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
          return registration.showNotification("Hello notif", {
            body: "this is my original notification.",
          });
        },
        (err) => {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      )
      .then((v) => console.log(v));
  });
}

const btn = document.querySelector("#btn1");
btn?.addEventListener("click", () => {
  Notification.requestPermission()
    .then(() => new Promise((resolve) => setTimeout(resolve, 3000)))
    .then(() => {
      console.log("notif func called.");
      new Notification("Hello notif", {
        body: "this is my original notification.",
      });
    });
});
