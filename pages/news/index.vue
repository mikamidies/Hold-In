<template>
  <Head>
    <Title> Jahon Invest Plast | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_news_title')" />
    <Meta name="description" :content="$t('seo_news_desc')" />
    <Meta name="keywords" :content="$t('seo_news_keys')" />
  </Head>
  <div class="py-60 bg-white">
    <page-title :name="$t('page_title_4')" />
    <section-one />
  </div>
</template>

<script>
import SectionOne from "../../components/news/SetcionOne.vue";

export default {
  components: {
    SectionOne,
  },
};
</script>

<style scoped>
* {
  transition: 0s;
}
</style>
