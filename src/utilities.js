function disabledButtons(){
    if(parseFloat(document.getElementById('total-price').innerText) >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled')
    }
    
    document.getElementById('purchase-btn').removeAttribute('disabled')
}

function replaceTotalPrice(price) {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText).toFixed(2)
    document.getElementById('total-price').innerText = (parseFloat(price)+parseFloat(totalPrice)).toFixed(2)

}
function replaceTotal(){
    document.getElementById('total').innerText = (parseFloat(document.getElementById('total-price').innerText).toFixed(2)-parseFloat(document.getElementById('disc').innerText).toFixed(2)).toFixed(2)
}

function updateCart(id){
    const log = document.getElementById('log')
    const entry = document.createElement('p')
    entry.innerText = `${(log.childElementCount)+1}. ${document.getElementById(id).innerText}`
    log.appendChild(entry)
}