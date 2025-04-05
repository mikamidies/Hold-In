export default defineNuxtPlugin(() => {
  window.replainSettings = { id: "5193e600-51e4-4624-aa95-c8212628e345" };

  (function (u) {
    const s = document.createElement("script");
    s.async = true;
    s.src = u;
    const x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })("https://widget.replain.cc/dist/client.js");
});
