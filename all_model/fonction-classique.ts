import type { Reactive } from "vue"

export class Method {
    static navigate(url : string, query? : any) {
        if(!query) return navigateTo(`${url}`)
        else return navigateTo({
            path : url,
            query : query
        })
    }
}

export class storage_for_token {
    private static mail : Reactive<string> | undefined
    private static type_of_account : Reactive<number> | undefined
    private static token : Reactive<string> | undefined

    static set_all_value(mail : string, type_of_account : number, token : string) {
        this.mail = mail,
        this.type_of_account = type_of_account
        this.token = token
    }
    static get_mail(): string {
        if(this.mail !== undefined) return this.mail
        else return ""
    }
    static get_type_of_account():number {
        if(this.type_of_account !== undefined) return this.type_of_account
        else return 2
    }
    static get_token():string {
        if(this.token !== undefined) return this.token
        else return ""
    }

    static delete_all_value(): void {
        this.mail = undefined
        this.token = undefined
        this.type_of_account = undefined
    }
}