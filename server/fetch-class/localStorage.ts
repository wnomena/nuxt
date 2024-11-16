import { storage_for_token } from "~/all_model/fonction-classique"

export class LocalStorageService {
    static getValueFormSessionStorage(params:string) :string {
      console.log(storage_for_token.get_mail())
      let i = sessionStorage.getItem(params)
      if(i !== null) return i
      else return ""
    }
    static setValueForSessionStorage(params:string,value : string) :void {
     if(process.client) sessionStorage.setItem(`${params}`,`${value}`)
      storage_for_token.set_all_value("dfgfdg",0,"fdgmfjgdmfg")

    }
    static removeValueFormSessionStorage(value : string):void {
       if(process.client) sessionStorage.removeItem(value)
    }
  }
