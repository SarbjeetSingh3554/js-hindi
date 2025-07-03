const tinder = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

console.log(tinderUser);

const regularUser = {
    email: "sarb@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sarb",
            lastname: "singh"
        }    
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {3: "c",4: "d"}

// const obj3 = {onj1,onj2}
// const obj3 = Object.assigh({},obj1,obj2)

const obj3 = {...obj1,...obj3}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "sarb.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(isLoggedIn));


const course = {
    coursename: "Js Hindi",
    price: "999",
    courseInstructor:  "sarb"
}

//.     object destructuring
//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);


// {
//     "name": "sarb",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
]