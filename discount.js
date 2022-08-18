document.getElementById('discount-btn').addEventListener('click', function(){
    // for input field 
    const discountfield = document.getElementById('discount-field');
    const newDiscount = discountfield.value ;
    console.log(newDiscount);
    
    discountfield.value = '';

    // for text field 
    const priceTotal = document.getElementById('price-value');
    const previousPriceString = priceTotal.innerText;
    const previousPrice = parseFloat(previousPriceString);

    if(newDiscount === 'DOM'){
        const discount = (previousPrice * 30)/100;
        const afterDiscount = previousPrice - discount;
        priceTotal.innerText = afterDiscount
        return afterDiscount;
    }
    else{
        alert('Enter Valid Voucher');
    }
})