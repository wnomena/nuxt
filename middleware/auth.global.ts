import { Method } from "~/all_model/fonction-classique"
import {createPinia, defineStore, setActivePinia} from "pinia"
import { useCounterStore } from "~/stores/token"
// const pinia = createPinia()
// setActivePinia(pinia)
// const Pinia = useCounterStore()

export default defineNuxtRouteMiddleware((to,from) => {
    const path = to.path.split("/")
    Teste.set_display(false)
    if(path[2]  == 'menu-for-admin') {
        if(!Teste.authenticate()) {
           return Method.navigate("/internal-footer/connexion")
        }}
})