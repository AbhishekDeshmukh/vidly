import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://3ae0679824a941d7be20aee65ba7607d@o404726.ingest.sentry.io/5269273",
  // });
}

function log(error) {
  console.log(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log,
};
