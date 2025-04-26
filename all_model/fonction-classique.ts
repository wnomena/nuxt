import { Month } from "./model"
export function navigate(url:string,query: {name?: string,id?:number|string,mail?:string}) {
        return navigateTo({path : url,query : query})
    }


export function add_or_udate(type : string):Boolean | undefined {
    if(type.split(" ")[0] == "Add") {
        return false
    }
    else return true
}
export function period_function(i : string):string {
    let table:string[] = []
    const a = i.split(" ")
    for(let i of a) {
        table.push(Month(parseInt(i)))
    }
    return `${table[0]} - ${table[1]}`
}
export function forceInt(string:string | undefined) {
    try {
        return parseInt(string as string)
    } catch (error) {
        throw Error("Exited")
    }
}