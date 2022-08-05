// Write your solution below this line:

// Write a program that counts from 1 to 50 in fuzzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number

// iterate from 1 to 50 using for loop
// for (let i = 1; i < 51; i++) {

let i = 0;
while (i < 50) {
    i++;
    
    // otherwise, check if current number is divisible by both 3 and 5
    // if true print fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        
        // check if current iteration is divisible by 3. using modulo
        // if true print out fizz
    } else if (i % 3 === 0) {
        console.log('fizz');
        
        // otherwise (else if) check if current number is divisble by 5. modulo
        // if true print out buzz
    } else if (i % 5 === 0) {
        console.log('buzz');
        
        
        // otherwise print current iteration
    } else {
        console.log(i);
    }
    // }   
}
    

