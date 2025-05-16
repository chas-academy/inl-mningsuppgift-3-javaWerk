//Hämtar inmatade värden från input-fälten:
const productName = document.getElementById("productInput");
const productPrice = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

//let currentChart = [ {product:"Gaskammare", price:340000,quantity:1} ];
let currentChart = [];
//let productExists = false;
console.log(currentChart)



addButton.addEventListener("click", () => {

    
    //Lägger till objekt i en array av typen { productName, price, quantity }:
    let currProductObject = {product:(productName.value),price:(productPrice.value),quantity:1};
    console.log(currProductObject)
    let productExists = currentChart.find(item => item.product === currProductObject.product);
    console.log("Exists: "+productExists);


    
    if ( productExists ){
        //Kontrollerar om objektet redan finns i arrayen (genom att jämföra productName) – om det redan finns, öka quantity med 1:
        productExists.quantity += currProductObject.quantity;
        console.log(currProductObject.quantity);
        console.log(currProductObject.product + " Exists " + productExists)
        console.log(currentChart);
    } else {
        //Om den inte finns, lägg till den i listan:
        currentChart.push(currProductObject);
        console.log(currProductObject.product + " New " + productExists)
        console.log(currentChart);
    }
    //Rensar input-fälten efter att en produkt har lagts till:
    productName.value = "";
    productPrice.value = "";

    cartList.innerHTML = "";

    for (currentProd of currentChart){
        cartList.innerHTML = cartList.innerHTML + ( currentProd.quantity +" st "+ currentProd.product +" á: " + currentProd.price + "<br>" );
    }

    //cartListing.push( prod.quantity +" "+ prod.product +" á: " + prod.price )

    //currentChart.forEach(prod => console.log(prod.quantity +" "+ prod.product +" á: " + prod.price));

    //x = currentChart.map(prodName => prodName.product, prodPrice => prodPrice.price);
    //console.log( x )
    //currentChart.forEach(prod => cartListing.push( prod.quantity +" "+ prod.product +" á: " + prod.price ));

    //currentChart.forEach(prod => cartListing.push( (prod.quantity +" "+ prod.product +" á: " + prod.price).toString() ));

    //console.log(typeof cartListing);

    //cartList.innerHTML = cartListing;
    
})

