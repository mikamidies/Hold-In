<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_gallery_title')" />
    <Meta name="description" :content="$t('seo_gallery_desc')" />
    <Meta name="keywords" :content="$t('seo_gallery_keys')" />
  </Head>
  <div class="py-60 bg-white">
    <page-title :name="$t('page_title_3')" />
    <section-one />
  </div>
</template>

<script>
import SectionOne from "../components/gallery/SectionOne.vue";

export default {
  components: { SectionOne },
};
</script>
