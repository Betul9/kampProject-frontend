import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory :Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })   
  }

  removeCurrentCategory(){
    this.currentCategory = {categoryId:0, categoryName:""} 
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    let defaultCategory:Category = {categoryId:0,categoryName:""}
    if(this.currentCategory.categoryId == defaultCategory.categoryId){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
