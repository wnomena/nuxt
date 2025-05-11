<template>
    <section>
    <div class="col-12" @click="modifier">Ajout</div>
    <div class="img_contain border">
        <NuxtImg class="border" :src="img" :alt="img" srcset=""/>
    </div>
    <div class="d-flex flex-column w-50 p-1 h-auto">
        <div  v-for="i in value1" :key="i.name.toString()" class="border border-secondary overflow-hidden d-flex align-items-center justify-content-around m-2 h-5" @click="onclick(i.presentation_image)"> 
            <div  class="border border-secondary overflow-hidden d-flex align-items-center justify-content-around w-100 ">
                <p>Nom : {{i.name}}</p><p>Difficulté : {{i.difficulty}}</p><p>Prix : {{i.price}}</p><p>Distance : {{i.distance}}</p><p>Delais : {{i.sejour_delay}}</p> <p @click="modifier(i.id)" class="modifier"  >Modifier</p>
            </div>
        </div>
    </div>
    <loading-component v-if="loading"/>
</section>
</template>
<script lang="ts" setup>
import { NuxtImg } from '#components';
import { forceInt, navigate } from '~/all_model/fonction-classique';
import { child_road_list, val, type child_road_for_display } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
    let value1:Ref<child_road_list[]> = ref([])
    let img:Ref<string> = ref("")
    let loading:Ref<boolean> = ref(true)

    function onclick(i:string) {img.value = i}
    onMounted(async() => {
        await HttpService.getChilds(useRoute().query.id ? forceInt(useRoute().query.id?.toString()) : undefined).then((value) => {
            value1.value = [...value.data.data]
            console.log(value1.value)
            img.value = value1.value[0].presentation_image
        }).finally(function () {
            loading.value = false
            console.log(img.value)
        })
    })
    function modifier(id? : number) {
        const root = useRoute()
        console.log("id : " + id)
        if(id) navigate("/internal-footer/menu-for-admin/add-and-update-child",{id : id,parent : root.query.id as string})
        else navigate("/internal-footer/menu-for-admin/add-and-update-child",{id : root.query.id?.toString()})

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
section .col-12 p {
    cursor: pointer;
    padding: 0;
    margin: 0;
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