const name = "sarb"
const repoCount = 50

//console.log(name +repoCount + "value");

// console.log(`Hello my name id ${name} and my repo count is &{repoCount}`)

const gameName = new String('sarbjeet-singh')

// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('e'))


const newString = gameName.substring(0,4) //we can not give -ve values in substring
console.log(newString)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne =" sarb  "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://sarb.com//sarb%20singh"


console.log(url.replace('%20','-')) 


console.log(url.includes('sundar'))


console.log(gameName.split('-'));

