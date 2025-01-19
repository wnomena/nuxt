<template>
    <div class="col-12 d-flex text-center align-items-center">
        <div class="col-12 ">
            <div class="col-lg-4 col-md-7 col-10 m-auto rounded overflow-hidden border">
                <h5 class="text-center bg-primary col-12">Alert</h5>
                <p class="test">Adresse mail déjà existant parmi les commentaires</p>
                <small>Vous n'avez droit qu'à un commentaire</small>
                <div class="d-flex justify-content-center mb-1"><NuxtLink class="text-decoration-none" to="/"><button class="border-0 ps-3 pe-3 fs-5">Retour</button></NuxtLink></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { child_road_for_display } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
// let favorite = ref(null)
let all_value:Ref<{child_road : child_road_for_display[], authorization : boolean,mail : string}> = ref({
    child_road : [],
    authorization : true,
    mail : ""
})

    // const element: HTMLElement | null = document.getElementById("scroll")
    // element?.addEventListener("wheel",function(e:Event) {
    //     console.log(e)
    // })
function make_favorite(event : Event) {
    console.log(event)
    //maka event de manamboatra an le icon ho lasa plein de avy eo
} 
onMounted(async () => {
    if(!Teste.get().type) navigateTo("/internal-footer/connexion")
     await HttpService.get_all_child_road("0").then((response) => {
        console.log(response)
        all_value.value.child_road = response.data.data
     })
})
</script>
<style scoped>
 .align-items-center {
    height: 90vh;
 }
</style>

<!-- <div class="d-grid"> 
    <div style="transition: 0.2s;" id="scroll" class="bg-transparent overflow-x-scroll overflow-y-hidden d-flex flex-nowrap">
        <div class="col-lg-4 col-md-6 col-12 p-1" v-for="i in all_value.child_road" :key="i.name">
            <div class="bg-transparent rounded h-inherit text-light" :style="{'background-image' : 'url(' + i.presentation_image + ')'}"><i @click="make_favorite($event)" ref="favorite"  class="bi bi-heart fw-bold"></i>
            <h5> Name: {{ i.name}}</h5><p class="m-0">Price : {{i.price}}</p> </div>
        </div>
    </div>
</div>  -->
