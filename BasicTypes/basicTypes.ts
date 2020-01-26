// Boolean
let isDone: boolean = false;    // js: var isDone = false;

// Number
let decimal: number = 6;        // js: var decimal = 6;
let hex: number = 0xf00d;       // js: var hex = 0xf00d;
let binary: number = 0b1010;    // js: var binary = 10;
let octal: number = 0o744;      // js: var octal = 484;

// String
let color: string = "blue";                               // js: var color = "blue";
color = 'red';                                            // js: color = 'red';
                                                          //
let fullName = `Bob Bobbington`;                          // js: var fullName = "Bob Bobbington";
let age: number = 37;                                     // js: var age = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;              // js: // js: var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
                                                          //
sentence = "Hello, my name is " + fullName + ".\n\n" +    // js: sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";    // js: "I'll be " + (age + 1) + " years old next month.";

// Array
let list: number[] = [1, 2, 3];         // js: var list = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];   // js: var list2 = [1, 2, 3];

// Tuple
// Declare a tuple type
let x: [string, number];        // js: var x;
// initialize it
x = ["hello", 10];              // js: x = ["hello", 10];

console.log(x[0].substring(1));

// Enum

enum Color { Red = 1, Green, Blue };  // js: var Color;
                                      //     (function (Color) {
                                      //        Color[Color["Red"] = 1] = "Red";
                                      //        Color[Color["Green"] = 2] = "Green";
                                      //        Color[Color["Blue"] = 3] = "Blue";
                                      //     })(Color || (Color = {}));

let c: Color = Color.Green;           // js: var c = Color.Green;
let colorName: string = Color[2];     // js: var colorName = Color[2];
console.log(colorName);               // js: console.log(colorName);

// Any
let notSure: any = 4;                     // js: var notSure = 4;
notSure = "maybe a string instead";       // js: notSure = "maybe a string instead";
notSure = false;                          // js: notSure = false;
let list3: any[] = [1, true, "free"];     // js: var list3 = [1, true, "free"];
list3[1] = 100;                           // js: list3[1] = 100;

