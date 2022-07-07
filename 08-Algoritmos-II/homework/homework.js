'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length > 1) {
    let random = Math.round(Math.random() * array.length);
    let pivot = array.splice(random, 1);
    let smaller = [], bigger = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > pivot) {
        bigger.push(array[i]);
      }else{
        smaller.push(array[i]);
      }
    }
    return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
  }else{
    return array;
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function merge(a, b) {
    let c = [];
    while (a.length && b.length > 0) {
      if (a[0] > b[0]) {
        c.push(b[0])
        b.splice(0,1)
      } else {
        c.push(a[0])
        a.splice(0,1)
      }
    }
    while (a.length > 0) {
      c.push(a[0])
      a.splice(0,1)
    }
    while (b.length > 0) {
      c.push(b[0])
      b.splice(0,1)
    }
    return c;
  }

  if(array.length > 1){
    let middle = Math.floor((array.length) / 2);
    let one = array.slice(0, middle),
    two = array.slice(middle, array.length);
    one = mergeSort(one), two = mergeSort(two);
    return merge(one, two);
  }else{
    return array;
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
