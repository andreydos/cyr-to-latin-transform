# cyr-to-latin-transform

**READ CAREFULLY**

This package created for a specific task and do not make transliteration of text or something commonly used.

If function gets specific russian/ukrainian letter such as "Ы" or "Ї" it will return as is "Ы" or "Ї".

If function gets letter which looks the same in cyrillic and latin such as 'С'(russian letter/Non-ASCII) and 'C'(latin letter) it will return 'C'(latin letter) in every case.
  
function usage: transformToLatinString(initialString, skipNonAlphaNumeric, uppercase)

   * @param initialString {string}
   * @param skipNonAlphaNumeric {boolean} will drop any non alpha numeric symbols
   * @param uppercase {boolean} if true will return text in uppercase
   * @returns {string}

```
npm install cyr-to-latin-transform --save
```

```
import transformToLatinString from 'cyr-to-latin-transform';

const str = "а-s ыф1"; // first letter is russian a letter (Non-ASCII)
console.log(transformToLatinString(str)) // result "a-s ыф1" (here a was transformed to latin a letter)
console.log(transformToLatinString(str, true, true)) // result "ASЫФ1" (here a was transformed to latin a letter, all in uppercase, only alpha-numeric)
```
