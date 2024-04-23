//Función a la que se le asigna un arreglo, y cada vez que el valor sea "comida" muestra
// "delicioso"en la consola. Si "comida" no está presente en el arreglo,la consola registra "Tengo hambre" una vez.
function siempreHambriento(arr){
    let arrtwo=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="comida"){
            console.log("delicioso");
        }else{
            arrtwo.push(i);
        }
    }
    if(arr.length==arrtwo.length){
        console.log("Tengo hambre");
    }
}
console.log("--------------------------")
//Filtro paso alto= dado un arreglo y un valor cutoff, devuelve un arreglo que contenga solo los valores mayores a cutoff
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log("--------------------------")
//Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+= arr[i];
    }
    let average= sum/arr.length;
    var count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>average){
            count++
        }
    }
    return count;
}
console.log("--------------------------") 
//función que invierte los valores de un arreglo y los devuelve como otro arreglo
function reverse(arr) {
    let arrReverse=[];
    for(let i=arr.length-1;i>=0;i--){
        arrReverse.push(arr[i]);
    }
    return arrReverse;
}

console.log("--------------------------") 
//Función que devuelve un arreglo de números de Fibonacci hasta una longitud dada n
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(let i=1;i<n-1;i++){
        fibArr.push(fibArr[i-1]+fibArr[i]);
    }
    return fibArr;
}



