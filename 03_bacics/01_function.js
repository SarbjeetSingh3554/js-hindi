function sayMyname(){
    console.log("s")
}

//sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    return number1+number2
}

const result = addTwoNumbers(3,6)

console.log("Result: ",result)

function logginUserMessage(username){
    if(!undefined){                                     //username treated as false value
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(logginUserMessage("sarb"))


function caalculateCartPrice(val1,val2,...num1){    // ... is a rest operator
    return num1
}

console.log(caalculateCartPrice(200,400,600,2000));


const user = {
    name: "sarb",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    name: "sam",
    price: 249
})

const Arr = [10,200,300]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(Arr))
console.log(returnSecondValue([100,3434,34534,3456,45]))
