import {createPinia, defineStore, setActivePinia} from "pinia"
import type { pinia_model } from "~/all_model/model"

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            type : 0,
            mail : ""
        }
    },
    actions: {
        get(): pinia_model {
            return {
                mail : this.mail,
                type : this.type
            }
        },
        set(mail : string, type : number) {
            this.mail = mail,
            this.type = type
        },
        delete() {
            this.mail = '',
            this.type = 0
        },
        authenticate():Boolean {
            return this.mail.length > 4 && this.type > 0 ? true : false
        }
    },
  })
  
// const pinia = createPinia()
// setActivePinia(pinia)
// export const Pinia = useCounterStore()

export let Teste = {
    type : ref(0),
    mail : ref(""),
    display : ref(false),
    get : function(){
        return {
            mail : this.mail.value,
            type : this.type.value,
            display : this.display.value
        }
    },
    set : function(mail : string, type : number) {
        this.mail.value = mail
        this.type.value = type
    },
    set_display: function(display:boolean) {
        this.display.value = display
        console.log(display)
    },
    delete : function() {
        this.mail.value = ""
        this.type.value = 0
        this.display.value = false
        navigateTo({
            path : "/"
        })
    },
    authenticate : function() {
        return this.mail.value && this.type.value == 1 ? true : false
    }
}

function get() {
    throw new Error("Function not implemented.")
}
