// import './cookieConsent.js';

var app = new Vue({
  router,
  el: "#app",
  // Reactive dynamic data (anything that needs updating)
  data() {
    return {
      pageData: []
    };
  },
  mounted() {
    this.pageUpdatedSequencer();
    window.onload = function () {
      window.initCookieConsent();
    };
  }
});
