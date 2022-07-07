'use strict'
// No cambies los nombres de las funciones.

function factorear(num, arr = [1], divisor = 2) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // let arr = [1];
  // let divisor = 2;
  // while(num !== 1){
  //   if (num % divisor === 0) {
  //     arr.push(divisor);
  //     num = num / divisor;
  //   }else{
  //     divisor++;
  //   }
  // }
  // return arr;

  if(num === 1){
    return arr;
  }else{
    if(num % divisor === 0){
      arr.push(divisor);
      return factorear(num / divisor, arr, divisor);
    }else{
      while(num % divisor !== 0){
        divisor++
      }
      arr.push(divisor);
    }
    return factorear(num/divisor, arr, divisor)
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1] ) {
        let aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const {length} = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i, temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let indexMin;
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i;
    for (let j = i; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      let aux = array[i];
      array[i] = array[indexMin];
      array[indexMin] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
