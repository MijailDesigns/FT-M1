
function checkSeatStatus(letra, numero) {
    if (typeof letra !== 'string') throw new TypeError('First parameter is not a string');
    if (typeof numero !== 'number') throw new TypeError('Second parameter is not a number');

    const seat = getSeat(letra,numero);
    return seat.booked;
}

function getRowNumber(letra) {
    return letra.charCodeAt(0) - 65;
}

function book(letra, numero) {
    if (!checkSeatStatus(letra, numero)) {
        const seat = getSeat(letra, numero);
        seat.booked = true;
        return `Seat in ${letra}${numero} successfully booked`;
    } else {
        return `Seat in ${letra}${numero} is already booked`;
    }
}

function getSeat(letra, numero) {
    const numberRow = getRowNumber(letra);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[numero];
    return seat;
}

const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];





module.exports = {
    checkSeatStatus, 
    getRowNumber, 
    book
};