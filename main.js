//Decision:

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
