<template>
  <Head>
    <Title> Jahon Invest Holding | {{ $t("page_name_4") }}</Title>
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
