<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_3") }}</Title>
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
