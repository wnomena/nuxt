<template>
<section>
    <div class="d-flex justify-content-between">
        <div class="d-flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="#ffffff" stroke="#000000" class="bi bi-chat-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              </svg>
              <h3>Les commentaires </h3>
        </div>
        <span style="align-items: center; width: 250px" class="return bg-primary d-flex justify-content-center">
            <i class="bi bi-chevron-left"> Retour</i>
        </span>
    </div>
        <div v-if="all_value.list_or_string">
            <div class="commentary_list" v-for="i in all_value.data" :key="i.id.toString()">
        <div class="container-fluid d-flex justify-content-between">
            <span> identifiant : {{ i.identifiant }}</span>
            <span> E-mail : {{ i.mail }}</span>
            <div class="commentary_container">
                <span @click="update_value" class="text-decoration-underline-hover">Commentaire</span>
            </div>
            <div class="rounded border d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="none" stroke="#036d03" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg><span>Contacter</span></div>
            <div class="delete_member rounded border d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
             </svg> <span>Effacer</span></div>
        </div>
    </div>
        </div>
        <div v-else class="bg-transparent col-10 border m-auto">
           <div class="col-10 m-auto">
            <h3 class="text-dark text-center">{{ all_value.string_commentary }}</h3>
           </div>
            <div class=" bg-transparent d-flex justify-content-center"><div @click="update_value" class="text-dark text-center border ps-5 pe-5 rounded bg-success">Fermer</div></div>
        </div>
</section>
</template>

<script lang="ts" setup>
import type { commentary_model } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';

    let all_value: Ref<{data : commentary_model[],string_commentary : string, list_or_string : boolean}> = ref({
        data : [],
        string_commentary : "",
        list_or_string : true
    })

    onMounted(async() => {
       await HttpService.getCommentaries().then((res) => {
            all_value.value.data = [...res.data.data]
        })
    })
    function update_value() {
        all_value.value.list_or_string = all_value.value.list_or_string == true ? false : true
    }
    //un fonction d'éffacement de comantaire/et un composant de confirmation avant l'effacement.
</script>

<style scoped>
    section {
    width: 100%;
    color: white;
}
section .d-flex {
    width: 100%;
    background-color: #383535;
}
i {
    font-weight: bold;
}
.return {
    width: 150px;
    cursor: pointer;

}
section div .commentary_list {
    width: 100%;
    background-color: white;
}
section div .commentary_list .container-fluid{
    width: 100%;
    background-color: white;
    color: black;
    font-weight: bold;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
}
section div .commentary_list .container-fluid .rounded {
    padding: 3px;
    color: #036d03;
    background-color: rgb(118, 207, 118);
    width: 150px;
    align-items: center;
    cursor: pointer;
}
section div .commentary_list .container-fluid .delete_member {
    padding: 3px;
    color: #3f0202;
    background-color: rgb(245, 38, 38);
    width: 150px;
    align-items: center;
    cursor: pointer;
}
section div .commentary_list .container-fluid .commentary_container span:hover {
    color : #00CCFF;
    cursor: pointer;
}
</style>