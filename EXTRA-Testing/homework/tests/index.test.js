const {checkSeatStatus, getRowNumber, book} = require('../homework');

describe('checkSeatStatus', () => {
  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function')
  });
  
  it('should throw an TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(2, 2)).toThrow(new TypeError('First parameter is not a string'));
  });

  it('should throw an TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(true, 2)).toThrow(new TypeError('First parameter is not a string'));
  });

  it('should throw an TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('Mijail', 'Mijail')).toThrow(new TypeError('Second parameter is not a number'));
  });

  it('should throw an TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('Mijail', true)).toThrow(new TypeError('Second parameter is not a number'));
  });

  it('should return true if the row given is A and the column is 1', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  
  it('should return false if the row given is E and the column is 3', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });

});

describe('getRowNumber',() => {
  it('should return 0 if the row given is A', () => {
    expect(getRowNumber('A')).toBe(0);
  });

  it('should return 2 if the row given is C', () => {
    expect(getRowNumber('C')).toBe(2);
  });  
})



  it('should book the seat if the seat of the row and column given is free', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E', 3)).toBe(true);
  });

  it('should say that is busy if the seat of the row and column given is already booked', () => {
    expect(book('E', 1)).toBe('Seat in E1 is already booked')
  });









