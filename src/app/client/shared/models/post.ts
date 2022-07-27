export interface Post {
    id?:number
    titre:string
    image:string
    prix:string
    categories?: Array<string>
    description:string
}
