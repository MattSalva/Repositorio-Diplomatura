let c1 = document.getElementById("cuadrado1")
let c2 = document.getElementById("cuadrado2")
let c3 = document.getElementById("cuadrado3")

c1.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red'
}, false)

c2.addEventListener('click', function (){
    document.body.style.backgroundColor = 'blue'
}, false)

c3.addEventListener('click', function (){
    document.body.style.backgroundColor = 'limegreen'
}, false)