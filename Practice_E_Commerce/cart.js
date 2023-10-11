
// var totalPriceDisplay = document.getElementById("price")
// var cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
// var totalPrice = 0

// if(cartProducts != null){
//     for(let i=0; i<cartProducts.length; i++){
//         totalPrice += parseInt(cartProducts[i].productPrice)
//         productWrapper.innerHTML += `
//         <div id="card">
//             <h3> Name  : ${cartProducts[i].productName} </h3>
//             <h3> Price : ${cartProducts[i].productPrice} </h3>
//             <button onclick="removeFromCart(${i})" > Remove From Cart </button>
//         </div> `
//     }
// }

// totalPriceDisplay.innerText += totalPrice

// function removeFromCart(i){
//     cartProducts.splice(i,1)
//     localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
//     location.reload()
// }


var productWrapper = document.getElementById("product-wrapper")
var totalPriceDisplay = document.getElementById('price')
let totalPrice = 0
var cartItems = JSON.parse(localStorage.getItem('cart'))

for(let i=0; i<cartItems.length; i++){
    var id = cartItems[i].id
    $.get(`https://dummyjson.com/products/${id}`, function(response){
        productWrapper.innerHTML += `
        <div class="item">
            <img src="${response.thumbnail}" alt="">
            <div class="details">
                <h3>${response.title}</h3>
                <h3>Price : $ ${response.price}</h3>
            </div>
            <button class="btn" onclick="removeFromCart(${i})">Remove</button>
        </div>`
        totalPrice += parseInt(response.price)
        totalPriceDisplay.innerText = totalPrice
    })
}


function removeFromCart(i){
    cartItems.splice(i,1)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    location.reload()
}
function placeOrder(){
    localStorage.removeItem('cart')
    location.reload()

}

