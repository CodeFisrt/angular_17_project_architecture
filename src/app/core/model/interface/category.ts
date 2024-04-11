export interface ICategory {
  CategoryId: number;
  CategoryName: string;
  ParentCategoryId: number;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
