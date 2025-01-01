<template>
    <section data-aos="fade-right" class="row">
        <div class="col-12 m-2">
            <div class="row">
    <div class="col-6 d-flex flex-nowrap m-auto overflow-hidden p-0">
        <div @click="updatestyle" :class="selected">Membre</div>
        <div @click="updatestyle" :class="unselected" >Admin</div>        
    </div>
</div>
        </div>
        <form @submit="formvalidation" class="col-12 d-flex flex-column p-1">
  <div class="col-lg-4 col-md-6 col-12 m-lg-auto m-md-auto p-1 rounded">
    <div class="col-12 mt-3 mb-5"><h3 class="text-center text-light">Connexion</h3></div>
    <div class="col-12 mt-1 mb-1"><h5 class="text-center">{{ value_show }}</h5></div>
    <div class="col-lg-10 d-flex flex-column justify-content-center col-md-10 col-12 m-auto mb-4">
      <label class="col-12 text-center text-light fs-4" for="mail">Enter your email</label>
      <input class="col-11 m-auto mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="email" name="mail" id="">
    </div>
    <div class="col-lg-10 d-flex flex-column justify-content-center col-md-10 col-12 m-auto mb-4">
      <label class="col-12 text-center text-light fs-4" for="mot_de_passe">Enter your passwords</label>
      <input class="col-11  mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="password" name="mot_de_passe" id="">
    </div> 
      <div class="col-lg-10 col-md-10 col-7 m-auto mb-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
        <button  type="submit" class="bg-primary p-2 text-light rounded border-0">Log in</button>
      </div>
      <div class="validate d-flex col-12 flex-column mb-2">
        <span class="col-12 fs-5 text-lg-start text-md-start text-center"><NuxtLink to="/internal-footer/subscription" class="text-decoration-none"> Sign up </NuxtLink></span>
        <span class="col-12 fs-6 text-lg-start text-md-start text-center"><NuxtLink to="/" class="text-decoration-none">Cancel</NuxtLink></span>
    </div>
  </div>
</form>
    </section>
</template>
<script setup lang="ts">
// import type { AxiosResponse } from 'axios';
import { Method, storage_for_token } from '~/all_model/fonction-classique';
import { HttpService } from '~/server/fetch-class/fetch';
import { PiniaStore } from '~/stores/token';
const store = PiniaStore()
let value_show = ref("")
let type:Ref<number> = ref(0)

let selected:Ref<string> = ref("selected text-center col-6 m-0 p-0")
let unselected:Ref<string> = ref("text-center m-0 p-0 col-6")

//all methods
 async function formvalidation(e:Event) {
    e.preventDefault()
    let data:FormData = new FormData(e.target as HTMLFormElement)
    if(type.value) {
      await HttpService.login_admin(data).then((res) => {
            // store.change(data.get("mail") as string,type.value)
            if(res.data.message == "-1") {
                navigateTo({path : "/internal-footer/change_pass",query : {old : data.get("mot_de_passe") as string}})
            } else {
                console.log("manin 2")
                store.change(data.get("mail") as string,type.value)
                navigateTo("/internal-footer/menu-for-admin/list-of-parent")
            }
        }).catch((err) => {
            console.log(err)
            value_show.value = err.response.data.message
        })
    } else {
        await HttpService.login_member(data).then((res) => {
            store.change(data.get("mail") as string,type.value)
            Method.navigate("/")
        }).catch((err) => {
            console.log(err)
            value_show.value = err.response.data.message
        })
    }
 }
 function updatestyle() {
    const temp:string = selected.value
    selected.value = unselected.value
    unselected.value = temp
    type.value = type.value == 0 ? 1 : 0
}
</script>
<style scoped>
.row .col-6 {
    cursor: pointer;
}
.row .col-6 .selected {
    background-color: #076eaa;
    color: #d3cccc;
    box-sizing: border-box;
    cursor: pointer;
}
section.container {
    margin-top: 5px;
}
.row .d-flex {
    border-radius: 30px;
}
.row /* .col-12 {
    height: 70vh;
} */
.col-12 .col-lg-4 {
    background-color: #383535;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    outline: none;
    color: rgb(206, 197, 197);
    transition: 0.5s;
    margin: auto;
    background-color: #383535;
    border-color: #b9b1b1;
    font-family: sans-serif;
}
input:focus {
    outline: none;
    background-color: #383535;
    color: white;
    caret-color: #b9b1b1;
    transform: translateY(5px);
    transition: 0.5s;
}
.row .col-12 .col-lg-10 .p-2{
    transition: 0.5s;
}
.row .col-12 .col-lg-10 .p-2:hover {
    transform: translateY(5px);
    transition: 0.5s;
}
.validate span a{
    cursor: pointer;
    transition: 1s;
    padding-left: 20px;
    color: gray;
}
.row .col-12 .col-lg-4 .col-lg-10 label {
    color: white;
    font-size: 20px;
    font-family:  "Calibri Light (Titres)",sans-serif;
    
}
.row .col-12 .col-lg-4 .col-lg-10 .bg-primary {
    font-weight: 500;
}
.validate span:hover > a{
    cursor: pointer;
    color: white;
}
.validate span:hover{
    cursor: pointer;
    color: white;
    transform: translateY(5px);
    transition: 0.5s;
}
h3 {
    font-family: "Lucida Handwriting", sans-serif;
    opacity: 0.5;
}
.row .col-12 .col-lg-4 .col-12 h5 {
    color: red;
}
@media only screen and (max-width : 580px) {
    .row .col-12 .col-lg-4 {
        margin: 0;
    }
    .col-11 {
        display: flex;
        justify-self: center;
    }
}
</style>