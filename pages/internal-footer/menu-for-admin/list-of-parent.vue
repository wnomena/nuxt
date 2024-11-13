
<template>
    <section class="row">
        <section v-if="confirmation" class="border">
        <div><NuxtLink to="/internal-footer/menu-for-admin/add-and-update-parent"> Ajout</NuxtLink></div>
        <section class="d-flex flex-nowrap justify-content-around col-3 lg-3">
            <div v-for="i in value" :key="i.name.toString()" class="bg-transparent" > //mila an le ve for pour la liste
                <img :src="i.presentation_image.toString()" alt="name" srcset="">
                <h4>Nom : {{i.name}}</h4>
                <div class="d-flex justify-content-around">
                    <div @click="method(i.identifiant.toString())" class="suivant">Suivant</div>
                    <div @click="link_to_update(i.name.toString())" class="modifier">Modifier</div>
                    <div @click="deletion(i.identifiant.toString())" class="supprimer">Supprimer</div>
                </div>
            </div>
        </section>
    </section>
    <section v-else class="col-12">
        <div class="m-auto rounded col-lg-3 bg-light">
            <h5 class="text-center">Action irreversible, voulez vous continuer ?</h5>
            <div class="d-flex col-12 justify-content-center gap-1 m-1"><div @click="fetchdelete" class="bg-danger rounded">Continuer</div><div class="bg-success rounded"><a href="admin/home/list-of-parent" class="text-decoration-none text-light">Annuler</a></div></div>
    </div>
</section>
    </section>
</template>
<script setup lang="ts">
import { Method } from '~/all_model/fonction-classique';
import { parent_road_list } from '~/all_model/model'
import { HttpService } from '~/server/fetch-class/fetch'
let confirmation:Ref<{type : boolean, info :string}> = ref({type : false, info :""})
let value:Ref<parent_road_list[]> = ref([])

//methods
function method(id : string) {
        navigateTo({
            path : "/internal-footer/list-of-child-road",
            query : {
                id : id
            }
        })
    }
function link_to_update(id: string) {
        navigateTo({
            path : "/internal-footer/menu-for-admin/add-and-update-parent",
            query : {
                name : id
            }
        })
    }
function deletion(value : string) {
        confirmation.value = {type : true, info : value}
}
function  fetchdelete() {
        HttpService.delete_parent_road(confirmation.value.info).then((res)=> {
            Method.navigate("/internal-footer/list-of-parent")
        }).catch((err) => {
            Method.navigate("/internal-footer/list-of-parent")
        })
    }

</script>
<style scoped>
/* @media only screen and (min-with : 900px) { */
    section .bg-transparent {
        height: 400px;
        width: 300px;
        outline: none;
        overflow: hidden;
        border-radius: 10px;
    }
    section .bg-transparent img {
        height: 70%;
        width: inherit;      
    }
    div.d-flex div {
        /* padding: 5px; */
        font-weight: bold;
        padding: 0px 5px;
        /* padding-right: 3px; */
        height: 30px;


    }
    .suivant {
        border: 2px solid #4584f8;
        color: #4584f8;
        border-radius: 5px;
        cursor: pointer;
        /* transition: 1s; */
    }
    .suivant:hover {
        background-color: #4584f8;
        color: white;
    }
    .modifier {
        border: 2px solid #4b4848;
        color: #4b4848;
        border-radius: 5px;
        cursor: pointer;
    }
    .modifier:hover {
        background-color: #4b4848;
        color: white;
    }
    .supprimer {
        border: 2px solid red;
        color: red;
        border-radius: 5px;
        cursor: pointer;
    }
    .supprimer:hover {
        background-color: red;
        color: white;
    }
    .app-internal-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
/* } */
.row:nth-child(2) {
    height: 100vh;
    display: block;
    background-color: rgba(gray,gray,gray,alpha);
    backface-visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1;
    align-content: center;
}
.row:nth-child(2) .rounded {
    margin: auto;
    display: flex;
    flex-direction: column;
}
</style>