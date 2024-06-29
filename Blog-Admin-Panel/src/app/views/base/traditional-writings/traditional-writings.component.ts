import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from '../../../services/blog.service'
import { Category, ApiResponse } from '../../../models/category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-traditional-writings',
  templateUrl: './traditional-writings.component.html',
  styleUrls: ['./traditional-writings.component.scss']
})
export class TraditionalWritingsComponent {

  public Editor: any = ClassicEditor;
  //categories: any[] = [];
  private apiUrl = 'https://angular-blog-backend.vercel.app/api/v1/blog';
  data: Object
  categories: Category[] = [];
  status: string = '';
  selectedCategory: Category = { _id: '', __v: 0 };
  confirmDelete: boolean;
  category: ApiResponse[] = []
  selectedFile: File | null = null;
  defaultImage: string = '/assets/images/default_image-300x200.png';

  constructor(private blogService: BlogService, private http: HttpClient) { }


  ngOnInit(): void {
    // this.blogService.getCategories().subscribe((data) => {
    //   this.categories = data;
    //   console.log(this.categories)
    // });
    this.getCategory()
  }

  getCategory() {
    this.http.get<ApiResponse>(`${this.apiUrl}/category`).subscribe(
      (data: ApiResponse) => {
        console.log(data)
        this.status = data.status;
        this.categories = data.categories;
        //console.log(this.status, this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // OnFormSubmitted(form: NgForm) {




  //   //this.blogService.callfun(form);
  //   // const formdata = {
  //   //   title: form.value.title,
  //   //   permalink: form.value.permalink,
  //   //   content: form.value.content,
  //   //   category: form.value.category,
  //   //   excerpt: form.value.excerpt,
  //   //   image: form.value.image
  //   // }


  //   // console.log(formdata)

  //   // this.blogService.createBlog(formdata)

 


  // }




  onFormSubmitted(form: NgForm) {
    if (this.selectedFile && form.valid) {
      const formData = new FormData();
      formData.append('title', form.value.title);
      formData.append('permalink', form.value.permalink);
      formData.append('excerpt', form.value.excerpt);
      formData.append('category', form.value.category);
      formData.append('content', form.value.content);
      formData.append('image', this.selectedFile, this.selectedFile.name);

      // Log FormData entries to verify content
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      this.blogService.createBlog(formData)
    }

   
  }



}
