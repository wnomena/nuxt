<template>
<section class="container-fluid w-full m-0">
    <div class="d-flex justify-content-between w-full m-0 p-0">
        <h3>{{ title.value }}</h3>
        <span class="d-flex bg-primary"><NuxtLink class="text-decoration-none text-light m-auto" to="/internal-footer/menu-for-admin/list-of-parent"><i class="bi bi-chevron-left"> Retour</i></NuxtLink></span>
    </div>
    <div class="col-7 m-auto text-center bg-danger">{{ title.alert }}</div>
    <form v-empty @submit="upload" class="bg-transparent w-100 m-top-10 d-flex flex-wrap">
        <div class="col-6 d-flex bg-transparent flex-row">
            <div class="bg-transparent d-flex flex-column" >
                <label class="text-dark" for="name">Nom</label>
                <input :value="title.updating_title.name" name="name" class="border-top-0 border-start-0 border-end-0 " type="text">
            </div>
            <div class="bg-transparent d-flex flex-column m-10">
                <label class="text-dark" for="price">Prix</label>
                <input :value="title.updating_title.price" name="price" class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent d-flex flex-column m-10" >
                <label class="text-dark" for="">Période Jan-Fev </label>
                <div class="d-flex bg-transparent flex-column">
                    <span></span>
                    <div class="d-flex bg-transparent flex-row">
                        <input :value="title.updating_title.period.split(' ')[0]" v-change="12" name="period_B" class="period_B" type="number" max="12" min="1" placeholder="05">
                        <input :value="title.updating_title.period.split(' ')[1]" v-change="12"  name="period_E" class="period_E rounded" type="number" max="12" min="1" placeholder="07">
                    </div>
                </div>
            </div>
            <div class="bg-transparent d-flex flex-column m-10">
                <label class="text-dark" for="difficulty">Dificulty</label>
                <input :value="title.updating_title.difficulty" v-change="100"  name="difficulty" class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent d-flex flex-column m-10">
                <label class="text-dark" for="confort">Confort </label>
                <input :value="title.updating_title.confort" v-change="100" name="confort" class="border-top-0 border-start-0 border-end-0" type="number">
            </div>
            <div class="bg-transparent d-flex flex-column m-10" >
                <label class="text-dark" for="file">L'image</label>
                <input name="image" accept="image/**" class="text-dark" type="file">
            </div>
        </div>
        <div class="container-fluid bg-transparent d-flex flex-column">
                <label class="text-dark" for="desc">La description de ce circuit</label>
                <textarea :value="title.updating_title.description.toString()" name="desc" class="rounded" id="" placeholder="La description de ce circuit"></textarea>
        </div><br>
        <div class="bg-transparent d-flex flex-row">
            <div class="bg-transparent d-flex w-50">
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
            <div class="col-12 d-flex justify-content-center gap-1 bg-initial">
                <div class="p-1 rounded bg-danger" @click="update_before_deleting()">Yes</div>
                <div class="p-1 rounded bg-success" @click="() => title.confirmation = false">No</div>
            </div>
        </div>
  </section>
</section>
</template>
<script lang="ts" setup>
// import type { Reactive } from 'vue';
import type { AxiosError } from 'axios';
import { forceInt, navigate } from '~/all_model/fonction-classique';
import type { parent_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';

const router = useRoute()
const title : Ref<{value : string, updating_title : parent_road_list,alert : string,confirmation : boolean}> = ref({
    alert : "",
    value : "",
    updating_title : { id : 1, name : "", price : 0, description : '', period : "", presentation_image : "", difficulty : "",confort : ''},
    confirmation : false
})
function display() {
    if(title.value.value.split(" ")[0] == "Add") return false
    else return true
}
onMounted(async() => {
    if(router.query.id == undefined) {
        title.value.value = "Add new parent road"
    } else {
        await HttpService.getParents().then((res) => {
            const value:parent_road_list[] = res.data.data
            console.log(value) 
            const updating_title =  Array.from(value).filter((a) => a.name == router.query.id as string)
            console.log(updating_title)
            if(updating_title.length !== 0) {
                title.value.value= "Update one parent road" 
                title.value.updating_title = updating_title[0]              
            }
        })
    }
}) 
    async function update_before_deleting() {
        await HttpService.deleteParent(forceInt(title.value.updating_title.id.toString()))
    }
async function upload(e : Event) {
    e.preventDefault()
    const formData : FormData = new FormData(e.target as HTMLFormElement)
    formData.forEach(element => {
        console.log(element)
        if(!element) {
            title.value.alert = "Required field"
        }
    });
    if(title.value.value.split(" ")[0] == "Add") {
        await HttpService.insertParent(formData).then((response) => {
            navigate("/internal-footer/menu-for-admin/list-of-parent",{})
        }).catch((err:AxiosError<{message : string}>) => {
            console.log(err)
            title.value.alert =  err.response?.data.message as string
                })
    }
    else if(title.value.value.split(" ")[0] == "Update") {
        formData.append("id",title.value.updating_title.id.toString())
        await HttpService.updateChild(formData).then((response) => {
            navigate("/internal-footer/menu-for-admin/list-of-parent",{})
        }).catch((err:AxiosError<{message : string}>) => {
            console.log(err)
                    title.value.alert =  err.response?.data.message as string
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
    padding: 0;
}
.container-fluid .d-flex {
    background-color: #3f474d;
    width: 100%;
    color: white;
}
.container-fluid .d-flex span {
   width: 200px;

}
.container-fluid .d-flex span i {
    margin: auto;
    font-weight: bold;
    font-family: "Calibri",sans-serif;
    font-style: normal;
}
.bg-transparent div .text-dark {
    font-weight: bold;
    margin-right: 10px;
}
.container-fluid .bg-transparent {
    display: flex;
    width: 250px;
    margin: 10px;
}

.container-fluid .bg-transparent .col-6 {
    flex-wrap: wrap;
    width: 70%;
}
.border-top-0 {
    width: 250px;
    overflow: hidden;
}
.border-top-0:focus, .border-top-0:active , .border-top-0 {
    border-right: 0 solid transparent;
    border-left: 0 solid transparent;
    border-top: 0 solid transparent;
    overflow: hidden;
    outline: none;
    font-weight: bold;
    font-family: "Calibri Light (Titres)",sans-serif;
    width: 250px;
}
.bg-transparent .d-flex .d-flex input {
    margin-right: 20px;
}
textarea {
    width: 250px;
    height: 250px;
    font-weight: bold;
    border: 2px solid black;
}
.bg-transparent button {
    border: 0;
    font-weight: bold;
    height: 30px;
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
app-internal-footer {
    position: absolute;
}
</style>