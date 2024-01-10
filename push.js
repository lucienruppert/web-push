const push = require("web-push");

// const vapIdKeys = push.generateVAPIDKeys();
// console.log(vapIdKeys);

// 1. Generating The Vapid Keys
const vapIdKeys = {
  publicKey:
    "BCp-kQUClPamzffhN9BFw9D1KeXy29yarMVOIbMTIp4ll8PAVyUEduzRqZuV1eCbNid5wXC6Sjw10RMy1qsHgfI",
  privateKey: "PRVyw-1P2LvHUk8_oEcQGMPqyPXzfYqUlWWouzCzzr0",
};

// 2. Setting Vapid details
push.setVapidDetails(
  "mailto:luciendelmar",
  vapIdKeys.publicKey,
  vapIdKeys.privateKey
);

const subscribers = [
  {
    endpoint:
      "https://fcm.googleapis.com/fcm/send/cijoeUAbJRY:APA91bEEHedYgkmmUwfixWB54YyGeayI9BYEG4evne2V5FnLbu6YlS3UpBnrRdoRZ3LONYZbau0bO95HMDvclnaxi8hfeMewF44WKp5ETEK5ecyl5_drXjcc14BHN7WWYBOKKEjRDBI8",
    expirationTime: null,
    keys: {
      p256dh:
        "BLMQ2VA8MJmsu2ckbfG6tLHt7nQzV1-McEKz_Ougq4BJZKhBq8KFGZpjeguLN0diHroTeCJZr8Nn5eeGZ5kqcbA",
      auth: "bccTYmtdGUDtVSNElQzkRg",
    },
  },
  {
    endpoint:
      "https://web.push.apple.com/QPVD4mrOeX7Ywt-FFBpWSo5JuKaXDrzwXGJWm0UJiIZLIbZ1hf16bBud7oRniEu13rIP5rLngk6-CFNNvwW7oFLIpPVC85rV1JIEc-wyReua6kSlVXeCUDVi7acA200ad2T4nO_CfhQ4COKYb9GuZl8zan5S2hRNCv98hLznoJA",
    keys: {
      p256dh:
        "BIZIzE4EjAST5WNgG7L881vbr16Gmr20CVhyPxGL2SBcZSts7dTotJ1d2kOu_mWAeTws5YgWtqidX3onJxMvbMg",
      auth: "A56gElHUT-wu0ILV3jQihQ",
    },
  },
];

subscribers.forEach((subscriber) =>
  push.sendNotification(subscriber, "testMessage")
);
