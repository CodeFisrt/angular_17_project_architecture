import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categoryList: any[] = [];
  isLoaderPresent: boolean = true;
  catObj: any = {
    CategoryId: 0,
    CategoryName: '',
    ParentCategoryId: 0,
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.http
      .get('https://freeapi.gerasim.in/api/BigBasket/GetAllCategory')
      .subscribe((res: any) => {
        this.categoryList = res.data;
        this.isLoaderPresent = false;
      });
  }
  onSaveCategory() {
    this.isLoaderPresent = true;
    this.http
      .post(
        'https://freeapi.gerasim.in/api/BigBasket/CreateNewCategory',
        this.catObj
      )
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert('Category Created Successfully');
          } else {
            alert(res.message);
          }
          this.isLoaderPresent = false;
        },
        (error) => {
          console.error('Error occurred while saving category:', error);
          this.isLoaderPresent = false;
        }
      );
  }
}
