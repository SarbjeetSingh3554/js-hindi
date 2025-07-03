//.  Singleton
//object.create()

//object literals

const mySymbol = Symbol("Key1")


const JsUser = {
    name: "Sarb",
    age: 19,
    [mySymbol]: "myKey1",
    email: "sarb@google.com",     //keys are processed as strings
    isLoggedIn: true,
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySymbol]);
// console.log(JsUser[mySymbol]);


// JsUser.email = "sarb12.com"
// Object.freeze(JsUser)
// JsUser.email = "1234.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
// console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting());

JsUser.greeting()
JsUser.greetingTwo()