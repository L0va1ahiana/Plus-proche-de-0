// THIS PROGRAM OUTPUTS THE NUMBER CLOSEST TO 0 in an ARRAY
// how many numbers we need
let size = parseInt(prompt("Size of the array please: "));
const tpos = []; // to store all the positive numbers
const tneg = []; // to store all the negative numbers
let close; // the number closest to 0

// creating the array
for (i = 0; i < size; i++) {
    let number = parseFloat(prompt(`Number ${i+1}: `));

    if (number>=0) {
        tpos.push(number);
    } else {
        tneg.push(number);
    }

}

// display all positive and negative arrays
console.log(tpos + "," + tneg)

// determine the one closest to 0
if (Math.min(...tpos) <= Math.abs(Math.max(...tneg))) {
    close = Math.min(...tpos);
} else {
    close = Math.max(...tneg);
}

console.log(`${close} is the closest to 0`);

