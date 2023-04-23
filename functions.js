// Write a function that takes two 
// numbers as arguments and returns 
// their sum 
function addition(array){
    let sum=0;
   for(let i=0;i<array.length; i++){
     sum+=array[i]

   }
   return sum

}
let array=[2,6]
console.log(addition(array));

// Write a function that takes a string as an 
// argument and returns the length of the string.
function word(sentence){

    return sentence.length

}
let sentence="School"
console.log(word(sentence));

// Write a function that takes an array of 
// numbers as an argument and returns the sum 
// of all the numbers in the array.
function numerals(digits){
    let sum=0;
    for(let i=0;i< digits.length; i++){
        sum+=digits[i]

    }
    return sum

}
let digits =[71,17,90,79,60]
console.log(numerals(digits));
//using for each

function numetics(numbers){
    let add =0;
    numbers.forEach(x => {
       add+=numbers[x] 
    });
    return add
    

    

}
let numbers =[65,33,45,90]
console.log(numetics(numbers))


// Write a function that takes an array of strings
//  as an argument and returns a new array with all 
//  the strings converted to uppercase.

function captitalizeWord(arr){

    return arr.map((word=> word.toUpperCase()))

    }
let arr =["ann","paisley","kate","ashley"]
console.log(captitalizeWord(arr));

//using for loop 
function doIt(array5){
    let t=[]
    for(let i=0;i<array5.length; i++){
        t.push(array5[i].toUpperCase());

    }
    return t

}
let array5=["ann","serah","annet"]
console.log(doIt(array5));

// Write a function that takes a number as
//  an argument and returns true if the 
//  number is even and false if it is odd.
function numerals7(arrs){
    
    for(let i=0;i<arrs.length; i++){
        if (arrs[i]%2==0){
            
            return "true"
        }
        else{
            return "false"
        }
    }

}
let arrs=[4,6,7,9,3,68,90]
console.log(numerals7(arrs))

// Write a function that takes an array of numbers as an
// argument and returns a new array with all the even 
// numbers from the original array.

let numz =[1,2,3,4,5,6,7,8,9]
let k=numz.filter(even);
 function even(results){
    return results%2==0

 }
 console.log(k)

 //Without in built method
 function rewards(numx){
    let r =[]
    for(let i=0;i<rewards.length; i++){
        if(numx[i]%2==0){
           r.push(numx[i])

        }

    }
    return r

 }
 let numx=[4,6,73,23,15,7,91]
 console.log(rewards(numx))

