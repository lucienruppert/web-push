self.addEventListener("push", (event) => {
  event.waitUntil(self.registration.sendNotification("test message"));
});
