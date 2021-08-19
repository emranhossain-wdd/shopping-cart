function updateProductNumber (product, price, isIncreasing){
    const productNumber = document.getElementById(product + '-number');
    if (isIncreasing){
        productNumber.value ++
    }
    else if (productNumber.value > 1){
        productNumber.value --
    }
    // product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber.value * price;
    // calculate sub-total
    calculateTotal()
};
function getInputValue(product){
    const productInput = parseInt(document.getElementById(product + '-number').value);
    return productInput;
}
function calculateTotal(){
    const phoneTotal = getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}

// mobile handle
document.getElementById('mobile-plus').addEventListener('click', function (){
    updateProductNumber('mobile', 1219, true);
});
document.getElementById('mobile-minus').addEventListener('click', function (){
    updateProductNumber('mobile', 1219, false);
});
// case handle
document.getElementById('case-plus').addEventListener('click', function (){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function (){
    updateProductNumber('case', 59, false);
});