// src/app/models/category.ts

export interface Category {
    _id: string;
    categoryname?: string;
    __v: number;
}

export interface ApiResponse {
    status: string;
    categories: Category[];
}

export interface GetAllBlogResp{
    status:string
    post:AllPost[]
}
export interface AllPost{
    content:string;
    excerpt:string;
    image:string;
    title:string;
    _id:string;
    category:string;
    date:string,
    featured:boolean

}

// blog.model.ts
export interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  featured: boolean;
}
  export interface BlogResponse {
    status: string;
    data: {
      blog: Blog;
    };
  }
  