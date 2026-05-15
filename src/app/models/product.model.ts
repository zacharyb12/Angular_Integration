export interface Product {
    id : number;
    name : string;
    description : string;
    price : number;
    stock : number;
    userId : number;
}

export interface UpdateProductRequest {
        name : string;
    description : string;
    price : number;
    stock : number;
}



export interface CreateProductRequest {
    name : string;
    description : string;
    price : number;
    stock : number;
}


