const cyrillicAlpha = /^[а-яА-ЯїЇґҐёЁєЄ]+$/;

const CyrToLatinEnum = {
  Н: 'H',
  А: 'A',
  І: 'I',
  У: 'Y',
  К: 'K',
  Е: 'E',
  Х: 'X',
  В: 'B',
  Р: 'P',
  О: 'O',
  С: 'C',
  М: 'M',
  Т: 'T',
};

function transformToLatinString(initialString, skipNonAlphaNumeric, uppercase) {
  let clearedString = initialString;

  if (skipNonAlphaNumeric) {
    clearedString = clearedString.replace(/[&\/\\#, +()$~%.\-'":*?<>{}\s]/g, '')
  }
  if (uppercase) {
    clearedString = clearedString.toUpperCase()
  }

  return checkPlateSymbols(clearedString);
}
function checkPlateSymbols(plate) {
  if (plate) {
    for (let i = 0; i < plate.length; i++) {
      const char = plate.charAt(i).toUpperCase();
      const isLatin = checkLatin(char);
      const CyrToLatinEnumKeys = Object.keys(CyrToLatinEnum);
      const canConvert = CyrToLatinEnumKeys.indexOf(char) >= 0;

      if (!isLatin && canConvert) {
        plate =
          plate.substring(0, i) + CyrToLatinEnum[char] + plate.substring(i + 1);
      }
    }
  }

  return plate;
}


function checkLatin(value) {
  return !cyrillicAlpha.test(value);
}

module.exports = transformToLatinString