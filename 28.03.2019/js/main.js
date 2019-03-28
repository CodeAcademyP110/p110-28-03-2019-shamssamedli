"use strict";


// function AddNewNumber(inputArray, number)
// {
//     inputArray.push(number);
// }

// let arr1 = [12, 10, 3];
// let arr2 = arr1;
// let arr3 = arr2;

// AddNewNumber(arr3, 37);

// console.log(arr1, arr2, arr3);

// let age = 28;
// let number= 28;
// let name=15;
// ChangeNumber(age);
// ChangeNumber(name)
// console.log(age); //28

// function ChangeNumber(number)
// {
//     number += 10;
 
//     console.log(number); //38, //25
//     console.log(name);   //15, //15
// }
                                    
function SumDivisible(inputArray, callbackFunc)
{
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++)
    {
        if(callbackFunc(inputArray[i], i))
            sum += inputArray[i];
    }

    return sum;
}

function Filter(inputArray, callbackFunc)
{
    let newArray = [];

    for(let i = 0; i < inputArray.length; i++)
    {
        if(callbackFunc(inputArray[i]))
            newArray.push(inputArray[i])
    }

    return newArray;
}

const IsEven = (n, i) => n % 2 === 0; //arrow function for checking number is even
const IsOlder18 = n  => n > 18;   //arrow function for checking number is greater than 18

let arr = [33, 25, 26, 40, 12, 28, 6, 8];

let sumOfEven = SumDivisible(arr, IsEven);
let sumOfElder = SumDivisible(arr, IsOlder18);
let sumOfAnquts = SumDivisible(arr, (n, i) =>  n > 18 && n % 2 == 0 && n < 30 );



console.log(sumOfEven, sumOfElder, sumOfAnquts);

//CLASSWORK 1
// let userEmails = ["sam dadash", "se eliyev", "shemsiyye shemsi", "nadir qafar"];
// let validEmails = userEmails.filter(email => email.indexOf("@") != -1);

//CLASSWORK 2
// let usernames = ["sam dadash", "elsen eliyev", "nad eliyev", "zakir veliyev", "qurban kazimov"];
// let validUsernames = usernames.filter(name => name.split(" ")[0].length > 3);

// function IsEven(n)
// {
//     return n % 2 === 0;
// }

// function IsOlder18(n)
// {
//     return n > 18;
// }

// function Add(n1)
// {
//     return  function(n2)
//             {
//                 return n1 + n2;
//             }
// }

// console.log(Add(5)(10));