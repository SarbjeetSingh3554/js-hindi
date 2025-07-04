// const user = {
//     username: "sarb",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sarb"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "sarb"
//     console.log(this.username)
// }

const chai = () => {
    let username = "saarb"
    console.log(this)
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1.num2) => num1+num2

// const addtwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username: "sarbjeet"})

console.log(addTwo(3,5))

const myArr = [2,34,5,7,5]

// myArr.foreach()