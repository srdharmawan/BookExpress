// program to generate fibonacci series up to n terms
// Fibonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// take input from the user

//  ----------------------------------

// const number = parseInt(prompt('Enter the number of terms: '));
let next1 = 0,
    next2 = 1,
    next2Calc;

// console.log('Fibonacci Series:');
let output = [];

function fibonacciGenerator(n) {
    var container = []; // temporary array before passing it out from function
    for (let i = 1; i <= n; i++) { // Doesn't start from 0, if 0 then just don't run  any loop, just sent the default empty array.
        container.push(next1);
        next2Calc = next1 + next2;
        next1 = next2;
        next2 = next2Calc;
        /*
            Examples while n = 5 :
            1st loop : next1 still 0 -> container[0] --changing-values-->  next2Calc = 0 + 1 = 1.. next1 = 1 (next2).. next2 = 1 (Latest next2Calc)
                        so :    container[0]
                                next2Calc = 1
                                next1 = 1 (will be pushed next)
                                next2 = 1
            2nd loop : next1 changed into 1 ---> container[0, 1] ---> next2Calc = 1 + 1 = 2.. next1 = 1 (next2 from previous loop).. next2 = 2 (Latest next2Calc) 
                        so :    container[0, 1]
                                next2Calc = 2
                                next1 = 1 (will be pushed next)
                                next2 = 2
            3rd loop : next1 = 1 ---> container[0, 1, 1] ---> next2Calc = 1 + 2 = 3.. next1 = 2 (next2 from previous loop).. next2 = 3 (Latest next2Calc) 
                        so :    container[0, 1, 1]
                                next2Calc = 3
                                next1 = 2 (will be pushed next)
                                next2 = 3
            4th loop : next1 = 2 ---> container[0, 1, 1, 2] ---> next2Calc = 2 + 3 = 5.. next1 = 3 (next2 from previous loop).. next2 = 5 (Latest next2Calc) 
                        so :    container[0, 1, 1, 2]
                                next2Calc = 5
                                next1 = 3 (will be pushed next)
                                next2 = 5      
            5th loop : next1 = 2 ---> container[0, 1, 1, 2, 3] ---> next2Calc = 3 + 5 = 8.. next1 = 5 (next2 from previous loop).. next2 = 8 (Latest next2Calc) 
                        so :    container[0, 1, 1, 2, 3]
                                next2Calc = 8
                                next1 = 5 (will be pushed next)
                                next2 = 8                          
        */
    }
    return container;

}

output = fibonacciGenerator(10) // As if it was from user input
console.log(output)

/* In the above program, the user is prompted to enter the numbers of terms that they want in the Fibonacci series. 
   The for loop iterates up to the number entered by the user. 0 is printed at first (First Sequence). 
   Then, in each iteration, the value of the second term is stored in variable next1 and the sum of two previous terms is stored in variable next2.
*/