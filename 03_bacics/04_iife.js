//Immediately Invoked Function Expression (IIFE)


(function chai(){
    console.log((`DB Connected`))   //named IIFE
})();

// First () is defination  andd second () is call
//to remove polution from global scope and its variables we use IIFE

( (name) =>  {
    console.log(`DB Connected to ${name}`)//unnmamed IIFE
})("sarb")

