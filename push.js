let push = require("web-push");

// const vapIdKeys = push.generateVAPIDKeys();

// 1. Generating The Vapid Keys
const vapIdKeys = {
  publicKey:
    "BOq3NBCEquV0lrUlxKqNb-FQLP5adry8zGlZ0Vw7INXP77MSdD-Jc2TtzPkaK6BeKO3zITPq5oKQ6qpicG-o3Xk",
  privateKey: "E2VI-2GpLWWdl4qxhFcNMWm4M5Xjaacu4rozqhGsEzU",
};

// 2. Setting Vapid details
push.setVapidDetails(
  "mailto:luciendelmar",
  vapIdKeys.publicKey,
  vapIdKeys.privateKey
);

const subscribers = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cJ4NRkRabVM:APA91bHsGC-BnY6G3ppxZWzpXhr2-KWN51WQfKNuej5EmlJN8DNxApLXvF-YOJXfVJhRl6f_nIX_B94p59aoLn09g7prMv-vXanXOCMgXvn2bjCNgAOSY216uR1Xb8RFhZMFPvqqyqcU",
  expirationTime: null,
  keys: {
    p256dh:
      "BNwBGGYVnY_z-I1303HxV7ngCgfm2bqGCfvztrKcKN9M-ZYBta6rcfDq7Zo4H2I9Q-R2PtMgBek0oRlQh-5QAwg",
    auth: "rW1W9RD0E-V5SWZLnGik4g",
  },
};

// const subscribers = {
//   endpoint:
//     "https://web.push.apple.com/QIFXREn2y5P1RFIaOkqJtcm5TBX5Gnr5kPEaIBKna15e5OH2Ls63LkLvTuboo9fgauM8q5yQDFZrW4sat0PkK2o6P_nDGfZNI4xfmXR_ZPoKkEuRnxmZkXDwQCs7V4WvVB219OUoyWL6SCVPuIYfKUD46iqqyAb3EYTxwXsv92U",
//   keys: {
//     p256dh:
//       "BOlfEQ_5W5LGQVcU3-WPLoCIAgh6chwZosD4DnhSaNR7GK3tBQtWJtnlQ3T0MoNiHco59etHBn8FALKjFonofBs",
//     auth: "7020TPQmkZyZWOeTf-L11A",
//   },
// };

push.sendNotification(subscribers, "testMessage");
