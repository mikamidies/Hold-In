<template>
    <div id="section_two" class="bg-white_primary pl-16 md:pl-24 lg:pl-56 xl:pl-150 2xl:pl-120">
        <div class="box p-16 lg:p-24 xl:p-42 2xl:p-32 rounded-l-16 xl:rounded-l-24 flex flex-col lg:flex-row gap-28 xl:gap-34 2xl:gap-48">
            <!-- Left -->
            <div class="w-full lg:w-335 xl:w-400 2xl:w-670 shrink-0 rounded-8 overflow-hidden">
                <img class="w-full h-auto" src="../../assets/images/inner_img_3.png" alt="">
            </div>

            <!-- Right -->
            <div class="flex-auto">
                <div class="flex items-stretch gap-14 xl:gap-16 mb-18 xl:mb-24 2xl:mb-32">
                    <div class="w-4 h-auto block rounded-10 bg-green shrink-0"></div>

                    <div>
                        <p class="text-16 2xl:text-18 font-interfaces_600 text-grey_40 mb-12 xl:mb-18">{{ $t('inner_text_4') }}</p>
                        <h2 class="text-18 lg:text-20 xl:text-24 2xl:text-32 font-halvar_breit_700 text-grey">{{ text_3 }}</h2>
                    </div>
                </div>
                <p class="text-16 2xl:text-18 font-interfaces mb-32 2xl:mb-40">{{ text_4 }}</p>


                <div class="flex flex-col md:flex-row gap-16 lg:gap-40 mb-24 xl:mb-34 2xl:mb-40">
                    <div class="flex items-start gap-24">
                        <p class="text-42 xl:text-50 2xl:text-72 font-babesNeue min-w-60 text-green uppercase leading-150">{{ text_5 }}</p>

                        <div class="md:max-w-265">
                            <h3 class="text-18 2xl:text-20 font-interfaces_500 text-black leading-150 mb-8">{{ text_10 }}</h3>
                            <p class="text-16 font-interfaces text-grey_border">{{ text_6 }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-24">
                        <p class="text-42 xl:text-50 2xl:text-72 font-babesNeue min-w-60 text-green uppercase leading-150">{{ text_7 }}</p>

                        <div class="xl:max-w-202">
                            <h3 class="text-18 2xl:text-20 font-interfaces_500 text-black leading-150 mb-8">{{ text_11 }}</h3>
                            <p class="text-16 font-interfaces text-grey_border">{{ text_8 }}</p>
                        </div>
                    </div>
                </div>

                <nuxt-link to="/about" class="w-full md:w-auto inline-flex items-center justify-center gap-10 px-56 py-14 rounded-30 border border-green">
                    <p class="text-16 font-halvar_breit_700 leading-150 text-green uppercase">{{ $t('inner_text_11') }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            data: {},
            text_3: '',
            text_4: '',
            text_5: '',
            text_6: '',
            text_7: '',
            text_8: '',
            text_9: '',
            text_10: '',
            text_11: '',
        }
    },

    methods: {
        getTranslate() {
            if(sessionStorage.getItem('translate')) {
                this.data = JSON.parse(sessionStorage.getItem('translate'));
                
                this.text_3 = this.data["busines_inner.text_3"];
                this.text_4 = this.data["busines_inner.text_4"];
                this.text_5 = this.data["busines_inner.text_5"];
                this.text_6 = this.data["busines_inner.text_6"];
                this.text_7 = this.data["busines_inner.text_7"];
                this.text_8 = this.data["busines_inner.text_8"];
                this.text_9 = this.data["busines_inner.text_9"];
                this.text_10 = this.data["busines_inner.text_10"];
                this.text_11 = this.data["busines_inner.text_11"];
            } else {
                setTimeout(() => {
                    this.getTranslate()
                }, 100);
            }
        }
    },
    
    mounted() {
        this.text_3 = this.$t('inner_text_5');
        this.text_4 = this.$t('inner_text_6');
        this.text_6 = this.$t('inner_text_8');
        this.text_8 = this.$t('inner_text_10');
        this.text_10 = this.$t('inner_text_7');
        this.text_11 = this.$t('inner_text_9');

        this.getTranslate();
    }
}
</script>


<style scoped>
.box {
    border: 1px solid #F5F5F7;
    box-shadow: -40px 32px 104px 0px rgba(2, 1, 5, 0.08);
    background: #fff url('../../assets/images/inner_earth.png') no-repeat bottom right;
    background-size: 400px;

    position: relative;
    top: 100px;
}



@media (max-width: 1350px) {
    .box {
        background-size: 320px;
    }
}

@media (max-width: 1024px) {
    .box {
        background-size: 300px;
    }
}

@media (max-width: 768px) {
    .box {
        background-size: 280px;
    }
}

</style>