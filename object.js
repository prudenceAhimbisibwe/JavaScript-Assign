var shop=[
    {
        name:"pineapple",
        price:30,
    },
    {
        name:"mangoes",
        price:50,
    },
    {
        name:"orange",
        price:35,
    }
]
function getTotalCost(name,quantity){
    let b=shop.find(item=>item.name===name)
    console.log(`${quantity} ${name} for Kes ${b.price*quantity}`)
}
getTotalCost("pineapple",4)