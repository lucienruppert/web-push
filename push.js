let push = require("web-push");

// const vapIdKeys = push.generateVAPIDKeys();

// 1. Generating The Vapid Keys
const vapIdKeys = {
  publicKey:
    "BOq3NBCEquV0lrUlxKqNb-FQLP5adry8zGlZ0Vw7INXP77MSdD-Jc2TtzPkaK6BeKO3zITPq5oKQ6qpicG-o3Xk",
  privateKey: "E2VI-2GpLWWdl4qxhFcNMWm4M5Xjaacu4rozqhGsEzU",
};

// 2. Setting Vapid details
push.setVapidDetails("mailto:luciendelmar", vapIdKeys.publicKey, vapIdKeys.privateKey)

let subscribers;
push.sendNotification(subscribers, "testMessage");