<template>
    <div class="col-12">
    <section v-if="all_value.authorization" class="row">
        <div class="col-12 mt-4">
            <input class="col-lg-10 col-12  d-flex m-auto ps-3 border fs-2" type="text" name="" id="" value="" disabled>
        </div>
        <div class="col-12 mt-4">
            <input class="col-lg-10 col-12  d-flex m-auto ps-3 border fs-2" type="text" name="" id="" value="Type : Member" disabled>
        </div>
        <div class="col-12 mt-4">
            <div class="col-lg-10 col-12 m-auto special">
               <div class="d-grid">
                <div class="left bg-transparent text-center d-flex align-items-center"><i @click="left" class="bi bi-arrow-left-circle-fill fs-2"></i></div> 
                <div style="transition: 0.2s;" id="scroll" class="bg-transparent overflow-x-scroll overflow-y-hidden d-flex flex-nowrap">
                    <div class="col-lg-4 col-md-6 col-12 p-1" v-for="i in all_value.child_road" :key="i.id.toString()">
                        <div class="bg-transparent rounded h-inherit text-light" :style="{'background-image' : 'url(' + i.presentation_image + ')'}"><i @click="make_favorite($event)" ref="favorite"  class="bi bi-heart fw-bold"></i>
                        <h5> Name: {{ i.name}}</h5><p class="m-0">Price : {{i.price}}</p> </div>
                    </div>
                </div>
                <div class="bg-transparent text-center d-flex align-items-center"><i @click="right" class="bi bi-arrow-right-circle-fill fs-2" > </i></div> 
                           </div> 
                </div>
            </div>
        <div class="col-12 mt-4">
            <textarea v-model="all_value.string_commentary" class="col-10  d-flex m-auto ps-3" name="" id=""></textarea>
        </div>
         <div class="col-12 mt-4">
            <div class="col-lg-10 col-12  d-flex m-auto ps-3 d-flex justify-content-end pe-2" ><div class="border rounded bg-primary p-2 fw-bold text-light">Enregistrer </div></div>    
        </div>
    </section>

    <section v-else class="row alert">
        <div class="col-12 d-flex text-center align-items-center ">
            <div class="col-lg-4 col-md-7 col-10 m-auto rounded overflow-hidden border">
                <h5 class="text-center bg-primary col-12">Alert</h5>
                <p class="test">Adresse mail déjà existant parmi les commentaires</p>
                <small>Vous n'avez droit qu'à un commentaire</small>
                <div class="d-flex justify-content-center mb-1"><NuxtLink class="text-decoration-none" to="/"><button class="border-0 ps-3 pe-3 fs-5">Retour</button></NuxtLink></div>
            </div>
        </div>
    </section>
    </div>
</template>
<script setup lang="ts">

import { Method } from '~/all_model/fonction-classique';
import type { child_road_for_display } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
import { LocalStorageService } from '~/server/fetch-class/localStorage';
// let favorite = ref(null)
let all_value:Ref<{child_road : child_road_for_display[],string_commentary : string, authorization : boolean}> = ref({
    child_road : [],
    string_commentary : "",
    authorization : true,


})
function right() {
    const element: HTMLElement | null = document.getElementById("scroll")
    let scrollwidth = element?.scrollLeft ? element?.scrollLeft : 0
    element?.scrollTo(scrollwidth + element?.offsetWidth,0)
}
function left() {
    const element: HTMLElement | null = document.getElementById("scroll")
    let scrollwidth = element?.scrollLeft ? element?.scrollLeft : 0
    element?.scrollTo(scrollwidth - element?.offsetWidth,0)
}
function make_favorite(event : Event) {
    console.log(event)
}
onMounted(async () => {
    if(LocalStorageService.getValueFormSessionStorage("id_for_admin_or_member") !== "") {
        await HttpService.get_all_favorite_road().then((res) => {
        Array.from(res.data).forEach((each) => {
            Array.from(each.like_by_membes).forEach((like) => {
                if(like.mail == LocalStorageService.getValueFormSessionStorage("id_for_admin_or_member")) {
                    all_value.value.authorization = false
                }
            })
        })
    })

     await HttpService.get_all_child_road("0").then((res) => {
        all_value.value.child_road = [...res.data]
    })
    }else {
       Method.navigate("/")
    }
})
</script>
<style scoped>
.row .col-12 .col-lg-10 {
    height: 40px;
    /* font-size: 35px; */
}   
.row .col-12 .col-lg-10 .border {
    cursor: pointer;
}
.row .col-12 textarea.col-10, .row .col-12 textarea.col-10:focus, .row .col-12 textarea.col-10:active {
    /* height: 50vh; */
    overflow: hidden;
    outline: none;
}
.row .col-12 .special {
    height: initial;
}
.row .col-12 .special .d-grid {
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 30vh;
}
.row .col-12 .special .d-grid .bg-transparent {
    transition: 1s;
    scrollbar-color: transparent transparent;
}
.row .col-12 .special .d-grid .bg-transparent .col-lg-4 .bg-transparent {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 29vh;
}
.row .col-12 .col-lg-10 .d-grid .overflow-x-scroll .col-lg-4 .bg-transparent i {
    color: red;
    font-size: 30px;
}
.alert {
    height: 80vh;
    display: flex;
}
</style>