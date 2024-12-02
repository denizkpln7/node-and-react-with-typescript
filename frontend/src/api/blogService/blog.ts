import {siteConfig} from "../config";
import {Blog, SaveBlogDto} from "../../interface/Blog";

export const getBlogsAllApi = async () => {

    return await siteConfig.get<Blog[]>("/all")
}

export const getBlogByIdApi = async ( id:number ) => {
    return await siteConfig.get<Blog>(`/${id}`)
}

export const saveBlogApi = async ( data:SaveBlogDto ) => {
    return await siteConfig.post<Blog>("/save",data)
}
