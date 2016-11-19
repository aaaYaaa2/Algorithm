# Common Algorithm Questions in Front-End Interview

## Palindrome Test

Besides using a common for loop, we can use the reverse function provided by Javascript.

```javascript 
    function checkPalindrom(str){
        return str === str.split('').reverse().join('');
    }
```

## Remove duplicates from an Array 

Use a hashtable: [uniquearray JS](uniquearray.js)

> Javascript Property Access: Dot vs brackets, generally they are same, however, the brackets access could be used to access a property store in a variable, but dot version cannot, [a awesome reference](http://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets)


## Find the most common character in a given string 

Similar as the above method, but we need to keep record of a count 

Some questions I might ask the interviewer: what if there are multiple character that has the same highest frequency, the corner case (i.e. the case when the string is empty or undefined), what should be returned. 

## Swap without use an extra varaible 

use + and - to manipulate 

```javascript 
    /*
        a and b are Number 
    */
    function swap(a, b){
        b = b - a;
        a = b + a;
        b = a - b;
        return [a, b]; 
    }
```

## Fabonacci 

[JS](fabonacci.js)

## Generate a random string of given length

> Generate Random Number

[Generate Random String]()

