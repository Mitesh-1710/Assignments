//Program To Implement Fibonacci Series.
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for(i = 1; i<=20 ; i++)
{   
    let result = a + b;
    console.log(result);
    a = b;
    b = result;
}
