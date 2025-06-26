console.log("2" > 1)
console.log("02" > 1)

console.log(null>0)
console.log(null == 0)
console.log(null >= 0)
//avoid such comparison

/* the reason is that equality check ==
ans comparison operator >= works differently
comparison convert null to a number treating it as 0*/


// ===

console.log("2" === 2)
