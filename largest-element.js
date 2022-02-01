// biggest element in array

/* function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        // console.log(elements);
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}
let ages = [23, 45, 67, 42, 34, 90, 12, 34, 55];
let largestAge = largestElement(ages);
console.log('oldest', largestAge); */

// (-)negative biggest number in array

/* function largestElement(numbers) {
    let largest = numbers[0]; //0 sobar tha aboro tai first value k amader dhorta hobe
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        // console.log(elements);
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}
let ages = [-23, -45, -67, -42, -34, -90, -12, -34, -55];
let largestAge = largestElement(ages);
console.log('oldest', largestAge); */


// smallest number in array

/* function smallNumber(numbers) {
    let smallest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const array = [12, 45, 67, 89, -6, 3, 45, 67];
let smaller = smallNumber(array);
console.log("small number : ", smaller); */