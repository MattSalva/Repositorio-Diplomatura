let myArr = []
let size = prompt("Ingrese tamaño del array: ")
let mayor = 0

for(let a=0; a<size; a++)
{


    myArr[a] = prompt('Ingrese elemento ' + (a+1) + ' del Array')
}


for (let i=0; i<size; i++){
    if (myArr[i] > mayor){
        mayor = myArr[i]
        console.log(mayor)
    }
}
alert("El numero mas grande del Array es: " + mayor)