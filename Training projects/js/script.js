//#####################################################################################################
// 1.    Да се напише програма, която създава масив с 20
//       елемента от целочислен тип и инициализира всеки от елементите
//       със стойност равна на индекса на елемента умножен по 5.
//       Елементите на масива да се изведат на конзолата.



// var masiv = [];
// console.log(masiv.length);

// for (var i = 0; i < 20; i++ ){
//     masiv[i] = i * 5;
// }
// console.log(masiv);

// console.log("");
// console.log("");
// console.log("");
// console.log("");

//#####################################################################################################
// 2.    Да се напише програма, която чете два масива от конзолата и проверява дали са еднакви.

// function checkArrayEquality(rOne, rTwo) {
    
//     if (rOne.toString() === rTwo.toString()) {
//         console.log("Ednakvi Sa");
//     }
//     else{
//         console.log("Ne sa ednakvi");
//     } 
// } 


// var rne = [5, 6, 7];
// var rwo = [5, 6, 7];

// checkArrayEquality(rne, rwo);

//#####################################################################################################
//4.    Напишете програма, която намира максималната редица от еднакви елементи в масив. 
//      Пример: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} --> {2, 2, 2}.


// var masiv = [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1];

// function maxEqualElementsInRoll() {
//     var finalDestination = [];
//     var tempNum = masiv[0];
//     var tempCounter = 1;
//     var maxCounter = 1;
//     for (var i = 1; i < masiv.length; i++){
//         if( masiv[i-1] === masiv[i] ) {
//             tempCounter++
//             if(tempCounter > maxCounter){
//                 maxCounter = tempCounter;  
//                 tempNum = masiv[i];
//             }
//         }
//         else {
//             tempCounter = 1;
//         }
//     }
    

    
//     for(var i = 0; i < maxCounter; i++){
//         finalDestination[i] = tempNum;
//     }
//     return finalDestination;    
    
// }
// console.log(maxEqualElementsInRoll());


//#####################################################################################################
// 5.    Напишете програма,
//       която намира максималната редица от нарастващи елементи в масив.
//       Пример: {3, 2, 3, 4, 2, 2, 4} --> {2, 3, 4}.



// var masiv = [3, 2, 3, 4, 2, 2, 4];

// function risingMaxElements() {
//     var finalDestination = [];
//     var tempNum = masiv[0];
//     var tempCounter = 1;
//     var maxCounter = 1;
//     for (var i = 1; i < masiv.length; i++){
//         if( masiv[i-1] === masiv[i] - 1) {
//             tempCounter++
//             if(tempCounter > maxCounter){
//                 maxCounter = tempCounter;  
//                 tempNum = masiv[i];
//             }
//         }
//         else {
//             tempCounter = 1;
//         }
//     }
    

    
//     for(var i = 0; i < maxCounter; i++){
//         finalDestination[i] = tempNum - maxCounter + i;
//     }
//     return finalDestination;    
    
// }
// console.log(risingMaxElements());









//#####################################################################################################
// var array = [
//                 [ 1, 5, 76, 4, 4000 ],
//                 [ 3, 5, 23, 56, 80000 ],
//                 [ 6, 45, 3, 1, 9 ],
//                 [ 6, 8, 9, 1, 76 ],
//                 [55, 66, 88, 33, 35]
//               ];
    

// function tralala(){
//     var matrichka = [
//                         [0, 0],
//                         [0, 0]
//                     ];
    
    
//     var maxSum = 0;
//     for (var i = 0; i < array.length - 1; i++) {
//         for(var j = 0; j < array.length - 1; j++){
//            var tempSum = array[i][j] + array[i][j + 1] + array[i + 1][j] + array[i + 1][j + 1];
//         if (tempSum > maxSum){
//             maxSum = tempSum;
            
//             matrichka[0][0] = array[i][j];
//             matrichka[0][1] = array[i][j+1];
//             matrichka[1][0] = array[i+1][j];
//             matrichka[1][1] = array[i+1][j+1];
            
//             }
            
//         }
//     }
// //     console.log(maxSum);
//     return matrichka;
// }

// tralala();

// function getMaxSumArray(array){
//     return array2;
// }



// var hoj = tralala();  console.log(hoj);





// for (var i = 0; i < hoj.length; i++){
//     console.log(hoj[i]);
    
// }
















































// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//                                    NEXT
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Функция, която да връща подматрица с размер 2х2, която има най- голям сбор от елементите си!
//  Примерен input/ output.

// input array = [
//                 [1,5 ,76,4 ],
//                 [3,5 ,23,56],
//                 [6,45,3 ,1 ],
//                 [6,8 ,9 ,1 ]
//               ];


// output array2 = [[76,4],
//                 [23,56]];











// var array = [
//                 [ 1, 5, 76, 4 ],
//                 [ 3, 5, 23, 56 ],
//                 [ 6, 45, 3, 1 ],
//                 [ 6, 8, 9, 1 ],
//               ];
    

// function tralala(){
//     var matrichka = [
//                         [0, 0],
//                         [0, 0]
//                     ];
    
    
//     var maxSum = 0;
//     for (var i = 0; i < array.length - 1; i++) {
//         for(var j = 0; j < array.length - 1; j++){
//            var tempSum = array[i][j] + array[i][j + 1] + array[i + 1][j] + array[i + 1][j + 1];
//         if (tempSum > maxSum){
//             maxSum = tempSum;
            
//             matrichka[0][0] = array[i][j];
//             matrichka[0][1] = array[i][j+1];
//             matrichka[1][0] = array[i+1][j];
//             matrichka[1][1] = array[i+1][j+1];
            
//             }
            
//         }
//     }
// //     console.log(maxSum);
//     return matrichka;
// }

// tralala();

// function getMaxSumArray(array){
//     return array2;
// }



// var hoj = tralala();  console.log(hoj);
















//#####################################################################################################
// // printirai nai golemiq zbor ot 2 4isla v masiva
// var numbers = [1,4,7,98,4,5,50];

// function bestCupple() {
// var tempNums;
// var sum = numbers[i] + numbers[i+1];
//            var chislo1 = numbers[0];
//            var chislo2 = numbers[1];
    
//     for (var i = 1; i <= numbers.length; i++){

//         if (numbers[i]+numbers[i+1] > sum ){
//             console.log("sumiram bre");
//            sum = numbers[i] + numbers[i+1];
//            chislo1 = numbers[i];
//            chislo2 = numbers[i+1];
//         }
//     }
//     console.log(chislo1, chislo2);
// }

// bestCupple();


// DAAMNNNNNNNNNNNNNNNNNNNNNN DANIELeEEEE xD












//#####################################################################################################
//       CHISLA NA FIBONACCI >>>>>>> ++++++++++++++++++ //

// var fibbonacciSequence = [1, 1];

// function fibonacci(x) {
//     for (var i = 1; i <= x - 2; i++){
//     fibbonacciSequence.push(fibbonacciSequence[i-1] + fibbonacciSequence[i]);
    
//     }
//     console.log(fibbonacciSequence);
// }
// fibonacci(8999);




// funkciq koqto v interval da ti vadi prostite 4isla

// function simpleNumbers (x, o) {
    
//     var arrNums = [];
//     var secCounter = 0;
//     var isShit;
    
//     for (var i = x; i <= o; i++){
//         secCounter++;
//         if (i % 2 != 0){
//             for (var j = 3; j <= secCounter; j++){
//                 if((i % j) != 0){
//                         isShit = true;
//                    }
//                 else {
//                     isShit = false;
//                     break;
//                 }
//             }
//             if(isShit === true){
//                 arrNums.push(i);
//             }
//         }
//     }
    
//     console.log(arrNums);
       
// }
// simpleNumbers(55,150);









//#####################################################################################################
// var array = [10, 8, 22, 66, 1, 7];

// for (var i = 0; i < array.length; i++){
    
    
//     console.log(array[i]);
    
// }


//     console.log("");
//     console.log("");
//     console.log("");



// var array2 = [10, 8, 22, 66, 1, 7];

// for (var g = 5; g >= 0; g--){
    
    
//     console.log(array2[g]);
    
// }


//     console.log("");
//     console.log("");
//     console.log("");




// var array3 = [10, 8, 22, 66, 1, 7, 2];
// for (var h = 0; h < array3.length/2; h++){
//     var tempEl = array3[h];
//     array3[h] = array3[(array3.length - 1) - h];
//     array3[(array3.length - 1) - h] = tempEl;
// }
// console.log(array3);






//#################################################################
//                Prosta piramidka
//#################################################################
// var n = 5;

// for (var row = 1; row <= n; row++){
    
//     var pylni ="";
//     for (var col = 1; col <= row; col++) {
//         pylni = pylni + col
//     }
//     console.log(pylni);
    
// }
//#################################################################




//#################################################################
//               Piramidka s vyobrajenie
//#################################################################
// var n = 7;
// var colPrint = "";
// var currMqsto = n;

// function proverka(){
//     if (n %2 === 0){
//         console.log("4ep");
//         }
//     else {
        
// //         napraiMqsto();    
//         ba4kai();   
//     }
// }



// function napraiMqsto() {
//     var mqsto = "";
//     for ( var i = 1; i <= currMqsto; i++) {
//         mqsto = mqsto + " "
//     }   
//     currMqsto --;
//     return mqsto;
        

// }

// function ba4kai(){

// for ( var row = 1; row <= n; row++) {
//     colPrint = napraiMqsto();    
//         for ( var col = 1; col <= row; col++){
//             colPrint = colPrint + " " + col;

//         }
//         console.log(colPrint);
//     }    

// }

// proverka();

//#################################################################