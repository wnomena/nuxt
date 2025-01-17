<template>
    <section class="container-fluid m-0 p-0 w-100">
    <div class="m-0 p-0 w-full d-flex justify-content-between">
        <h3 class="text-light"> {{ title.title }}</h3>
        <NuxtLink  style="cursor: pointer;" class="d-flex justify-content-center bg-primary" :to="{path : '/internal-footer/menu-for-admin/list-of-child', query : {id : router.query.name}}"><i class="bi bi-chevron-left"> Retour</i></NuxtLink>
    </div>
    <form @submit="submit" class="w-full d-flex flex-wrap">
        <div class="bg-transparent d-flex flex-row flex-wrap">
            <div class="bg-transparent border-0 d-flex flex-column m-0">
                <label for="name">Le nom de votre circuit</label>
                <input :value="title.update.name" name="name"  class="border-top-0 border-start-0 border-end-0" :disabled="add_or_udate(title.title)"  type="text">
            </div>
            <div class="bg-transparent border-0 d-flex flex-column m-0">
                <label for="distance">Distance à parcourir</label>
                <input :value="title.update.distance" name="distance"  class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent border-0 d-flex flex-column m-0">
                <label for="confort">Confort</label>
                <input :value="title.update.confort" v-change="100" name="confort"  class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent border-0 d-flex flex-column m-0">
                <label for="">Période</label>
                <div class="periode d-flex flex-row justify-content-around">
                    <input :value="title.update.period.split(' ')[0]" v-change="12" name="period_B"   class="border col-5" type="number" placeholder="07"> <input :value="title.update.period.split(' ')[1]" v-change="12" name="period_E"  class="border" type="number" placeholder="09"> 
                </div>
            </div>
            <div class="bg-transparent  d-flex flex-column m-0">
                <label for="">Durée totale</label>
                <div class="periode d-flex flex-row justify-content-around">
                    <input :value="title.update.sejour_delay.split(' ')[0]" name="sejours_delais_B"  class="border" type="number" placeholder="jours"> <input name="sejours_delais_E" :value="title.update.sejour_delay.split(' ')[1]" class="border" type="number" placeholder="nuit"> 
                </div>
            </div>
            <div class="bg-transparent  d-flex flex-column m-0">
                <label for="difficulty">Difficulté</label>
                <input :value="title.update.difficulty" v-change="100" name="difficulty" class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent  d-flex flex-column m-0">
                <label for="price"> Prix </label>
                <input name="price" :value="title.update.price" class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent  d-flex flex-column m-0">
                <label for="">Image</label>
                <input name="image"  class="border-top-0 border-start-0 border-end-0" type="file">
            </div>
        </div>
        <div class="bg-transparent  d-flex flex-column m-0 w-auto">
            <label for="">La description du circuit</label>
            <textarea  name="description" id="" placeholder="Une petite description"></textarea>
        </div>
        <div class="bg-transparent d-flex">
            <span class="rounded border bg-primary" ><button class="border-0" type="submit">Valider</button></span><span class="rounded bg-danger"><button class="border-0" @click="()=>navigateTo('/internal-footer/menu-for-admin/list-of-parent')" >Annuler</button></span>
        </div>
    </form>
</section>
</template>
<script lang="ts" setup>
import { AxiosError } from 'axios';
import { add_or_udate, Method } from '~/all_model/fonction-classique';
import type { child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
    const router = useRoute()
    const title: Ref<{title: string , update : child_road_list}> = ref({
        title : "",
        update : {name : "", description : "", period : "", price : 0, difficulty : 0, distance : 0, sejour_delay : "",confort : 0,presentation_image : "", like_by_membes : []}
    })
    onMounted(async() => {
        if(router.query.name?.toString()) {
            title.value.title = "Update child road"
            console.log(router.query.name)
            await HttpService.get_one_child_road(router.query.name as string).then((response) => {
                console.log(response.data.data)
                title.value.update = response.data.data
            })
        }
        else {
            title.value.title = "Add new child road"
        }
    })
    // const type = () => add_or_udate(title.value.title)
    async function submit(e:Event) {
        e.preventDefault()
        const formData:FormData = new FormData(e.target as HTMLFormElement)
        formData.append("parent_ident_equal_to_child",router.query.id as string)
        for(let [key,value] of formData.entries()) {
            console.log(key,value)
            if(!value) {
                console.log(key)
                alert("Required field")
                return false
            }
        }
        if(title.value.title.split(" ")[0] == "Add") {
                await HttpService.add_new_child_road(formData).then((response) => {
                    console.log(response)
                    Method.navigate("/internal-footer/menu-for-admin/list-of-parent")
                }).catch((err:AxiosError<{message : string}>) => {
                    alert(err.response?.data.message)
                })
            }else if(title.value.title.split(" ")[0] == "Update") {
                await HttpService.update_child_road(formData).then((response) => {
                    console.log(response)
                    Method.navigate("/internal-footer/menu-for-admin/list-of-parent")
                }).catch((err:AxiosError<{message : string}>) => {
                    alert(err.response?.data.message)
                })
            }
        
    }
</script>
<style scoped>

.container-fluid {
    width: 100%;
}
.container-fluid .m-0 {
    background-color: #3f474d;
}
.container-fluid .m-0 .d-flex {
    width: 200px;
    font-weight: bold;
}
.container-fluid .m-0 .d-flex i {
    margin-top: auto;
    margin-bottom: auto;
    font-family: "Calibri Light (Titres)",sans-serif;
}
.container-fluid .w-full .bg-transparent {
    padding: 10px;
    width: 75%;
}
.container-fluid .w-full .bg-transparent .bg-transparent {
    width: 300px;
}
.container-fluid .w-full .bg-transparent .bg-transparent label {
    font-weight: bold;
    width: 250px;
}
.container-fluid .w-full .bg-transparent .bg-transparent input,.container-fluid .w-full .bg-transparent .bg-transparent input:active {
    outline: none;
    overflow: hidden;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    font-weight: bold;
    /* width: 200px; */
}
.bg-transparent .periode input {
    width: 60px; margin: 5px;
}
textarea {
    width: 200px;
    height: 200px;
    font-weight: bold;
    border: 2px solid black;
}
.bg-transparent span {
    width: 100px;
    height: 30px;
    text-align: center;
    font-weight: bold;
    font-family: "Calibri Light (Titres)",sans-serif;
}
.bg-transparent span p {
    transform: translateY(5px);
}
button {
    background-color: transparent;
}
@media only screen and (max-width : 990px) {
    .container-fluid .w-full .bg-transparent {
        padding: 10px;
        width: 100%;
    }
}
app-internal-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}</style>