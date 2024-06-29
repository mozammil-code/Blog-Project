import { Component } from '@angular/core';
import { BlogService } from '../../../services/blog.service'
import { GetAllBlogResp,AllPost} from '../../../models/category'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  allblogs:AllPost[]=[];
  //categories: Category[] = [];
  myblog:AllPost[]=[]
  loader:boolean=false
  isFeatured: boolean = false;
  post:any

  constructor(private blogservice:BlogService,private http:HttpClient ){

  }


 

  
  toggleFeatured(blogId: string) {
    this.blogservice.getPostById(blogId).subscribe(
      (response: any) => {
        if (!response || !response.data || !response.data.blog) {
          console.error('No valid data returned from the service');
          return;
        }

        const blog = response.data.blog;

        if (blog.featured === undefined) {
          console.error('The blog post does not have a featured property');
          return;
        }

        // Toggle the featured state
        blog.featured = !blog.featured;
        const featuredObject = { featured: blog.featured };
        console.log('Featured Object:', featuredObject);

        //Optionally, update the backend with the new state
        this.blogservice.updatePost(blogId, featuredObject).subscribe(updatedBlog => {
          console.log('Post updated:', updatedBlog);

          // Update local state
          const index = this.myblog.findIndex(b => b._id === blogId);
          if (index !== -1) {
            this.myblog[index].featured = blog.featured;
          }
        });
      },
      (error) => {
        console.error('Error fetching post:', error);
      }
    );
  }

  ngOnInit(){

    this.getallposts()

  }


  getallposts(){
    this.http.get('https://angular-blog-backend.vercel.app/api/v1/blog').subscribe((data:[])=>{



      this.myblog=data
      //this.myblog=data

      
    })

  }

  deletePost(id:string){
    console.log(id)
    this.blogservice.removePost(id).subscribe((data)=>{
      console.log(data)
      this.getallposts()
    })

  }

}
