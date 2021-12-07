export class GroceryPriceDataResponse {
    id : string;
    itemName: string;
    dateadded: string;
    price:number;

    constructor(public _id:string, public _itemName:string, public _dateadded:string, public _price:number) {
        this.id = _id;
        this.itemName = _itemName;
        this.dateadded = _dateadded;
        this.price = _price;
    }
}
