export class Productpost {
    constructor(
        public productName:string,
        public productPrice:number,
        public productDescription:string,
       public productCategoryId:number ,
       public imagePath:string,
       public stockQuantity:number
     ){}
}

