export class Method {
    static navigate(url : string, query? : any) {
        if(!query) return navigateTo(`${url}`)
        else return navigateTo({
            path : url,
            query : query
        })
    }
}