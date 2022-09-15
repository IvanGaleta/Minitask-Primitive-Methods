"use strict";

let str = 'test test test testlist test test test';

function getQuantity (str){
    const words = str.split(' ');
    let result = 0;
    for (let i = 0; i < words.length; i++){        
        if (words [i] != ' '){
            result += 1
        }
    }
    return result; 
}
console.log(getQuantity(str));


function getLongWord (str){

    const longWord = str.split(' ');
    let wordLength = 0;
    let result;
    for( let i = 0; i < longWord.length; i++ ){
        wordLength = longWord.length;
        if(longWord[i].length > wordLength){
            result= longWord[i];            
        }
    }
    return result;
}
console.log(getLongWord(str));
