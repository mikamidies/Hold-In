<template>
  <Head>
    <Title> Jahon Invest Plast | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_about_title')" />
    <Meta name="description" :content="$t('seo_about_desc')" />
    <Meta name="keywords" :content="$t('seo_about_keys')" />
  </Head>
  <div class="py-60 bg-black">
    <page-title :name="$t('page_title_1')" />
    <section-one color="white" bg_color="black" />
    <section-two></section-two>
    <section-three></section-three>
  </div>
</template>

<script>
import SectionOne from "../components/index/SectionTwo.vue";
import SectionTwo from "../components/about/SectionTwo.vue";
import SectionThree from "../components/about/SectionThree.vue";

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
  },
};
</script>
