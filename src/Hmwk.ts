// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: array

let d = {age: number};
// A: any

let e = [3]
// A: 

let f;
// A:end line 

let g = []
// A: empty array



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:releaseYear should be string? Also they need to specify after the colon which types they are? 

let prices = [100, 200, 300];
prices[0] = '$100';
// A:Need to specify the type with colon type and then the rest of the code. 

function myFunc(a: number, b: number): number {}
// A:number was already specified inside the parenthesis 

// This code does not execute properly. Try to figure out why.
let a: number = 5
let b: number = 6

function multiply(a: number, b: number): number {
    return a * b
}
  console.log(multiply(a, b))
  