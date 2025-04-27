<template>
    <section>
    <div class="d-flex justify-content-between">
        <div class="d-flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="none" stroke="#000000" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
              <h3>Les membres</h3>
        </div>
        <div class="d-flex">
            <span style="align-items: center; width: 250px" class="return bg-primary d-flex justify-content-center">
            <i class="bi bi-chevron-left"> <NuxtLink class="text-decoration-none text-light" to="/internal-footer/menu-for-admin/list-of-parent"> Retour</NuxtLink></i>
            </span>
            </div>
    </div>
    <div class="commentary_list" v-for="i in all_value.data" :key="i.mail.toString()">
        <div class="container-fluid d-flex justify-content-between">
            <span>Nom : {{ i.nom_complet }}</span>
            <span> E-mail : {{ i.mail }}</span>
            <div class="rounded border d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="none" stroke="#036d03" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg><span>Contacter</span></div>
            <div @click="deletion(i.id.toString())" class="delete_member rounded border d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
             </svg> <span>Effacer</span></div>
        </div>
    </div>
    <loading-component v-if="loading"/>
</section>
</template>
<script setup lang="ts">
import { navigate } from '~/all_model/fonction-classique';
import type { member_model } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
let loading:Ref<boolean> = ref(true)
    let all_value: Ref<{data : member_model[]}> = ref({
        data : [],
    })

    onMounted(() => {
        HttpService.getAllMember().then((res) => {
            all_value.value.data = [...res.data.data]
        }).finally(function () {
            loading.value = false
        })
    })
    function deletion(i:string) {
        HttpService.deleteMember(parseInt(i.toString())).then((res) => {
            navigate("/internal-footer/menu-for-admin/list-of-parent",{})
        })
    }
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
section .d-flex .d-flex {
    width: fit-content;
}
i {
    font-weight: bold;
}
.return {
    width: 150px;
    cursor: pointer;

}
section .commentary_list {
    width: 100%;
    background-color: white;
}
section .commentary_list .container-fluid{
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
section .commentary_list .container-fluid .rounded {
    padding: 3px;
    color: #036d03;
    background-color: rgb(118, 207, 118);
    width: 150px;
    align-items: center;
    cursor: pointer;
}
section .commentary_list .container-fluid .delete_member {
    padding: 3px;
    color: #3f0202;
    background-color: rgb(245, 38, 38);
    width: 150px;
    align-items: center;
    cursor: pointer;
}
</style>