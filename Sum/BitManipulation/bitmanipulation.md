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

---

#### Problem 5.1 Insertion 

You are given two 32-bit numbers, N and M, and two bit position, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through bit i have enough space to fit all of M. 

[Javascript](../CC/BitManipulation/insertion.js) 
[Java]()

tricky part is how to construct the clear mask, in this problem we can construct the left and right part seperately then combine them to construct the clear mask. 

Another tricky part is that when we have j = 31, then 32 is out of bound for integer number 



