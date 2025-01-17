<template>
    <section class="row overflow-hidden">
        <div class="col-11 d-flex m-auto">
            <div data-aos="fade-up-right" class="col-lg-3 col-md-5 col-11 border rounded m-1 items-1 overflow-hidden">
                <div class="bg-primary col-12">
                    <div class="items d-flex">
                        <div class="col-12 d-flex align-items-end">
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-down-right-circle-fill fs-2 m-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="contain d-flex col-12 bg-success">
                        <div class="col-12 d-flex flex-wrap align-items-end p-2">
                            <h3 class="text-light col-12 text-center"> Safety First </h3>
                            <p class="text-light fw-bold text-center">
                                We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience.
                            </p>
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-up-right-circle-fill fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" class="col-lg-3 col-md-5 d-lg-block d-md-block d-none  col-11 border rounded m-1 items-2 overflow-hidden">
                <div class="bg-primary col-12">
                    <div class="items d-flex">
                        <div class="col-12 d-flex align-items-end">
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-down-right-circle-fill fs-2 m-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="contain d-flex col-12 bg-success">
                        <div class="col-12 d-flex flex-wrap align-items-end p-2">
                            <h3 class="text-light col-12 text-center"> Environmental Respect </h3>
                            <p class="text-light fw-bold text-center">
                                By choosing our agency, you are opting for responsible tourism. We are committed to protecting the environment and promoting sustainable practices that benefit both nature and local communities.
                            </p>
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-up-right-circle-fill fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left" class="col-lg-3 d-lg-block d-none col-11 border rounded m-1 items-3 overflow-hidden">
                <div class="bg-primary col-12">
                    <div class="items d-flex">
                        <div class="col-12 d-lg-none d-md-none d-flex justify-content-end"><i class="bi bi-x-square"></i></div>
                        <div class="col-12 d-flex align-items-end">
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-down-right-circle-fill fs-2 m-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="contain d-flex col-12 bg-success">
                        <div class="col-12 d-flex flex-wrap align-items-end p-2">
                            <h3 class="text-light col-12 text-center"> Local Expertise </h3>
                            <p class="text-light fw-bold text-center">
                                With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you.
                            </p>
                            <div class="col-12 d-flex justify-content-end">
                                <i class="bi bi-arrow-up-right-circle-fill fs-1"></i>
                            </div>
                        </div>
                    </div>
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
section {
    padding: 5px 20px;
    scrollbar-color: red gray;
    scrollbar-width: thin;
    overflow: hidden;
    display: block;

}
.row .col-11 {
    height: 20rem;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
}
.row .col-11 .col-lg-3 {
    background-position: center;
    background-size: cover;
}
.row .col-11 .col-lg-3 .bg-primary {
    display: block;
    height: 200%;
    transition: 0.5s;
}
.row .col-11 .col-lg-3:hover > .bg-primary {
    transform: translateY(-50%);
    transition: 0.5s;
}
.row .col-11 .items-1 .bg-primary .items {
    background-image: url(./some-image-inset/vecteezy_lemur.jpg);
    background-position: center;
    background-size: cover;
    display: block;
    height: 50%;
}
.row .col-11 .items-2 .bg-primary .items {
    background-image: url(./some-image-inset/vecteezy_black-lemur.jpg);
    background-position: center;
    background-size: cover;
    display: block;
    height: 50%;
}
.row .col-11 .items-3 .bg-primary .items {
    background-image: url(./some-image-inset/couche_soleil_baobab.jpg);
    background-position: center;
    background-size: cover;
    display: block;
    height: 50%;
}
.row .col-11 .col-lg-3 .bg-primary .contain {
    display: block;
    height: 50%;
}
.row .col-11 .col-lg-3 .bg-primary .contain:active {
    transform: translateY(50%);
    transition: 0.5s;
}
.row .col-11 .col-lg-3 .bg-primary .contain:hover > .col-12 {
    color: #1492E6;
}
</style>