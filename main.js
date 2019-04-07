                              //  TASK 1


// function findSpacesInSentence(sentence){
//     let count=0;
//     for(let i = 0; i < sentence.length; i++){
//         if(sentence[i]==" ")
//             count++;    
//     }
// console.log("'" + sentence +"' cumlesinin icinde "+count+" eded bosluq tapildi");
// }

// findSpacesInSentence("I try learning code");
// findSpacesInSentence("Hello world");
// findSpacesInSentence("Jogging is my favuorite hobby");


                            //  TASK 2

// Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan rəqəmlərin ortalamasını qaytaran bir funksiya yaz.


// function middleResault(digitArray){

// let sum=0;
// for(let i=0;i<digitArray.length;i++){
// sum+=digitArray[i];
// }
// console.log("AverageOfNumbers:"+sum/digitArray.length);
// }
// middleResault([2,4,6,8,10]);

                                 //TASK  3

 // Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan yalnız cüt rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.

//  function digit(array){
//    let evenDigits = new Array();
//    array.forEach(element=>{
//        if(element % 2==0){
//            evenDigits.push(element)
//        }
//    });
//    return evenDigits;
//  }
//  let b = digit([10,13,14,16,18,20])

//  console.log(b)

                            // TASK 4    
                        
// Rəqəmlərdən ibarət array qəbul edib, yalnız o rəqəmlərin ortalamasından böyük olan rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.    


// let myArray = [5, 7, 8];

// function findNumbersBiggerThanAverage(numberArray) {

//     // 1. Find average number
//     let sumOfNumbers = 0;

//     numberArray.forEach(function(item){
//         sumOfNumbers += item;
//     })

//     let lengthOfItems=numberArray.length;

//     let averageNumber = sumOfNumbers / lengthOfItems;
//     // find average number

//     // 2. Find bigger than average number
//     let biggerThanAverage = [];

//     numberArray.forEach(function(item){
//         if(item > averageNumber){
//             biggerThanAverage.push(item);
//         }
//     })
//     // find bigger than average number

//     return biggerThanAverage;
// }

// let calculatedBiggerThanAverage = findNumbersBiggerThanAverage(myArray);

// console.log(calculatedBiggerThanAverage);


                             // TASK 5 

 // Sözlərdən ibarət bir arrayi qəbul edib, həmin sözləri vergül ilə birləşdirib tək söz kimi qaytaran funksiya yaz. Ən sonda vergül düşməməlidir.

//  function word(wordArray){
//         // console.log(wordArray.toString())
//         return wordArray.toString();
//        }
        
//        let b = word(["word","language","trip","course"]);
//        console.log(b);
    


                             // TASK 6
                        
//  Sözlərdən ibarət bir arrayi qəbul edib, həmin sözlərin tərsinə düzüldüyü yeni bir arrayi qaytaran bir funksiya yaz.

// function words(newWords){
// return newWords.reverse();
// }
// let c= words(["notebook", "weather", "computer", "language"]);
// console.log(c)


                              //TASK 7

// Sözlərdən ibarət iki arrayi qəbul edib, hər iki array-də olan ortaq sözlərin cəmləşdiyi yeni bir arrayi qaytaran bir funksiya yaz.

// function word(firstArray,secondArray){
//          return firstArray.filter(x=>secondArray.includes(x))   
//        }
    
//        let c = word(["hello","world","city"],["world","sun","earth"]);
    
//        console.log(c);

                             // TASK 8
//  Bir metod yaz, iki parametr qəbul edecek, birinci sozlerden ibaret array, ikinci bir dene herf. Metod hemin arrayin icerisindeki yalniz gonderilen herfle baslayan sozleri yeni bir array olaraq qaytarmalidir.

// function sentence(wordsArray,letter){

//     let wordsBeginsWith = [];

//     wordsArray.forEach(function(item){
//         if(item[0]==letter){
//             wordsBeginsWith.push(item)
//         }
//     })

//     return wordsBeginsWith;
// }


// let words=["she","sings","a beautiful","song"];

// let b = sentence(words,"s");
// console.log(b);


 

