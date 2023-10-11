// https://dummyjson.com/products



var productWrapper = document.getElementById("product-wrapper")

$.get("https://dummyjson.com/products", function(response){
    var products = response.products
    for(let i=0; i<products.length; i++){
        productWrapper.innerHTML += `
        
        <a href="./productDetails.html?id=${products[i].id}">
            <div class="card">
                <img id="main-image" src="${products[i].thumbnail}" alt="">
                <h3><b>${products[i].title}</b></h3>
                <h3><b>$ ${products[i].price}</b></h3>
                <h3><b>Rating : ${products[i].rating}</b></h3>
            </div>
        </a>`
    }
})





