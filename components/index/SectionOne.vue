<template>
  <section class="section_one flex flex-col relative">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9XIJO5inmvM?autoplay=1&mute=1&controls=0&loop=1&playlist=9XIJO5inmvM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="my_container relative z-10 flex-auto pt-140 lg:pt-156 2xl:pt-180 pb-30 lg:pb-40 2xl:pb-50"
    >
      <div class="flex flex-col w-full h-full">
        <p
          class="text-white text-32 md:text-40 lg:text-50 xl:text-56 2xl:text-72 text-center font-interfaces font-bold leading-150 mb-auto"
        >
          {{ text_1 }}
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          <div
            v-for="item in holdings"
            :key="item.id"
            class="index_card flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 cursor-pointer px-20"
          >
            <a :href="item.link" target="_blank" rel="nofollow">
              <p
                class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center"
              >
                {{ item.title }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {},
      text_1: "Jahon Invest Holding",
      text_2: "Premium Pipe Print",
      text_3: "JIP (Jahon Invest Plast)",
      text_4: "Modern City",
      text_5: "Zaprafka",

      holdings: [],
      business: [],
      data_count: 0,
      loading: false,
    };
  },

  methods: {
    getTranslate() {
      if (sessionStorage.getItem("translate")) {
        this.data = JSON.parse(sessionStorage.getItem("translate"));

        this.text_1 = this.data["index.company_name"];
        this.text_2 = this.data["index.company_1"];
        this.text_3 = this.data["index.company_2"];
        this.text_4 = this.data["index.company_3"];
        this.text_5 = this.data["index.company_4"];
      } else {
        setTimeout(() => {
          this.getTranslate();
        }, 100);
      }
    },

    async getHoldings() {
      this.loading = true;
      const response = await axios.get(
        this.$config.public.apiUrl + "holdings",
        {
          headers: {
            Language: this.$i18n.locale ? this.$i18n.locale : "",
          },
        }
      );
      this.loading = false;
      this.holdings = response.data.results;
      this.data_count = response.data.count;

      if (!sessionStorage.getItem("holdings")) {
        sessionStorage.setItem(
          "holdings",
          JSON.stringify(response.data.results)
        );
      }
    },

    async getBusiness() {
      this.loading = true;
      const response = await axios.get(
        this.$config.public.apiUrl + "business",
        {
          headers: {
            Language: this.$i18n.locale ? this.$i18n.locale : "",
          },
        }
      );
      this.loading = false;
      this.business = response.data.results;
      this.data_count = response.data.count;

      if (!sessionStorage.getItem("business")) {
        sessionStorage.setItem(
          "business",
          JSON.stringify(response.data.results)
        );
      }
    },
  },

  mounted() {
    this.getTranslate();
    this.getHoldings();
    this.getBusiness();
  },
};
</script>

<style scoped>
* {
  transition: 0.5s;
}

.section_one {
  width: 100%;
  height: 100vh;
  position: relative;
}
.section_one::after {
  background: linear-gradient(180deg, #0a0a10 0%, rgba(10, 10, 16, 0) 100%);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.index_card:hover {
  color: #fff;
  transition-duration: 0.2s;
  background-color: hsla(0, 0%, 100%, 0.16);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: 0.5s;
}
.index_card:nth-child(4) {
  border-right: 0;
}
.title {
  font-size: 72px;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
}

.text {
  text-shadow: 0 0 2px rgba(0, 0, 0, 1);
}
.grid {
  /* border: 1px solid var(--grey-80, #353437); */
}
.index_card {
  margin-left: -1px;
  border: 1px solid var(--grey-80, #353437);
  position: relative;
  min-height: 264px;
}
.index_card a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.5);
  pointer-events: none;
}
@media (max-width: 1350px) {
  .title {
    font-size: 64px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 48px;
  }
  .index_card {
    min-height: 160px;
  }
  .section_one {
    height: 70vh;
  }
  iframe {
    transform: scale(2.7);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
  }
}
</style>
