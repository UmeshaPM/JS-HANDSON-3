//Q-05. Print the Odds.

//Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => {
    console.log(2);
    var a = 3;
    while(a < N){
        console.log(a);
        a += 2;
    }
};

Print_Odd(10);