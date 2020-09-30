///<reference types="Cypress"/>

class GenericFunctions
{

    palindrom(value){
        let emptyString = 'an empty string';
        if (value == "") return emptyString;
        let strLen = Math.floor(value.length / 2);
       // string = string.toLocaleLowerCase(); to ignore casesensitive
        for (let i = 0; i < strLen; i++) {
          if (value[i] !== value[value.length - i - 1]) {
            let output  =  value +' is not a palindrom'
            return output;
          }
        }
        let output  =  value +' is a palindrom'
        return output;
    }

    removeBlankSpace(value){
        let output = '';
        if (!value) return output;
        let inputString = value.split(" ")
        let stringIndex = 0;
        while (stringIndex < inputString.length) {
          output += inputString[stringIndex];
          stringIndex++;
        }
        return output;
    }
}
export default GenericFunctions 