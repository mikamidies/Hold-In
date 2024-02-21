<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_directions_title')" />
    <Meta name="description" :content="$t('seo_directions_desc')" />
    <Meta name="keywords" :content="$t('seo_directions_keys')" />
  </Head>
  <div class="py-60 bg-black">
    <page-title :name="$t('page_title_2')" />
    <section-one />
  </div>
</template>

<script>
import SectionOne from "../components/address/SectionOne.vue";

export default {
  components: {
    SectionOne,
  },
};
</script>
