/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('hello guys')


// Our first TS Code
let age = 3; // or let age: number =3;
console.log(age)

let firstName: string = 'Tez'

let isAdmin: boolean = true

// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value



// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
let lastName: any = 'Wright'
lastName = 3; //Stay away don't do this!!


// ----- Arrays: Dynamic, you can pass any data type
let students: string[] = ['Sabita', 'Jay', 'Tez']


// Another huge benefit: Code completion
// students.


// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let dog: [number, string] = [1, 'pitbull']

// Code Completion
dog.push('dylan')
console.log(dog) //Don't do this


// ----- Enums: Special "Class" that represents a group of constants.
const small: number = 1
const medium: number = 2
const large: number = 3

// PascalCase "numeric"
enum Sizes {
    Small = 1, 
    Medium = 2,
    Large = 3
}
console.log(Sizes[1])

// "string"
enum Instructors {
    Lead = 'Cortez',
    Associates = 'Tez'
}
console.log(Instructors.Lead) //Cannot check strings only the key

// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
function calculateTax(income: number): number {
    return income * 2
}


// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/
