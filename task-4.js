var a = isNaN('11'); // false as '11' can be convertible to 11
console.log(a);

var b = isNaN(2-10); // false as -8 is a negative number but not a NaN
console.log(b);