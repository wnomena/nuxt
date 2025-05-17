<template>
    <section class="container-fluid m-0 p-0 w-100">
    <div class="m-0 p-0 w-full d-flex justify-content-between">
        <h3 class="text-light"> {{ title.title }}</h3>
        <NuxtLink  style="cursor: pointer;" class="d-flex justify-content-center bg-primary" :to="{path : '/internal-footer/menu-for-admin/list-of-parent'}"><i class="bi bi-chevron-left"> Retour</i></NuxtLink>
    </div>
    <div class="col-12 m-auto text-center bg-danger">{{ title.alert }}</div>
    <form @submit="submit" class="w-full d-flex flex-wrap border">
        <div class="bg-transparent d-flex flex-row flex-wrap">
            <div class="bg-transparent border-0 d-flex flex-column m-0">
                <label for="name">Le nom de votre circuit</label>
                <input :value="title.update.name" name="name"  class="border-top-0 border-start-0 border-end-0"  type="text">
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
            <div class="bg-transparent  d-flex flex-column m-0">
                <label for="">Image</label>
                <input name="image"  class="border-top-0 border-start-0 border-end-0" type="file">
            </div>
                    <div class="bg-transparent d-flex flex-row justify-content-start">
            <div class="bg-transparent d-flex">
                <button type="submit" id="button">Enregistrer</button>
            </div>
            <div class="bg-transparent d-flex justify-content-start w-50">
                <span v-if="display()" @click="()=> title.confirmation = true" id="cancel"> Effacer </span>
            </div>
        </div>
        </div>
        <div class="bg-transparent  d-flex flex-column m-0 col-12 border">
            <label for="">La description du circuit</label>
            <textarea style="width: 100%;" :value="title.update.description" name="desc" id="" v-on:change="change" placeholder="Une petite description"></textarea>
        </div>
        <div class="bg-transparent d-flex flex-row justify-content-start">
            <div class="bg-transparent d-flex">
                <button type="submit" id="button">Enregistrer</button>
            </div>
            <div class="bg-transparent d-flex justify-content-start w-50">
                <span v-if="display()" @click="()=> title.confirmation = true" id="cancel"> Effacer </span>
            </div>
        </div>
    </form>
      <section v-if="title.confirmation" class=" section col-12">
        <div class="col-5 m-auto bg-warning rounded m-2 p-3">
            <h3 class="col-12 text-center">
                Are you sure you want to delete?
            </h3>
            <div class="col-12 d-flex justify-content-center gap-1">
                <div class="p-1 rounded bg-danger" @click="update_before_deleting()">Yes</div>
                <div class="p-1 rounded bg-success" @click="() => title.confirmation = false">No</div>
            </div>
        </div>
  </section>
  <loading-component v-if="loading"/>
</section>
</template>
<script lang="ts" setup>
import { AxiosError } from 'axios';
import { add_or_udate, change, forceInt, navigate, redirect401, undefinedForceInt } from '~/all_model/fonction-classique';
import type { child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
    const router = useRoute()  
    let loading:Ref<boolean> = ref(true) 
    const title: Ref<{alert: string;title: string , update : child_road_list,confirmation : boolean}> = ref({
        alert : "",
        title : "",
        update : {id : 0,name : "",description : "", price : 0, distance : 0,difficulty : 0,like_by_membes : [], sejour_delay : "", period : "", presentation_image : "",parent_id : 0, confort : 0,carte : ""},
        confirmation : false
    })
    onMounted(async() => {
        console.log(JSON.stringify(router.query.id))
        if(undefinedForceInt(router.query.id as string)) {
            title.value.title = "Update child road"
            await HttpService.getChild(forceInt(router.query.id ? router.query.id.toString() : undefined)).then((response) => {
                console.log(response)
                title.value.update = response.data.data[0]
            })
        }
        else title.value.title = "Add new child road"
        loading.value = false
    })

    const display = () => {
        if(title.value.title.split(" ")[0] == "Add") {
            return false
        }
        else return true
    }
    async function update_before_deleting() {
        loading.value = true
        await HttpService.deleteChild(forceInt(title.value.update.id.toString())).then((res) => {navigateTo("/internal-footer/menu-for-admin/list-of-parent")})
    }
    async function submit(e:Event) {
        e.preventDefault()
        loading.value = true
        const formData:FormData = new FormData(e.target as HTMLFormElement) 
        formData.append("parent_id",router.query.parent as string) 
        if(title.value.title.split(" ")[0] == "Add") {           
                await HttpService.insertChild(formData).then((response) => {
                    navigate("/internal-footer/menu-for-admin/list-of-parent",{})
                }).catch((err:AxiosError<{message : string}>) => {
                    title.value.alert =  err.response?.data.message as string
                }).finally(() => {
                    loading.value = false
                })
            }else if(title.value.title.split(" ")[0] == "Update") {
                formData.set("id",router.query.id as string)
                console.log(formData.get("name"))
                await HttpService.updateChild(formData).then((response) => {
                    navigate("/internal-footer/menu-for-admin/list-of-parent",{})
                }).catch((err:AxiosError<{message : string}>) => {
                    title.value.alert =  err.response?.data.message as string
                }).finally(() => {
                    loading.value = false
                })
            }
    }
</script>
<style scoped>
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
    width: 100%;
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
#button{
    width: 110px;
    text-align: center;
    color: #046ee0;
    background-color: white;
    border: 2px solid #046ee0;
    font-weight: bold;
    border-radius: 8px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#cancel{
    width: 110px;
    text-align: center;
    color: red;
    background-color: white;
    border: 2px solid red;
    font-weight: bold;
    border-radius: 8px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#cancel:hover {
    color: white;
    background-color: red;
    text-decoration: none ;
    border: 1px solid red;
    transition: 0.3s;
}
#button:hover{
    color: white;
    background-color: #046ee0;
    text-decoration: none ;
    border: 1px solid #046ee0;
    transition: 0.3s;
}
</style>