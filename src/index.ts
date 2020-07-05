type RegResolve = (reg: ServiceWorkerRegistration) => void;
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
          return Promise.resolve(registration);
        },
        (err) => {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      )
      .then((reg) => {
        if (reg) {
          return new Promise((resolve: RegResolve) =>
            setTimeout(() => resolve(reg), 5000)
          );
        } else {
          throw new Error("above error");
        }
      })
      .then((reg) => {
        reg.showNotification("不磨わっと", {
          body: "なんなノォ!?",
          icon: "/WebNotif/wat.jpg",
        });
      })
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
