import { Method } from "~/all_model/fonction-classique"

export default defineNuxtRouteMiddleware((to,from) => {
    const store = PiniaStore()
    console.log(to.path)
    const path = to.path.split("/")
    console.log(path[2] == "menu-for-admin")
    if(path[2]  == 'menu-for-admin') {
        if(!store.authenticate()) {
           return Method.navigate("/internal-footer/connexion")
        }
    }
})