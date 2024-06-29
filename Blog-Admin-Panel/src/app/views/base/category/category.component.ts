import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../../../services/blog.service'
import { HttpClient } from '@angular/common/http';
import { Category, ApiResponse } from '../../../models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private blogservice: BlogService, private http: HttpClient) { }
  private apiUrl = 'https://angular-blog-backend.vercel.app/api/v1/blog';
  NgForm = NgForm;
  @ViewChild('categoryInput') inputElement: ElementRef

  data: Object
  categories: Category[] = [];
  status: string = '';
  selectedCategory: Category = { _id: '', __v: 0 };
  confirmDelete:boolean;
  category:ApiResponse[]=[]



  ngOnInit(){
    this.getCategory()
  }



  logval() {
    const data = {
      categoryname: this.inputElement.nativeElement.value
    }
    this.blogservice.addCategory(data).subscribe((data) => {

      this.getCategory();





    })
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

  // getCategory(){
  //   this.http.get(`${this.apiUrl}/category`).subscribe((data)=>{
  //     console.log(data)
  //     this.categories=data
  //   })
  // }

  openEditModal(category: Category) {
    this.selectedCategory = { ...category }; // Clone the category object
    console.log(this.selectedCategory)
    console.log(`${this.apiUrl}/category/${this.selectedCategory._id}`)
    //const modal = document.getElementById('verticallyCenteredModal') as any;
    //modal.cModal.show(); // Show the modal
  }

  saveCategory() {
    const categ={
      categoryname:this.selectedCategory.categoryname

    }
    //console.log('categ log '+categ)
    
    this.http.patch(`${this.apiUrl}/category/${this.selectedCategory._id}`,categ ).subscribe(
      (response) => {
        console.log('Category updated successfully', response);
        
        // Update the local categories array with the edited category
        const index = this.categories.findIndex(cat => cat._id === this.selectedCategory._id);
        if (index !== -1) {
          this.categories[index] = { ...this.selectedCategory };
        }
        // const modal = document.getElementById('verticallyCenteredModal') as any;
        // modal.cModal.hide(); // Hide the modal
      },
      (error) => {
        console.error('Error updating category:', error);
       
      }
    );
  }
 
  callme(res:any){
    this.http.delete(`${this.apiUrl}/category/${this.selectedCategory._id}`).subscribe((resp)=>{
      console.log('delted')
      this.getCategory()
    },(error)=>{
      console.log('error while deleting '+error)

    })

    
  }
 

}













