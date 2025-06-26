// on the basics of how data is stored in memoryans accessed can be devided as follows:-

// Primitive

// 7 type : string,Number ,Bool ,Null ,Undefined ,Symbol ,BigInt


const score = 100
const scoreval = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 2342423423431n // Bigint by typing n at last

// referance typ/non=primitive

// Array ,Object ,Functions

const heros=["shaktiman","superman"]
let myObj = {
    name: "sarb",
    age: 22,
}

const myFunction = function(){
    console.log("whsts up")
}



//*****************************************/

//stack(Primitive) , Heap (Non-Primitive)

let myname="sarb"
let yourName=myname
yourName = "abd"

console.log(myname)
console.log(yourName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email)
console.log(userTwo.email)