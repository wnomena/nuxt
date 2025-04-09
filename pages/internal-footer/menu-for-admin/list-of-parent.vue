
<template>
    <section class="row">
        <section v-if="!confirmation.type" class="border col-12">
        <div><NuxtLink to="/internal-footer/menu-for-admin/add-and-update-parent"> Ajout</NuxtLink></div>
        <section class="d-flex flex-nowrap justify-content-around" style="height : 60vh">
            <div v-for="i in value.list" :key="i.name.toString()" class="bg-transparent col-lg-3 col-md-4 col-10 border p-1" >
                <div class="col-11 m-auto">
                    <img style="height : 70%" class="border rounded m-1 col-12" :src="i.presentation_image.toString()" alt="name" srcset="">
                </div>
                <h4>Nom : {{i.name}}</h4>
                <div class="d-flex justify-content-around">
                    <div @click="method(i)" class="suivant ps-1 pe-1">Suivant</div>
                    <div @click="link_to_update(i.name.toString())" class="modifier ps-1 pe-1">Modifier</div>
                    <div @click="deletion(i.identifiant.toString())" class="supprimer ps-1 pe-1">Supprimer</div>
                </div>
            </div>
        </section>
    </section>
    <section v-if="confirmation.type" class=" section col-12">
        <div class="col-5 m-auto bg-warning rounded m-2 p-3">
            <h3 class="col-12 text-center">
                Are you sure you want to delete?
            </h3>
            <div class="col-12 d-flex justify-content-center gap-1">
                <div class="p-1 rounded bg-danger" @click="fetchdelete()">Yes</div>
                <div class="p-1 rounded bg-success" @click="() => confirmation.type = false">No</div>
            </div>
        </div>
  </section>
    </section>
</template>
<script setup lang="ts">
import { Method } from '~/all_model/fonction-classique';
import { parent_road_list } from '~/all_model/model'
import { HttpService } from '~/server/fetch-class/fetch'
let confirmation:Ref<{type : boolean, info :string}> = ref({type : false, info :""})
let value:Ref<{list :  parent_road_list[]}> = ref({
    list : []
})

//methods
onMounted(async() => {
    await HttpService.get_all_parent_road().then((response) => {
        console.log(typeof response.data.data)
        value.value.list = [...response.data.data]
    })
})
async function method(i: parent_road_list) {
        await navigateTo({
            path : "/internal-footer/menu-for-admin/list-of-child",
            query : {
                id : i.identifiant.toString(),
                name : i.name.toString()
            }
        })
    }
function link_to_update(id: string) {
        navigateTo({
            path : "/internal-footer/menu-for-admin/add-and-update-parent",
            query : {
                id : id
            }
        })
    }
function deletion(value : string) {
        console.log(value)
        confirmation.value = {type : true, info : value}
        console.log(confirmation.value)
}
function  fetchdelete() {
        HttpService.delete_parent_road(confirmation.value.info).then((res)=> {
            Method.navigate("/internal-footer/menu-for-admin/list-of-parent")
        }).catch((err) => {
            Method.navigate("/internal-footer/menu-for-admin/list-of-parent")
        })
    }

</script>
<style scoped>
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
    section.section {
        position: absolute;
        top: 0;
    }
    section.section .col-5 .col-12 div {
        width: 70px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
    }
/* } */
/* .row:nth-child(2) {
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
} */
</style>