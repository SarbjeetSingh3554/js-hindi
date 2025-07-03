const marvel = ["Hulk" ,"Spiderman"]
const dc = ["Flash"]

// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[2][0]);

// const all = marvel.concat(dc)
// console.log(all);

const all = [...marvel, ...dc]

console.log(all);

const another = [1,2,4,[,4,2,1],5,[7,5,3,1,[35]]]

const real = another.flat(Infinity)
console.log(real);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Sarbjeet"));
console.log(Array.from({name: "sarb"})); //intresting case for interview

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
