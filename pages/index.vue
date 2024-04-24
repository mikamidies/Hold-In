<template>
  <Head>
    <Title> Jahon Invest Plast | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_index_title')" />
    <Meta name="description" :content="$t('seo_index_desc')" />
    <Meta name="keywords" :content="$t('seo_index_keys')" />
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

  methods: {},

  components: {
    SectionOne,
    SectionTwo,
    SectionFour,
    SectionThree,
  },

  async mounted() {},
};
</script>
