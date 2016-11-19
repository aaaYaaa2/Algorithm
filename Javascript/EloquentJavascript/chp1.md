 # Chapter 1, Values, Types and Operators

## Number

Javascript uses a fixed number of bits, `64`. 

Some very large number can be represent using the scientific representation. `2.998e8`. 


## Special Number

> `Infinity` and `-Infinity`, `Infinity-1` is still infinity. 

> `NaN` is of type `Number`: 0/0 and Infinity-Infinity, numeric operations that don't yield a precise, meaningful result. The only one value in JS that is not equal to itself, `console.log(NaN == NaN)` will return false; 


## String

String has to stay in a single line 

> Escaping character: when a `\` is found inside a quote text, it indicates that the character after it has a special meaning. 

> `typeof` 

```Javascript 
    console.log(typeof 4.5); // number 
```

## undefined and null 

undefined is not equal to true or false, but you can evalutate it as true or false in conditional case: 

```javascript 
    console.log(undefined == false); // false
    console.log(undefined == true ); // false

    var test1 = undefined;
        if(test1){
            console.log('undefined is treated as true');
        }else{
            console.log('undefined is treated as false'); // will print out this 
        }
```

## type coercion

`""`, `0`, `NaN` counted as false, other values count as true. 