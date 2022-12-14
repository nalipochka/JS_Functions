function factorial(n) {
    if (n === 1)
        return 1;
    else return n * factorial(n - 1);
}

function range(a, b) {
    if (a === b)
        document.write(`<div> ${a}</div>`);
    else {
        document.write(`<div> ${a}</div>`);
        return range(a + 1, b)
    }
}
//
function rangeReverse(n1, n2) {
    if (n1 === n2)
        document.write(`<div> ${n2}</div>`);
    else {
        document.write(`<div> ${n2}</div>`);
        return rangeReverse(n1, n2 - 1)
    }
}

function reverseNumber(n, str) {
    if (n === 0)
        return str;
    else {
        q = n % 10;
        str+=`${q}`;
        w = Math.floor(n / 10);
        return reverseNumber(w, str);
    }
}

function sum(n, s){
    if(n===0)
    return s+=n;
    else{
        q = n % 10;
        s+=q;
        w = Math.floor(n / 10);
        return sum(w, s);
    }
}
function parentheses(n, str){
    if(n===0)
    return str;
    else{
        str= `(${str})`;
        return parentheses(n-1, str);
    }
}