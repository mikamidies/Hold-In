<template>
  <div id="main_page" class="" :class="`bg-${bg_color} text-${color}`">
    <Header v-if="load == true"></Header>
    <div class="flex-1">
      <NuxtPage />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: 'nUO7GilXBqILa-oev4NR8jg4PwBAR7cx1w_EpExPeWI'
        }
      ]
    }
  },

  data() {
    return {
      path: "",
      load: false,
      color: "white",
      bg_color: "black",
    };
  },

  watch: {
    $route() {
      this.load = true;
      this.path = this.$route.path;

      setTimeout(() => {
        if (
          this.$route.path == "/" ||
          this.$route.path == "/about" ||
          this.$route.path == "/holdings"
        ) {
          this.color = "white";
          this.bg_color = "black";
          sessionStorage.setItem("color", "white");
          sessionStorage.setItem("bg_color", "black");
        } else {
          this.color = "black";
          this.bg_color = "white";
          sessionStorage.setItem("color", "black");
          sessionStorage.setItem("bg_color", "white");
        }
      }, 10);
    },
  },

  methods: {},

  mounted() {
    this.load = true;
    this.path = this.$route.path;

    if (
      this.$route.path == "/" ||
      this.$route.path == "/about" ||
      this.$route.path == "/holdings"
    ) {
      this.color = "white";
      this.bg_color = "black";
      sessionStorage.setItem("color", "white");
      sessionStorage.setItem("bg_color", "black");
    } else {
      this.color = "black";
      this.bg_color = "white";
      sessionStorage.setItem("color", "black");
      sessionStorage.setItem("bg_color", "white");
    }

    window.addEventListener("scroll", () => {
      if (
        this.$route.path == "/" ||
        this.$route.path == "/about" ||
        this.$route.path == "/holdings"
      ) {
        this.color = "white";
        this.bg_color = "black";
        sessionStorage.setItem("color", "white");
        sessionStorage.setItem("bg_color", "black");
      } else {
        this.color = "black";
        this.bg_color = "white";
        sessionStorage.setItem("color", "black");
        sessionStorage.setItem("bg_color", "white");
      }
    });
  },
};
</script>
