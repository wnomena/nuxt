
import { navigate } from "~/all_model/fonction-classique"
import { useCounterStore } from "~/stores/token"
const Pinia = useCounterStore()

export default defineNuxtRouteMiddleware((to,from) => {
    console.log ('Pinia.displayMenu()')})