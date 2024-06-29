import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BlogService } from '../../../services/blog.service'; //
import { ApiResponse, Blog, BlogResponse  ,} from '../../../models/category'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  post: any = {}; // Initialize an empty post object
  postId: string;
  categories: any[] = []; // Assuming you have a list of categories
  selectedFile: File = null;


  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.loadPost(this.postId);
    });
    this.loadCategories();
  }
  loadPost(id: string): void {
    this.blogService.getPostById(id).subscribe((response: BlogResponse) => {
      //console.log(response); 
      if (response.data && response.data.blog) {
        this.post = response.data.blog; 
        //console.log(this.post); 
      } else {
        console.error('Unexpected response structure', response);
      }
    });
  }

  loadCategories() {
    this.blogService.getCategories().subscribe((categories:ApiResponse) => {
      //this.categories = categories;
      
      //this.status = categories.status;
        this.categories = categories.categories;
        //console.log(this.categories)

    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


  // onSubmit(form: NgForm): void {
    
  //   if (form.valid) {
  //     const updatedPost = {
  //       ...this.post,
  //       ...form.value
  //     };

  //     const formData = new FormData();
  //     formData.append('title', updatedPost.title);
  //     formData.append('permalink', updatedPost.permalink);
  //     formData.append('excerpt', updatedPost.excerpt);
  //     formData.append('category', updatedPost.category);
  //     formData.append('content', updatedPost.content);

  //     // if (this.selectedFile) {
  //     //   formData.append('image', this.selectedFile, this.selectedFile.name);
  //     // }

  //     console.log(formData)

  //     this.blogService.updatePost(this.postId, formData).subscribe(() => {
  //       this.router.navigate(['/blog']);
  //     });
  //   }
  // }

  onSubmit(form: NgForm): void {
    console.log('on submit called')
    if (form.valid) {
      const updatedPost = {
        ...this.post,
        ...form.value
      };

      console.log('Updated Post:', updatedPost); // Verify the updatedPost structure here

      this.blogService.updatePost(this.postId, updatedPost).subscribe((data) => {

        console.log(data)
        this.router.navigate(['/base/post']);
      });
    }
  }
}
