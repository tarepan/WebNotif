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
