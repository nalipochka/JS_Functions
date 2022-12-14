function lowNumber(a, b) {
    if (a < b)
        return a;
    else
        return b;
}

function square(x) {
    return x ** 2;
}

function operation(a, b, y) {
    if (y == "+")
        return a + b;
    else if (y == "-")
        return a - b;
    else if (y == "*")
        return a * b;
    else if (y == "/" && b != 0)
        return a / b;
    else return "!division by zero!";
}

function simpleNumber(n) {
    if (n < 2)
        return "Число должно быть больше 1"
    else if (n === 2)
        return "Простое число";

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0)
            return "Составное число";
        i++;
    }
    return "Простое число";
}

function tableMultiplication(n) {
    for (j = 1; j < 10; j++) {
        document.write(`<div>${n}*${j} = ${n * j}</div>`);
    }
}

function remainderOfTheDivision(a, b) {
    n = a / b;
    x = Math.floor(n);
    return n - x;
}

function summ() {
    if (arguments.length < 1 || arguments.length > 5)
        return "Вне диапозона!";
    else
    {
        sum = 0;
        for (i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}

function biggerNumber(){
    if (arguments.length < 1 || arguments.length > 5)
        return "Вне диапозона!";
    else
    {
       max = arguments[0];
       for(i=1;i<arguments.length;i++){
        if(arguments[i]>max)
        max=arguments[i];
       }
       return max;
    }
}

function range(n1,n2, b){
    let str = "";
    if(b===true){
        if(n1<n2){
            for(i=n1;i<n2+1;i++){
                if(i%2==0){
                    str+= `${i} `;
                }
            }
        }
        else{
            for(i=n2;i<n1+1;i++){
                if(i%2==0){
                    str+= `${i} `;
                }
            }
        }
    }
    else{
        if(n1<n2){
            for(i=n1;i<n2+1;i++){
                if(i%2!=0){
                    str+= `${i} `;
                }
            }
        }
        else{
            for(i=n2;i<n1+1;i++){
                if(i%2!=0){
                    str+= `${i} `;
                }
            }
        }
    }
    return str;
}