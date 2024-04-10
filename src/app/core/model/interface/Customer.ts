export interface ICustomer {
    custId: number;
    name: string;
    mobileNo: string;
    password: string;
  }

export interface APIResponseModel {
    message: string;
    result: boolean;
    data: any;
  }