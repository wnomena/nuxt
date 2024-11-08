export class LocalStorageService {
    static getValueFormSessionStorage(params:string) :string | null {
      return process.client ? sessionStorage.getItem(`${params}`) : null 
    }
    static setValueForSessionStorage(params:string,value : string) :void {
     if(process.client) sessionStorage.setItem(`${params}`,`${value}`)
    }
    static removeValueFormSessionStorage(value : string):void {
       if(process.client) sessionStorage.removeItem(value)
    }
    // actualisation() : void {
    //  if(process.client) location.
    // }
  }
