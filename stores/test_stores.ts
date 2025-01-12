export class Token {
    private mail:Ref<string> = ref('');
    private type: Ref<Number> = ref(0);

    get() {
        return {
            mail : this.mail,
            type : this.type
        }
    }
    set(mail:string,type : Number) {
        this.mail.value = mail
        this.type.value = type
    }
    delete() {
        this.mail.value = ""
        this.type.value = 0
    }
}
export const Pinia = new Token()