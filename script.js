// HOF 
const itemsPrice = [1.56,11,33,22,44,55,66]

// function myF(value){
//     return value;
// }

const newAr = itemsPrice.filter( function (value){
    return value>22;
} )

// const newAr=[]
// for(var i =0;i<itemsPrice.length;i++){
//     if(itemsPrice[i]>22){
//         newAr.push(itemsPrice[i]);
//     }
    
// }
console.log(newAr);
// tao ra itemsPrice moi ma gia tang gap doi 
// const NewItemsPrice = itemsPrice.map()
// console.log(NewItemsPrice);


