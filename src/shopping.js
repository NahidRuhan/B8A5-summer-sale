document.getElementById('kitchen-card1').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('kitchen-card1-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('kitchen-card1-name')
    disabledButtons()

})
document.getElementById('kitchen-card2').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('kitchen-card2-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('kitchen-card2-name')
    disabledButtons()

})
document.getElementById('kitchen-card3').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('kitchen-card3-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('kitchen-card3-name')
    disabledButtons()

})
document.getElementById('sports-card1').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('sports-card1-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('sports-card1-name')
    disabledButtons()

})
document.getElementById('sports-card2').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('sports-card2-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('sports-card2-name')
    disabledButtons()

})
document.getElementById('sports-card3').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('sports-card3-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('sports-card3-name')
    disabledButtons()

})
document.getElementById('furniture-card1').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('furniture-card1-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('furniture-card1-name')
    disabledButtons()

})
document.getElementById('furniture-card2').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('furniture-card2-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('furniture-card2-name')
    disabledButtons()

})
document.getElementById('furniture-card3').addEventListener('click', function(){

    const price = parseFloat(document.getElementById('furniture-card3-price').innerText).toFixed(2)
    replaceTotalPrice(price)
    replaceTotal()
    updateCart('furniture-card3-name')
    disabledButtons()

})

document.getElementById('apply-btn').addEventListener('click', function(){

        if(document.getElementById('input').value == 'SELL200'){
        document.getElementById('disc').innerText = ((parseFloat(document.getElementById('total-price').innerText)).toFixed(2)*0.2).toFixed(2)
        document.getElementById('input').value = ''
    }
    replaceTotal()
})

document.getElementById('home').addEventListener('click', function(){
    window.location.href = 'index.html'
})