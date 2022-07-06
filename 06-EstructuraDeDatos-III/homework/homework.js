"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null
}


BinarySearchTree.prototype.insert = function (value) {
  let nodo = new BinarySearchTree(value);
  
    if (value < this.value) {
      if (!this.left) {
        this.left = nodo;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = nodo;
      } else {
        this.right.insert(value);
      }
    }
  }


BinarySearchTree.prototype.size = function () {
  if (!this.right && !this.left) {
    return 1;
  } else if(this.right && this.left){
    return 1 + this.left.size() + this.right.size();
  }else if(this.right){
    return 1 + this.right.size();
  }else if(this.left){
    return 1 + this.left.size();
  }
}


BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }else{
    if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (f, order) {
  if (order === 'post-order') { // izq der nodo
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    if (this.right !== null) this.right.depthFirstForEach(f, order);
    f(this.value);

  }else if (order === 'pre-order') {//nodo - izq - der
    f(this.value);
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    if (this.right !== null) this.right.depthFirstForEach(f, order);
  
  } else {// izq nodo der
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    f(this.value);
    if (this.right !== null) this.right.depthFirstForEach(f, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {

  if (this.left) {
      array.push(this.left);
  }

  if (this.right) {
      array.push(this.right);
  }

  cb(this.value);
  if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
