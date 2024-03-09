export default defineNuxtPlugin(() => {
  window.replainSettings = { id: "d9ff733b-8898-4795-8869-e282c8281f96" };
  (function (u) {
    var s = document.createElement("script");
    s.async = true;
    s.src = u;
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })("https://widget.replain.cc/dist/client.js");
});
