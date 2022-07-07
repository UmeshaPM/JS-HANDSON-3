//Q-01. Find the number of digits

//Take a number from the user and print the count of digits in that number.

const Find_Digits = (N) => {
    for (a = 0; N !== 0; a++){
        N = parseInt(N/10);
    }
    return a;
};

console.log(Find_Digits(1234));