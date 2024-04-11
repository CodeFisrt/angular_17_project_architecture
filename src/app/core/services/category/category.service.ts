import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constant/constant';
import { APIResponseModel, ICategory } from '../../model/interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      APIConstant.category.GET_ALL_CATEGORY
    );
  }

  addCategory(category: ICategory): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      APIConstant.category.ADD_CATEGORY,
      category
    );
  }
}
