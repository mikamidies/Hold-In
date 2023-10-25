<template>
  <NuxtLayout>
    
  </NuxtLayout>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      language: "ru",
    }
  },

  methods: {
    async getItems() {
      const response = await axios.get('translations', {
        headers: {
          Language: this.$i18n.locale ? this.$i18n.locale : '',
        }
      });
      sessionStorage.setItem('get_translate', true);
      sessionStorage.setItem('translate', JSON.stringify(response.data));
    },
  },

  mounted() {
    // Bu birinchida turish kerak tilni aniqlab beradi
    if(localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
      this.$i18n.locale = localStorage.getItem('language');
    } else {
      this.$i18n.locale = this.language;
    }



    this.getItems();
  }
}
</script>