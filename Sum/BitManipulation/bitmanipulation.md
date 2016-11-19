# Bit Manipulation 

## Concepts

`+` and `-`, they are similar in bit manipulation, but in 2 based 
`<<` and `>>` are `*` and `/`
`&` , if there is 0 then result is 0, `&0`
`|`, if there is 1 then result is 1, `|1`
`most significant bit`, highest bit 
`least significant bit`, lowest bit 

arithmetic shift `>>` and `<<`, `>>` fill high with 1, `<<` fill low with 0; 

### Get Bit 

use `&1`
```javascript 
    /*
        @param num: input
        @param i: bit place we want to obtain 
        @return boolean
        
        create something like 0010000
        if result is not true, then bit i is 0, if false, then bit i is 1 
    */

    function getBit(num, i){
        return (num & (1<<i)) === 0;
    }
    
```

### Set Bit

use `|1`

```javascript 
    /*
        @param num: input
        @param i: bit place we want to set 
        @return num, new number with updated bit 

        create something like 0010000
    */

    function setBit(num, i){
        return num | (1 << i);
    }
```

### Clear Bit (clear ith bit)

use `&0` to set zero 

```javascript 
    /*
        @param num: input
        @param i: the ith bit we want to clean up 

        create something 11101111
    */

    function clearBit (num, i){
        var mask = ~(1 << i);
        return num & mask;
    }
```

clear bit from most significant to ith 

`(1 << i) - 1` create leading zeroes followed by ones 

```javascript 
    /*
        @param num: input
        @param i : until ith bit 
        @return number with cleared bits 
    */

    function clearBitsUntili(num, i){
        var mask = (1 << i) - 1; // create something like 00001111
        return num & mask;
    }
```

clear bit from least significant to ith (inclusive)

a sequence of all `1` in **signed** integer represent -1

```javascript 
    /*
        @param num: input
        @param i: want to from least significant to ith 
        @return number after cleared 
    */

    function clearFromLeastSignToi(num, i){
        var mask = -1 << (i+1);
        return num & mask;
    }
```

### Update Bit (set ith bit to value v)

1. clear ith bit first 
2. set ith bit to value v

```javascript 

    /*
        @param num : number to be update 
        @param i: ith bit we want to update 
        @param isBitOne: boolean 
    */

    function updateBit(num, i, isBitOne){
        var value = isBitOne? 1 : 0;
        // clear ith bit 
        num = num & (~(1 << i)); 
        // set ith bit to value 
        return num | (value << i);
    }

```


### Count Bits
[Javascript](../DynamicProgramming/countingbits.js) 

### Gray Code

[Javascript](../DynamicProgramming/graycode.js)
[Java](../DynamicProgramming/GrayCode.java)

---

#### Problem 5.1 Insertion 

You are given two 32-bit numbers, N and M, and two bit position, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through bit i have enough space to fit all of M. 

[Javascript](../CC/BitManipulation/insertion.js) 
[Java]()

tricky part is how to construct the clear mask, in this problem we can  construct the left and right part seperately then combine them to construct the clear mask. 

Another tricky part is that when we have j = 31, then 32 is out of bound for integer number 

#### Problem 5.2 Binary to String

Given a real number between 0 and 1 (e.g 0.72) that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR". 

Binary Representation of a double value:

```
    0.101(base 2) = 1*1/2^1 + 0*1/2^2 + 1*1/2^3;
```

while N is larger than 0 and bit number is smaller than 32
    in each iteration, compare remain of N and current factor,
        if remain of N is larger current factor, then set 1 to current bit, else set 0 to current bit
if the bit number goes up to 32 return 'Error'


#### Problem 5.3 Flip Bit to Win

[Javascript](./flipbittowin.js)

[Java](./FlipBitToWin.java) 

You have an integer and you can flip exactly one bit from a 0 to 1. Write code to find the length of the longest sequence of 1s you could create. 

Time Complexity, O(N), N is the highest 1 bits position for the number, 
Space Complexity O(N), N is the higest 1 bits position for the number 

1. get the highest bit position for the number 
2. use an array[i] to store the number of continues 1 bit end at position i
3. traverse the array created in step 2, when encounter 0, add it's 1 to arr[i-1] and arr[i-1] if index exist, and update a global max value at the same time 


#### Problem 5.4 Next Number 

Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation. 

Since we want to get next largest number with same number of 1 bits. 

we want to flip a 0 to 1, if this 0 has 1s right to it. after flip, we will set the trailing to 1s to the count number of 1s -1 


#### Problem 5.5 Debugger

#### Problem 5.6 Conversion

Write a function to determine the number of bits you would need to flip to convert integer A to integer B. 













