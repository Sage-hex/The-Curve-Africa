const multiplesOfNum = function (num) {
    let multiple;
    let result;
    for (let i = 20; i > 0; i--) {
        multiple = num * i;
        if (multiple % 2 === 0) result = "even";
        else  result = "odd";
        console.log(`These are 20 multiples of ${num} >>> ${multiple} and it is ${result}.`);
    }


}

multiplesOfNum(10);
