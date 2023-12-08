<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_6") }}</Title>
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
