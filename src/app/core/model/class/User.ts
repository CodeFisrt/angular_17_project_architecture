export class User {
    name: string;
    mobileNo: string;

    constructor() {
        this.name = '';
        this.mobileNo = '';
    }
}

export class Product {
    productId: number;
    productSku: string;
    productName: string;
    productPrice: number;
    productShortName: string;
    productDescription: string;
    createdDate: Date;
    deliveryTimeSpan: string;
    categoryId: number;
    productImageUrl: string;
    categoryName: string;

    constructor()  {
        this.categoryId = 0;
        this.productId = 0;
        this.categoryName = '';
        this.createdDate = new Date(),
        this.deliveryTimeSpan = '';
        this.productDescription = '';
        this.productName = '';
        this.productImageUrl= '';
        this.productShortName = '';
        this.productSku = '';
        this.productPrice = 0;
    }
        
    
  }