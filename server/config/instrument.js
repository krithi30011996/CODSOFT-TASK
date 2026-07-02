// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://9f3d351ec5a16297be99d31def266f01@o4511652596023296.ingest.us.sentry.io/4511665087184896",
  integrations: [Sentry.mongooseIntegration()],

  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});