<template>
  <Head>
    <Title> Jahon Invest Plast | {{ $t("page_name_1") }}</Title>
    <Meta name="title" :content="$t('seo_contacts_title')" />
    <Meta name="description" :content="$t('seo_contacts_desc')" />
    <Meta name="keywords" :content="$t('seo_contacts_keys')" />
  </Head>
  <div class="py-60 bg-white">
    <page-title :name="$t('page_title_5')" />
    <section-one />
  </div>
</template>

<script>
import SectionOne from "../components/contact/SectionOne.vue";

export default {
  components: {
    SectionOne,
  },
};
</script>
