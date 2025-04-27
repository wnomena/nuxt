<template>
    <section class="row border overflow-hidden mb-2">
        
    <section class="col-12">
        <div class="row d-flex flex-row flex-nowrap">
            <div class="col-12">
            <img style="height: 70vh;" class="m-0 col-12" src="./slide/manambolo_copie.jpg" alt="">
                    <div style="background-color: blueviolet; text-align: center; padding-top: 20px; padding-bottom: 20px;" class="col-12 text-light">
                        <h4 class="fs-lg-4 fs-md-6" >Descending the river to the Tsingy</h4>
                        <h1 class="fs-lg-1 fs-md-3">MANAMBOLO</h1>
                    </div>
                </div>
        <div class="col-12">
            <img style="height: 70vh;" class="m-0 col-12" src="./slide/tsingy.jpg">
            <div style="background-color: blueviolet; text-align: center; padding-top: 20px; padding-bottom: 20px;" class="col-12 text-light">
                <h4 class="fs-lg-4 fs-md-6" >Visite the Park</h4>
                <h1 class="fs-lg-1 fs-md-3">GRAND TSINGY</h1>
            </div>
        </div>
        <div class="col-12">
            <img style="height: 70vh;" class="m-0 col-12" src="./slide/soatanana.jpg" alt="">
            <div style="background-color: blueviolet; text-align: center; padding-top: 20px; padding-bottom: 20px;" class="col-12 text-light">
                <h4 class="fs-lg-4 fs-md-6" >Passage to the south of the country</h4>
                <h1 class="fs-lg-1 fs-md-3">SOATANANA</h1>
            </div>
        </div>
        </div>
    </section>
</section>
</template>
<style scoped>
    .row .col-12 .row .col-12 {
    /* height: 95vh; */
    /* border: 2px solid; */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.row .col-12 .row .col-12 .container h1{
    font-size: 80px;
    font-weight: bold;
}
.row .col-12 .row {
    animation-name: slide;
    animation-duration: 15s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
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
@media only screen and (max-width: 700px) {
    .row .col-12 .row .col-12 {
        height: 50vh;
    }
    .row .col-12 .row .col-12 .container h4 {
        font-weight: 500;
        font-size: 20px;
    }
    .row .col-12 .row .col-12 .container h1 {
        font-weight: 900;
        font-size: 50px;
    }
}
@media only screen and (max-width: 700px) {
    .row .col-12 .row .col-12 {
        height: 50vh;
    }
    .row .col-12 .row .col-12 .container h4 {
        font-weight: 500;
        font-size: 20px;
    }
    .row .col-12 .row .col-12 .container h1 {
        font-weight: 900;
        font-size: 40px;
    }
}
@media only screen and (min-width: 700px) {
    .row .col-12 .row .col-12 {
        height: 70vh;
    }
    .row .col-12 .row .col-12 .container h4 {
        font-weight: 500;
        font-size: 50px;
    }
    .row .col-12 .row .col-12 .container h1 {
        font-weight: 900;
        font-size: 70px;
    }
}
@media only screen and (min-width: 950px) {
    .row .col-12 .row .col-12 {
        height: 95vh;
    }
    .row .col-12 .row .col-12 .container h4 {
        font-weight: 500;
        font-size: auto;
    }
    .row .col-12 .row .col-12 .container h1 {
        font-weight: 900;
        font-size: auto;
    }
}
</style>