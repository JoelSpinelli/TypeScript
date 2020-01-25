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
