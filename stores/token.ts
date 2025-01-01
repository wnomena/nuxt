import {defineStore} from "pinia"
import type { pinia_model } from "~/all_model/model"
export const PiniaStore = defineStore("store",{
    state: ():pinia_model => {
        return {
            mail : undefined,
            type : 0
        }
    },
    
    actions: {
       change(mail:string,type : number) {
        this.mail = mail
        this.type = type
       },
       delete_token() {
        this.mail = undefined
        this.type = 0
       },
        get_mail():string | undefined {
            return this.mail
        },
        get_mail_and_type() {
            return {
                mail : this.mail,
                type :  this.type
            }
        },
        authenticate():boolean {
            console.log(this.get_mail_and_type())
            return this.mail && this.type == 1 ? true : false
        }
    },
})