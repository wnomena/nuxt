<script setup lang="ts">

</script>

<template>
    <section style="top: 0;" class="row border overflow-hidden mb-2">    
    <section class="col-12">
        <div class="row d-flex flex-row flex-nowrap">
            <div class="col-12">
            <img loading="lazy" class="m-0 col-12" src="./slide/manambolo.webp" alt="">
                    <div class="col-12">
                        <div class="col-12 text-light">
                        <h4 class="fs-lg-4 fs-md-6" >Descending the river to the Tsingy</h4>
                        <h1 class="fs-lg-1 fs-md-3">MANAMBOLO</h1>
                    </div>
                    </div>
                </div>
        <div class="col-12">
            <img loading="lazy" class="m-0 col-12" src="./slide/tsingy.webp">
            <div class="col-12">
                <div class="col-12 text-light">
                <h4 class="fs-lg-4 fs-md-6" >Visite the Park</h4>
                <h1 class="fs-lg-1 fs-md-3">GRAND TSINGY</h1>
            </div>
            </div>
        </div>
        <div class="col-12">
            <img loading="lazy" class="m-0 col-12" src="./slide/soatanana.webp" alt="">
            <div class="col-12">
                <div class="col-12 text-light">
                <h4 class="fs-lg-4 fs-md-6" >Passage to the south of the country</h4>
                <h1 class="fs-lg-1 fs-md-3">SOATANANA</h1>
            </div>
            </div>
        </div>
        </div>
    </section>
</section>
</template>
<style scoped>
.row .col-12 .row {
    animation-name: slide;
    animation-duration: 15s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.row .col-12 .row .col-12 .col-12 {
    height: 100vh;
    position: relative;
}
.row .col-12 .row .col-12 .col-12:nth-child(2) {
    height: 100vh;
    position: absolute;
    transform: translateY(-100%);
    display: flex;
}
.row .col-12 .row .col-12 .col-12:nth-child(2) .col-12 {
    background-color: rgba(56, 53, 53, 0.5); text-align: center; padding-top: 20px; padding-bottom: 20px;  height: fit-content; align-self: center;
}
@media only screen and (max-width: 480px) {
    .row .col-12 .row .col-12 .col-12 {
        height: 40vh;
        position: relative
    }
    .row .col-12 .row .col-12 .col-12:nth-child(2) {
    height: 40vh;
    position: absolute;
    transform: translateY(-100%);
    display: flex;
}
}
@keyframes slide {
    0%,33% {
        transform: translateX(0);
    }
    39%,66% {
        transform: translateX(-100%);
    }
    70%,100% {
        transform: translateX(-200%);
    }
}

</style>