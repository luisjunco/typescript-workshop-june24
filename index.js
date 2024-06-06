//
// String, Numbers and Booleans
//
var userName = "alice";
var age = 30;
var isMarried = false;
//
// Implicit vs. explicit types
//
var amount1 = 10; // explicit
var amount2 = 20; // implicit
//
// Unions
//
var statusCode;
statusCode = 200;
statusCode = "not found";
// statusCode = false;
//
// Functions
//
function calcTotal(a, b) {
    return a + b;
}
var result = calcTotal(10, 5);
// 
// Arrays
// 
var numbers = [1, 2, 3]; //implicit
var names = ["alice", "bob", "charlie"]; //explicit 
numbers.push(4);
// numbers.push("alice"); // error
names.push("charly");
var player1 = { name: "cristiano", year: 1985 };
var player2 = { name: "messi", year: 1987, favouriteDrink: "mate" };
var usersArr = [
    { userName: "alice", age: 30 },
    { userName: "bob", age: 25, likesPizza: true }
];
usersArr.forEach(function (user) {
    console.log(user.userName);
    // console.log(user.foobar) // error
});
