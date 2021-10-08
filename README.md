# countCharsInString
Js-Task: <br/>
Need write the function which get universal output for any input string.

Input: aaaabbbccccaa<br/>
Output: a4b3c4a2<br/>

Decision:

let string = 'aaaabbbccccaa';

function countCharsInString(string){
    let input = string;
    let char = "";
    let counter = "";
    let finalString = "";
    for (let i = 0; i < input.length; i++){
      if (input.charAt(i) !== char) {
        finalString = finalString + char + "" + counter;
        char = input.charAt(i);
        counter = 1;
      } else {
        counter = counter + 1;
      }
    }
    finalString = finalString + char + "" + counter;
    return finalString;
  }

console.log(countCharsInString(string));

U can view it in jsbin: https://jsbin.com/yirihemisa/4/edit?js,console
