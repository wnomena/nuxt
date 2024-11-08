<template>
    <div class="row bg-grey ps-3">
    <div class="col-12 text-center"><h4>Here are some reasons why you should choose our agency.</h4></div>
    <div class="col-12 m-0 p-0 border">
        <section class="d-grid mt-2">
            <div class="border items-1 d-lg-flex d-none"><div class="row d-flex"><h5 class="text-dark">{{ items_1.title }}</h5><p class="text-dark">{{ items_1.content }}</p></div></div>
            <div class="border items-2 d-flex"><div class="row d-flex"><h5 class="text-dark">{{ items_2.title }}</h5><p class="text-dark">{{ items_2.content }}</p></div><div class="row d-lg-none d-flex"><h5 class="text-dark">{{ items_1.title }}</h5><p class="text-dark">{{ items_1.content }}</p></div></div>
            <div class="border items-3 d-none d-md-flex d-lg-flex"><div class="row d-flex"><h5 class="text-dark">{{ items_3.title }}</h5><p class="text-dark">{{ items_3.content }}</p></div><div class="row d-md-flex d-lg-none d-none"><h5 class="text-dark">{{ items_4.title }}</h5><p class="text-dark">{{ items_4.content }}</p></div></div>
            <div class="border items-4 d-lg-flex d-none"><div class="row d-flex"><h5 class="text-dark">{{ items_4.title }}</h5><p class="text-dark">{{ items_4.content }}</p></div></div>
            <div class="border items-5 d-none d-md-flex d-lg-flex"><div class="row d-flex"><h5 class="text-dark">{{ items_5.title }}</h5><p class="text-dark">{{ items_5.content }}</p></div></div>
        </section>
    </div>
</div>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                items_1: {title : "Safety First:" ,content : "We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience."},
                items_2:  {title : "Local Expertise: " ,content : " With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you."},
                items_3:  {title : "Personalized Journeys: " ,content : " Every traveler is unique, and we believe every adventure should be too. We offer tailor-made tours that are adapted to your desires and pace, ensuring a truly unforgettable experience."},
                items_4:  {title : "Environmental Respect: " ,content : "By choosing our agency, you are opting for responsible tourism. We are committed to protecting the environment and promoting sustainable practices that benefit both nature and local communities."},
                items_5:  {title : "Transparent Pricing: " ,content : "No unpleasant surprises with us! Our pricing is transparent, with no hidden fees, so you can travel with peace of mind."}
            }
        }
    }
</script>
<style scoped>
section.d-grid {
    grid-template-columns: repeat(3,1fr);
    height: 500px;
    gap: 5px;
    /* grid-auto-rows: 1fr; */
} 
.bg-light {
    padding-bottom: 5px;
}
section.d-grid .items-1 {
    grid-row: 1 / 5;
    grid-column:  1 / 2;
}
section.d-grid .items-5 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
}
section.d-grid .items-4 {
    grid-row: 3 / 5;
    grid-column: 2 / 4;
}
section.d-grid .items-2 {
    grid-row: 1 / 3;
    grid-column: 2 / 3 ;
}
section.d-grid .items-3 {
    grid-row: 1 / 2;
    grid-column: 3;
}
section.d-grid .border {
    flex-direction: column-reverse;
    /* align-items: stretch; */
}

section.d-grid .border .row {
    margin: 0;
    padding: 0;
    color: white;
}
section.d-grid .border .row p {
    margin: 10px;
    font-weight: bold;
    font-family: Apple Chancery, cursive;
}
h5 {
    border-bottom: 4px solid #1265e2;
    padding-bottom: 5px;
}
@media only screen and (max-width: 990px) {
    section.d-grid .items-2 {
        grid-row: 1 / 3;
        grid-column: 1 / 2 ;
        /* background-image: url("../../../public/baobab_lena.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover; */
    }
    section.d-grid .items-3 {
        grid-row: 1 / 2;
        grid-column: 2 / 4;
        /* background-image: url("../../app/../../public/ankavandra.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover; */
    }
    section.d-grid .items-5 {
        grid-row: 2 / 3;
        grid-column: 2 / 4;
        /* background-image: url("../../../public/couche\ soleil\ baobab.jpg");
        background-repeat: no-repeat;
        /* background-position: center;
        background-size: cover; */
    }
}
@media only screen and (max-width: 760px) {
    section.d-grid .items-2 {
            grid-row: 1 / 4;
            grid-column: 1 / 5;
            /* background-image: url("../../../public/baobab_lena.jpg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover; */
    }
}
.row .col-12 .d-grid .border .row h5 .row .col-12 .d-grid .border .row p{
    color: black;
}
</style>