<template>
  <section
    class="py-40 md:py-50 lg:py-62 xl:py-74 2xl:py-88 relative overflow-hidden"
    :class="`bg-${bg_color} text-${color}`"
  >
    <div class="bg absolute top-0 left-0"></div>
    <div class="my_container grid lg:grid-cols-11 gap-20 z-10 relative">
      <div class="w-full lg:col-span-6">
        <p
          class="font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24"
          :class="color == 'black' ? 'text-black' : 'text-white'"
        >
          {{ $t("main_text_1") }}
        </p>
        <p
          class="text-16 lg:text-18 xl:text-20 font-interfaces leading-150 mb-24"
        >
          {{ text_1 }}
        </p>
        <p
          class="text-14 lg:text-16 xl:text-18 font-interfaces leading-150 mb-40 lg:mb-54"
          :class="color == 'black' ? 'text-grey' : 'text-grey_40'"
        >
          {{ text_2 }}
        </p>

        <NuxtLink
          to="/about"
          v-if="color == 'black'"
          class="flex items-center gap-16 mb-20 lg:mb-54"
        >
          <p class="text-16 md:text-18 text-blue whitespace-nowrap">
            {{ $t("main_text_3") }}
          </p>
          <img
            class="w-20 md:w-24"
            src="../../assets/icons/arrow-right-blue.png"
            alt=""
          />
        </NuxtLink>

        <div class="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-7">
          <div
            class="flex flex-col py-10 px-20 pb-20 md:pb-30"
            :class="
              color == 'black' ? 'bg-white_primary text-black' : 'text-white'
            "
          >
            <div class="flex items-start gap-15">
              <p
                class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
              >
                {{ $t("num_1") }}
              </p>
              <img
                class="w-22 h-22"
                src="../../assets/icons/plus-blue.png"
                alt=""
              />
            </div>
            <p class="text-18 font-interfaces flex-auto">
              {{ $t("main_text_5") }}
            </p>
          </div>
          <div
            class="flex flex-col py-10 px-20 pb-20 md:pb-30"
            :class="
              color == 'black' ? 'bg-white_primary text-black' : 'text-white'
            "
          >
            <div class="flex items-start gap-15">
              <p
                class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
              >
                {{ $t("num_2") }}
              </p>
              <img
                class="w-22 h-22"
                src="../../assets/icons/plus-blue.png"
                alt=""
              />
            </div>
            <p class="text-18 font-interfaces flex-auto">
              {{ $t("main_text_6") }}
            </p>
          </div>
          <div
            class="flex flex-col py-10 px-20 pb-20 md:pb-30"
            :class="
              color == 'black' ? 'bg-white_primary text-black' : 'text-white'
            "
          >
            <div class="flex items-start gap-15">
              <p
                class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
              >
                {{ $t("num_3") }}
              </p>
              <img
                class="w-22 h-22"
                src="../../assets/icons/plus-blue.png"
                alt=""
              />
            </div>
            <p class="text-18 font-interfaces flex-auto">
              {{ $t("main_text_7") }}
            </p>
          </div>
          <div
            class="flex flex-col py-10 px-20 pb-20 md:pb-30"
            :class="
              color == 'black' ? 'bg-white_primary text-black' : 'text-white'
            "
          >
            <div class="flex items-start gap-15">
              <p
                class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
              >
                {{ $t("num_4") }}
              </p>
              <img
                class="w-22 h-22"
                src="../../assets/icons/plus-blue.png"
                alt=""
              />
            </div>
            <p class="text-18 font-interfaces flex-auto">
              {{ $t("main_text_8") }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="holder flex items-center justify-center w-full lg:col-span-5 min-h-200"
      >
        <img class="gaffer" src="../../assets/images/logo_img.gif" alt="" />
        <div class="flex items-center gap-20">
          <div class="masked"></div>
          <!-- <img
            v-if="color == 'white'"
            class="w-150 md:w-180 lg:w-180 xl:w-220 2xl:w-240"
            src="../../assets/images/logo_earth_white.png"
            alt=""
          /> -->
          <!-- <img
            v-else
            class="w-150 md:w-180 lg:w-180 xl:w-220 2xl:w-240"
            src="../../assets/images/logo_earth_purple.png"
            alt=""
          /> -->
          <img
            v-if="color == 'white'"
            class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300"
            src="../../assets/images/logo_name.png"
            alt=""
          />
          <img
            v-else
            class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300"
            src="../../assets/images/logo_name_blue.png"
            alt=""
          />
        </div>
      </div>

      <div class="grid lg:hidden grid-cols-2 xl:grid-cols-4 gap-7">
        <div
          class="flex flex-col py-10 px-20 pb-20 md:pb-30"
          :class="
            color == 'black' ? 'bg-white_primary text-black' : 'text-white'
          "
        >
          <div
            class="flex items-center md:items-start justify-center md:justify-start gap-15"
          >
            <p
              class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
            >
              {{ text_3 }}
            </p>
            <img
              class="w-16 h-16 md:w-22 md:h-22"
              src="../../assets/icons/plus-blue.png"
              alt=""
            />
          </div>
          <p
            class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto"
          >
            {{ $t("main_text_5") }}
          </p>
        </div>
        <div
          class="flex flex-col py-10 px-20 pb-20 md:pb-30"
          :class="
            color == 'black' ? 'bg-white_primary text-black' : 'text-white'
          "
        >
          <div
            class="flex items-center md:items-start justify-center md:justify-start gap-15"
          >
            <p
              class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
            >
              {{ text_4 }}
            </p>
            <img
              class="w-16 h-16 md:w-22 md:h-22"
              src="../../assets/icons/plus-blue.png"
              alt=""
            />
          </div>
          <p
            class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto"
          >
            {{ $t("main_text_6") }}
          </p>
        </div>
        <div
          class="flex flex-col py-10 px-20 pb-20 md:pb-30"
          :class="
            color == 'black' ? 'bg-white_primary text-black' : 'text-white'
          "
        >
          <div
            class="flex items-center md:items-start justify-center md:justify-start gap-15"
          >
            <p
              class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
            >
              {{ text_5 }}
            </p>
            <img
              class="w-16 h-16 md:w-22 md:h-22"
              src="../../assets/icons/plus-blue.png"
              alt=""
            />
          </div>
          <p
            class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto"
          >
            {{ $t("main_text_7") }}
          </p>
        </div>
        <div
          class="flex flex-col py-10 px-20 pb-20 md:pb-30"
          :class="
            color == 'black' ? 'bg-white_primary text-black' : 'text-white'
          "
        >
          <div
            class="flex items-center md:items-start justify-center md:justify-start gap-15"
          >
            <p
              class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140"
            >
              {{ text_6 }}
            </p>
            <img
              class="w-16 h-16 md:w-22 md:h-22"
              src="../../assets/icons/plus-blue.png"
              alt=""
            />
          </div>
          <p
            class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto"
          >
            {{ $t("main_text_8") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      text_1: "",
      text_2: "",

      text_3: "17",
      text_4: "600",
      text_5: "40",
      text_6: "5",
    };
  },

  props: {
    color: {
      type: String,
      required: true,
    },
    bg_color: {
      type: String,
      required: true,
    },
  },

  methods: {
    getTranslate() {
      if (sessionStorage.getItem("translate")) {
        this.data = JSON.parse(sessionStorage.getItem("translate"));

        this.text_1 = this.data["index.company_about_1"];
        this.text_2 = this.data["index.company_about_2"];

        this.text_3 = this.data["index.about_text_1"];
        this.text_4 = this.data["index.about_text_2"];
        this.text_5 = this.data["index.about_text_3"];
        this.text_6 = this.data["index.about_text_4"];
      } else {
        setTimeout(() => {
          this.getTranslate();
        }, 100);
      }
    },
  },

  mounted() {
    this.text_1 = this.$t("main_text_2");
    this.text_2 = this.$t("main_text_3");

    this.getTranslate();
  },
};
</script>

<style scoped>
.holder {
  position: relative;
}
.gaffer {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%) scale(5);
  z-index: -1;
  opacity: 0.05;
}
.masked {
  width: 270px;
  height: 230px;
  background-color: #3b2bb8;
  -webkit-mask-image: url(../../assets/images/logo_img.gif);
  mask-image: url(../../assets/images/logo_img.gif);
}
</style>
