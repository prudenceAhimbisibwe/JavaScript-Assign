class Shop{
    constructor(fruits,quantity){
        this.fruits=fruits
        this.quantity=quantity
        this.fruitPriceList={"pineapple":30,"mango":50,"orange":70};
        this.getTotalCost=function(){
            return `${quantity} ${fruits} for kes ${quantity*this.price}`
        }
    }
}
Shop.prototype.price=30;
var shop=new Shop("pineapple",4)
console.log(shop.getTotalCost());
