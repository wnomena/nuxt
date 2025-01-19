export class Token {
    private mail:Ref<string> = ref('');
    private type: Ref<Number> = ref(0);
    private display : Ref<Boolean> = ref(true)

    get() {
        return {
            mail : this.mail,
            type : this.type,
            display :  this.display

        }
    }
    set(mail:string,type : Number, display : Boolean) {
        this.mail.value = mail
        this.type.value = type
        this.display.value = display
    }
    delete() {
        this.mail.value = ""
        this.type.value = 0,
        this.display.value = false
    }
}
export const Pinia = new Token()