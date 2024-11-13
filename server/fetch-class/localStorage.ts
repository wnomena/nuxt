export class LocalStorageService {
    static getValueFormSessionStorage(params:string) :string {
      let i = sessionStorage.getItem(params)
      if(i !== null) return i
      else return ""
    }
    static setValueForSessionStorage(params:string,value : string) :void {
     if(process.client) sessionStorage.setItem(`${params}`,`${value}`)
    }
    static removeValueFormSessionStorage(value : string):void {
       if(process.client) sessionStorage.removeItem(value)
    }
  }
