<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_1") }}</Title>
  </Head>

  <SectionOne />
  <SectionTwo color="black" bg_color="white" />
  <SectionThree />
  <SectionFour />
</template>

<script>
import axios from "axios";
import SectionOne from "~/components/index/SectionOne";
import SectionTwo from "~/components/index/SectionTwo";
import SectionFour from "~/components/index/SectionFour";
import SectionThree from "~/components/index/SectionThree";

export default {
  data() {
    return {};
  },

  components: {
    SectionOne,
    SectionTwo,
    SectionFour,
    SectionThree,
  },

  methods: {},

  async mounted() {},
};
</script>
