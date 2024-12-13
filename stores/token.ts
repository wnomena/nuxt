import {defineStore} from "pinia"
export const PiniaStore = defineStore("store",{
    state: () => {
        return {
            mail : "",
            type : 0
        }
    },
    actions: {
       change(mail:string,type : number) {
        this.mail = mail
        this.type = type
       },
       delete_token() {
        this.mail = ""
        this.type = 0
       },
        get_mail():String {
            return this.mail
        }
    }
})