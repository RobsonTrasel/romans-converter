const converterNumero = () => {
    const input = document.getElementById('input').value
    const result = document.getElementById('result')

    if(isNaN(input)) {
        result.innerHTML = romanToInt(input.toUpperCase())
    } else {
        result.innerHTML = intToRoman(parseInt(input))
    }
}

const intToRoman = (num) => {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let roman = "";
  
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        roman += key;
        num -= romanNumerals[key];
      }
    }
  
    return roman;
  }
  
const romanToInt = (roman) => {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
        result -= romanNumerals[roman[i]];
      } else {
        result += romanNumerals[roman[i]];
      }
    }
  
    return result;
}