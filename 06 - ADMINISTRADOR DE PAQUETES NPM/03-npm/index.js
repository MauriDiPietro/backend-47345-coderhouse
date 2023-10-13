const moment = require('moment');

const hoy = moment();

console.log(`fecha de hoy: ${hoy}`);
console.log(hoy.format('MMMM Do YYYY, h:mm a'));
console.log(moment('1991-11-10', 'YYYY-MM-DD'));

console.log(hoy.diff(moment('1991-11-10', 'YYYY-MM-DD'), 'days'));