import { Method } from "~/all_model/fonction-classique"
import { Pinia } from '~/stores/token';

export default defineNuxtRouteMiddleware((to,from) => {
    console.log(to.path)
    const path = to.path.split("/")
    console.log(path[2] == "menu-for-admin")
    if(path[2]  == 'menu-for-admin') {
        if(!Pinia.authenticate()) {
           return Method.navigate("/internal-footer/connexion")
        }
    }
})