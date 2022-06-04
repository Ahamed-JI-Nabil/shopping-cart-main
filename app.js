function updateQuantity(product, price, isIncreasing) {
    const productInputText = document.getElementById(product + '-quantity');
    let productInput = productInputText.value;

    if (isIncreasing) {
        productInput = parseInt(productInput) + 1;
    }
    else if (productInput > 0) {
        productInput = parseInt(productInput) - 1;
    }
    productInputText.value = productInput;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productInput * price;

    
    calculateTotal();


}


function getInputValue(product) {
    const productInput = parseInt(document.getElementById(product + '-quantity').value);
    // const productInput = parseInt(productInputText);
    return productInput;
}



function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // updating html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


}


// handle phone increase decrease events

document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantity('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateQuantity('phone', 1219, false)
})


// handle case increase decrease events

document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantity('case', 59, true)

})


document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity('case', 59, false)
})