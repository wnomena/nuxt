<template>
    <section>
    <div class="col-12 d-flex justify-content-end"><p @click="modifier((0).toString())" >Ajout</p></div> // fonction ajout
    <div class="img_contain">
        <img :img="img" alt="" srcset=""> //add image
    </div>
    <div class="d-flex flex-column w-50 p-1 h-auto">
        <div  v-for="i in value" :key="i.name.toString()" class="border border-secondary overflow-hidden d-flex align-items-center justify-content-around m-2 h-5" @click="onclick(i.presentation_image)"> //boucle for
            <div  class="border border-secondary overflow-hidden d-flex align-items-center justify-content-around w-100 ">
                <p>Nom : {{i.name}}</p><p>Difficulté : {{i.difficulty}}</p><p>Prix : {{i.price}}</p><p>Distance : {{i.distance}}</p><p>Delais : {{i.sejour_delay}}</p> <p @click="modifier(i.name)" class="modifier"  >Modifier</p>
            </div>
        </div>
    </div>
</section>
</template>
<script lang="ts" setup>
import { Method } from '~/all_model/fonction-classique';
import type { child_road_for_display } from '~/all_model/model';

    let value:Ref<child_road_for_display[]> = ref([])
    let img:Ref<string> = ref("")

    //methods
    function onclick(i:string) {
        img.value = i
    }
    function modifier(i : string) {
        Method.navigate("/internal-footer/menu-for-admin/add-and-update-child",{name : i})
    }
</script>
<style scoped>
section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    overflow-y: hidden;
}
section .img_contain {
    width: 40%;
    padding: 0;
}
section .img_contain img {
    width: 100%;
    height: auto;
    
}
section .d-flex {
    height: 50px;
    /* width: 70%; */
    
}


section .d-flex .border .border p{
    display: flex;
    margin: auto;
    align-items: center;
    font-weight: bold;
    height: 100%;
}
.modifier {
    color: #4b4848;
    cursor: pointer;
    /* height: 100%; */
    font-weight: bold;
    padding: 0 5px;
}
.modifier:hover {
    background-color: #4b4848;
    color: white;

}
</style>