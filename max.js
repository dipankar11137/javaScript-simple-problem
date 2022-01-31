// const business = 450;
// const minister = 550;
// if (business > minister) {
//     console.log("Business person ar pola bigger");
// }
// else {
//     console.log("Minister person ar pola bigger");
// }

// compare 3

/* const business = 950;
const minister = 750;
const army = 670;
if (business > minister && business > army) {
    console.log("Business person ar pola bigger");
}
else if (minister > business && minister > army) {

    console.log("Minister person ar pola bigger");
}
else {
    console.log("Army person ar pola bigger");
} */


// largest number js mathood
/* const business = 950;
const minister = 7050;
const army = 670;

const max = Math.max(business, minister, army);
console.log('Largest number is : ', max); */


// function dia max value chake
/* const business = 9950;
const minister = 7050;
const army = 8670;

function largeNumber(business, minister, army) {
    if (business > minister && business > army) {
        return business;
    }
    else if (minister > business && minister > army) {
        return minister;
    }
    else {
        return army;
    }
}
const maxNumber = largeNumber(business, minister, army);
console.log("Large value is :", maxNumber); */


// function dia small value chake
const business = 50;
const minister = 7050;
const army = 670;

function smallNumber(business, minister, army) {
    if (business < minister && business < army) {
        return business;
    }
    else if (minister < business && minister < army) {
        return minister;
    }
    else {
        return army;
    }
}
const maxNumber = smallNumber(business, minister, army);
console.log("Small value is :", maxNumber);


