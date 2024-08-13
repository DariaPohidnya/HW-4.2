const number = prompt("Введіть тризначне число:");

const numOne = number[0];
const numTwo = number[1];
const numThree = number[2];

if (numOne === numTwo && numTwo === numThree) {
    console.log("Усі цифри однакові.");
} else {
    console.log("Не всі цифри однакові.");
}

if (numOne === numTwo || numTwo === numThree || numOne === numThree) {
    console.log("Серед цифр є однакові.");
} else {
    console.log("Серед цифр немає однакових.");
}
