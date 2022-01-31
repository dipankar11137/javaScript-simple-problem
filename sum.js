// array sum
/* let sum = 0;
const numbers = [44, 23, 45, 67, 89, 23, 44, 55, 98];
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum); */

// array sum with function
function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
const numbers = [44, 23, 45, 67, 89, 23, 44, 55, 98];
const total = arrayTotal(numbers);
console.log('Array total : ', total);
