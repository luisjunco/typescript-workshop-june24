
//
// String, Numbers and Booleans
//

let userName: string = "alice";
let age: number = 30;
let isMarried: boolean = false;

//
// Implicit vs. explicit types
//

let amount1: number = 10; // explicit
let amount2 = 20; // implicit


//
// Unions
//


let statusCode: number | string;

statusCode = 200;
statusCode = "not found";
// statusCode = false;


//
// Functions
//


function calcTotal(a: number, b: number): number{
    return a + b;
}


let result = calcTotal(10, 5);


// 
// Arrays
// 


const numbers = [1, 2, 3]; //implicit
const names: string[] = ["alice", "bob", "charlie"]; //explicit 

numbers.push(4);
// numbers.push("alice"); // error

names.push("charly");
// names.push(5); // error



// 
// Type aliases
// 


type Player = {
    name: string
    year: number
    favouriteDrink?: string
}


const player1 = {name: "cristiano", year: 1985 };
const player2 = {name: "messi", year: 1987, favouriteDrink: "mate"};




// 
// Type aliases (example 2)
// 

type User = {
    userName: string,
    age: number,
    likesPizza?: boolean,
}


const usersArr: User[] = [
    {userName: "alice", age: 30},
    {userName: "bob", age: 25, likesPizza: true}
];


usersArr.forEach(user => {
    console.log(user.userName)
    // console.log(user.foobar) // error
})


