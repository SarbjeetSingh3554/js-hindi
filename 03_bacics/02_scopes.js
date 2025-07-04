// var c = 300
let a = 100
if(true){
    let a=10         //block scope
    const b=20
    var c=30
    console.log("Inner: ",a)
}

//global sccope

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "sarb"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
}
// one()

if(true){
    const username = "sarb"
    if(username==="sarb"){
        const website = "youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)



//. +++++++++++++++++++++++++. intresting ++++++++++++++

addOne(5)


function addOne(num){           //declaration
    return num+1
}



addTwo(6)

const addTwo = function(num){   //stored in a variable
    return num+2
}
