const DateTime = luxon.DateTime;
const dt =DateTime.now();

console.log(dt.toLocaleString(DateTime.DATETIME_SHORT));

const suma=dt.plus({hours :1 ,minutes: 10});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

const resta=dt.minus({month
    :1, days:10,hours :1 ,minutes: 10});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));