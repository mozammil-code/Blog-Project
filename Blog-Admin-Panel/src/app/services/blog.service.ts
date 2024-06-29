import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBlogResp,AllPost,Blog, BlogResponse,ApiResponse} from '../models/category'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient,private router:Router) { }
  private apiUrl = 'https://angular-blog-backend.vercel.app/api/v1/blog';
  allblogs:AllPost[]=[];

  createBlog(formdata:object){
    this.http.post(this.apiUrl,formdata).subscribe((data)=>{
      if(data){
        this.router.navigate(['/base/post']);
        console.log(data)
      }
      
    })

  }
  getCategories(){
    return this.http.get<ApiResponse>(`${this.apiUrl}/category`)
  }

  addCategory(category:Object){
    return this.http.post(`${this.apiUrl}/category`,category)
    //console.log(category)

  }

  getPostById(id: string): Observable<BlogResponse> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  updatePost(blogId: string, updateData: Partial<Blog>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${blogId}`, updateData);
  }

  removePost(id:string){
    return this.http.delete( `${this.apiUrl}/${id}`)

  }

  featurePost(updatedata,id:string){
    //this.http.patch(`${this.apiUrl}/featured/:id`,updatedata)
    console.log(`${this.apiUrl}/featured/${id}`,updatedata)
  }

  getFeaturedPost(id:string){
    console.log("serviecId "+id)
    return this.http.get(`${this.apiUrl}/featured`)
  }



}
