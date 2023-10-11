

/*

        
        let id=location.search.replace('?id=','');
*/

var productWrapper = document.getElementById("product-wrapper")

const currentUrl = window.location.href; // get the current URL
const urlObj = new URL(currentUrl); // create a URL object
const params = new URLSearchParams(urlObj.search); // get the query string
const id = params.get("id"); // get the value of the id parameter 

$.get(`https://dummyjson.com/products/${id}`, function(response){
    productWrapper.innerHTML += `
    <div class="product-main-image">
        <img src="${response.thumbnail}" alt="">
    </div>
    <div class="details">
        <h3>Name  : ${response.title}</h3>
        <h3>Brand : ${response.brand}</h3>
        <h3>Description</h3>
        <p>${response.description}</p>
        <h3>Rating : ${response.rating}</h3>
        <h3>Price : $ ${response.price}</h3>
    </div>`

    // $('<div>').addClass('small-images')
    var smallImages = document.createElement('div')
    smallImages.className = 'small-images'
    for(let i=0; i<response.images.length; i++){
        smallImages.innerHTML += `
        <img src="${response.images[i]}" />`
    }
    productWrapper.appendChild(smallImages)
    productWrapper.innerHTML += `<button class="btn" onclick="addToCart(${id})" > Add To Cart </button>`
    productWrapper.innerHTML += `<a href="./cart.html" > <button class="btn" > CheckOut </button> </a>`
    
})

var cartItem = JSON.parse(localStorage.getItem('cart'))

function addToCart(i){

    var obj = {
        id : i
    }
    if(cartItem == null){
        var cartArray = []
        cartArray.push(obj)
        localStorage.setItem('cart', JSON.stringify(cartArray))
    } else {
        cartItem.push(obj)
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }
}

