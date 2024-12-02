export type Blogs = Blog[]

export interface Blog {
    _id: string
    name: string
    email: string
    title: string
    message: string
    time: string
    __v: number
}

export interface SaveBlogDto {
    name: string
    email: string
    title: string
    message: string
}
