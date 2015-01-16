/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
  // var stringArr = str.split('');
  return str.split('').reverse().reduce(function (prev, curr) {
    return prev += curr;
  });
}

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
  var strArr = str.split('');
  strArr.unshift(strArr.pop());
  strArr.splice(-1, 0, char);
  return strArr.join('');
  // return strArr.reduce(function (prev, curr) {
  //   return prev += curr;
  // });
}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
  return strArray.map(function (word) {
    var wordArr = word.split('');
    var firstChar = wordArr.shift();
    wordArr.push(firstChar, 'ay');
    return wordArr.join('');
  });
}
