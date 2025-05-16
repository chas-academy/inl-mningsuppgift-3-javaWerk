//Hämtar inmatade värden från input-fälten:
const productName = document.getElementById("productInput");
const productPrice = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let currentChart = [];

addButton.addEventListener("click", () => {

    
    //Lägger till objekt i en array av typen { productName, price, quantity }:
    let currProductObject = {product:(productName.value),price:(productPrice.value),quantity:1};
    console.log(currProductObject)
    let productExists = currentChart.find(item => item.product === currProductObject.product);
    console.log("Exists: "+productExists);


    if ( productExists ){
        //Kontrollerar om objektet redan finns i arrayen (genom att jämföra productName) – om det redan finns, öka quantity med 1:
        productExists.quantity += currProductObject.quantity;
    } else {
        //Om den inte finns, lägg till den i listan:
        currentChart.push(currProductObject);
    }
    //Rensar input-fälten efter att en produkt har lagts till:
    productName.value = "";
    productPrice.value = "";

    cartList.innerHTML = "";

    for (currentProd of currentChart){
        cartList.innerHTML = cartList.innerHTML + ( currentProd.quantity +" st "+ currentProd.product +" á: " + currentProd.price + "<br>" );
    }
    
})

