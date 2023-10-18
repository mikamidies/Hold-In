<template>
    <section class="section_one flex flex-col relative">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="w-full h-full object-cover object-center" muted autoplay loop src="../../assets/video/background.mp4"></video>
        </div>
        <div class="my_container relative z-10 flex-auto pt-140 lg:pt-156 2xl:pt-180 pb-30 lg:pb-40 2xl:pb-50">
            <div class="flex flex-col w-full h-full">
                <p class="text-white text-32 md:text-40 lg:text-50 xl:text-56 2xl:text-72 text-center font-interfaces font-bold leading-150 mb-auto">{{ text_1 }}</p>

                <div class="grid grid-cols-2 lg:grid-cols-4  gap-8 lg:gap-0">
                    <div class="index_card flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 cursor-pointer px-20 border border-y-2 border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">{{ text_2 }}</p>
                    </div>
                    <div class="index_card flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 cursor-pointer px-20 border border-y-2 border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">{{ text_3 }}</p>
                    </div>
                    <div class="index_card flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 cursor-pointer px-20 border border-y-2 border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">{{ text_4 }}</p>
                    </div>
                    <div class="index_card flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 cursor-pointer px-20 border border-y-2 border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">{{ text_5 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>




<script>
export default {
    data() {
        return {
            data: {},
            text_1: 'Jahon Invest Holding',
            text_2: 'Premium Pipe Print',
            text_3: 'JIP (Jahon Invest Plast)',
            text_4: 'Modern City',
            text_5: 'Zaprafka',
        }
    },

    methods: {
        getTranslate() {
            if(sessionStorage.getItem('translate')) {
                this.data = JSON.parse(sessionStorage.getItem('translate'));
                
                this.text_1 = this.data["index.company_name"];
                this.text_2 = this.data["index.company_1"];
                this.text_3 = this.data["index.company_2"];
                this.text_4 = this.data["index.company_3"];
                this.text_5 = this.data["index.company_4"];
            } else {
                setTimeout(() => {
                    this.getTranslate()
                }, 100);
            }
        }
    },

    mounted() {
        this.getTranslate();
    }
}
</script>



<style scoped>
* {
    transition: 0.5s;
}

.section_one {
    width: 100%;
    height: 100vh;
}

.index_card:hover {
    color: #fff;
    transition-duration: 0.2s;
    background-color: hsla(0,0%,100%,.16);
    border: 1px solid #fff;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: 0.5s;
}

.title {
    font-size: 72px;
    font-weight: 700;
    text-shadow: 0 0 3px rgba(0,0,0,1);
}

.text {
    text-shadow: 0 0 2px rgba(0,0,0,1);
}




@media (max-width: 1350px) {
    .title {
        font-size: 64px;
    }
}

@media (max-width: 1024px) {
    .title {
        font-size: 48px;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 32px;
    }
}
</style>