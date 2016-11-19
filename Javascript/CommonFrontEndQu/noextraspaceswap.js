/*
    a and b are Number 
 */
function swap(a, b){
    b = b - a;
    a = b + a;
    b = a - b;
    return [a, b]; 
}

console.log(swap(2, 4));
