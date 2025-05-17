<template>
    <section class="row overflow-hidden">
        <div class="col-12 d-flex gap-1">
            <div class="col-lg-4 col-6 rounded border m-auto">
                <img loading="lazy" class="col-12 m-0 p-0" src="./some-image-inset/vecteezy_lemur.jpg" alt="">
                <div class="col-12 bg-success text-center text-light">
                        <h3 class="text-center">{{ val[0].title }}</h3>
                        <span class="col-12 fw-bold"> {{ val[0].content }} </span>
                </div>
            </div>
            <div class="col-lg-4 col-6 rounded border m-auto">
                <img loading="lazy" class="col-12 m-0 p-0" src="./some-image-inset/vecteezy_black-lemur.jpg" alt="">
                <div class="col-12 bg-success text-center text-light">
                        <h3 class="text-center">{{ val[1].title }}</h3>
                        <span class="col-12 fw-bold"> {{ val[1].content }} </span>
                </div>
            </div>
                <div class="col-lg-4 col-md-6 col-11 d-none d-lg-block rounded border m-auto">
                <img loading="lazy" class="col-12 m-0 p-0" src="./some-image-inset/couche_soleil_baobab.jpg" alt="">
                <div class="col-12 bg-success text-center text-light">
                        <h3 class="text-center">{{ val[2].title }}</h3>
                        <span class="col-12 fw-bold"> {{ val[2].content }} </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type { some_component_type } from '~/all_model/model';
    const val:Ref<some_component_type[]> = ref([
                {title : "Safety First:" ,content : "We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience.",image : "/some-image-inset/vecteezy_cameleon_copy.jpg"},
                {title : "Local Expertise: " ,content : " With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you."},
                {title : "Personalized Journeys: " ,content : " Every traveler is unique, and we believe every adventure should be too. We offer tailor-made tours that are adapted to your desires and pace, ensuring a truly unforgettable experience."},
                {title : "Environmental Respect: " ,content : "By choosing our agency, you are opting for responsible tourism. We are committed to protecting the environment and promoting sustainable practices that benefit both nature and local communities."}
    ])


</script>
<style scoped>
    section.row .col-12 .col-lg-4 {
        overflow: hidden;
        outline: none;
        height: 45vh;
        color : black
    }
    section.row .col-12 .col-lg-4 .col-12 {
        height: 100%;
        transition: 0.4s;
    }
        /* section.row .col-12 .col-lg-4 .col-12:nth-child(2) {
            padding: 40px 5px;

        } */
    section.row .col-12 .col-lg-4:hover > .col-12 {
        transform: translateY(-100%);
        transition: 0.5s;
    }


</style>