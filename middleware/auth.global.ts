
import { navigate } from "~/all_model/fonction-classique"
import { useCounterStore } from "~/stores/token"
// const pinia = createPinia()
// setActivePinia(pinia)
// const Pinia = useCounterStore()

export default defineNuxtRouteMiddleware((to,from) => {
    const path = to.path.split("/")
    if(path[2]  == 'menu-for-admin' || path[2] == "add-commentary") {
        for(let i in useCounterStore()) if( i == undefined) return navigate("/internal-footer/connexion",{})
    }
})