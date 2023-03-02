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

const converterNumero = () => {
    const input = document.getElementById('input').value.trim()
    const result = document.getElementById('result')

    if(input === "") {
        result.innerHTML = ""
        return
    }

    if(/^[IVXLCDMivxlcdm\s]+$/.test(input)) {
        result.innerHTML = romanToInt(input.toUpperCase())
    } else if(/^[0-9]+$/.test(input)) {
        result.innerHTML = intToRoman(parseInt(input))
    } else {
        result.innerHTML = "Entrada inválida"
    }
}

const intToRoman = (num) => {
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