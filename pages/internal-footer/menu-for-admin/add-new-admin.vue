<template>
        <div class="container m-1">
  <form @submit="validateform" class="row">
    <div class="col-lg-4 col-md-6 col-12 m-lg-auto m-md-auto ps-3 pe-3 rounded">
      <div class="col-12 mt-3 mb-5"><h3 class="text-center text-light">Subscription</h3></div>
      <div class="col-12 mt-1 mb-1"><h5 class="text-center"> {{ all_refs.err }}</h5></div>
      <div class="col-lg-10 col-md-10 col-7 m-auto mb-4">
        <label class="col-12 text-center text-light fs-4" for="nom_complet">Your complete name</label>
        <input class="col-11 m-auto mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="text" name="nom_complet" id="">
      </div>
      <div class="col-lg-10 col-md-10 col-7 m-auto mb-4">
        <label class="col-12 text-center text-light fs-4" for="mail">Your mail </label>
        <input class="col-11 m-auto mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="email" name="mail" id="">
      </div> 
        <div class="col-lg-10 col-md-10 col-7 m-auto mb-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
          <button type="submit" class="bg-primary p-2 text-light rounded border-0">Next </button>
        </div>
        <div class="validate d-flex flex-column mb-2">
          <span class="fs-5 text-lg-start text-md-start text-center"><NuxtLink class="text-decoration-none"  to="/internal-footer/connexion">You had already an account ? </NuxtLink></span>
          <span class="fs-6 text-lg-start text-md-start text-center"><NuxtLink  to="/" class="text-decoration-none">Cancel</NuxtLink></span>
      </div>
    </div>
  </form>
</div>
</template>
<script setup lang="ts">
import { Method } from '~/all_model/fonction-classique';
import { HttpService } from '~/server/fetch-class/fetch';
let all_refs : Ref<{err:string}> = ref({
    err : '',
    complete : "",
    mail : ""
})

//methods
async function validateform(e:Event) {
    e.preventDefault()
    let formData = new FormData(e.target as HTMLFormElement)
    formData.forEach((value) => {
        console.log(value)
    })
    await HttpService.add_new_admin(formData).then((result) => {
        console.log(result)
        Method.navigate('/internal-footer/menu-for-admin/list-of-parent')
    })


}
</script>
<style scoped>
    .row .col-lg-4 {
    background-color: #383535;
    padding: 0;
    /* border-radius: 10px; */
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
.row .col-lg-10 .p-2{
    transition: 0.5s;
}
.row .col-lg-10 .p-2:hover {
    transform: translateY(5px);
    transition: 0.5s;
}
.validate span .text-decoration-none{
    cursor: pointer;
    transition: 1s;
    padding-left: 20px;
    color: gray;
}
.row .col-lg-4 .col-lg-10 label {
    color: white;
    font-size: 20px;
    font-family:  "Calibri Light (Titres)",sans-serif;
    
}
.row .col-lg-4 .col-lg-10 .bg-primary {
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
.row .col-lg-4 .col-12 h5 {
    color: red;
}
</style>