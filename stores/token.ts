import {createPinia, defineStore, setActivePinia} from "pinia"
import type { pinia_model } from "~/all_model/model"

const useCounterStore = defineStore('counter', {
    state: () => ({ type: 0, mail: '' }),
    getters: {
      doubleCount: (state) => state.type * 2,
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
  
const pinia = createPinia()
setActivePinia(pinia)
export const Pinia = useCounterStore()