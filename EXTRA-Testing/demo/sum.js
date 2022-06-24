function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('El argumento debe ser un string');
  }

  return a + b;
}

module.exports = sum;