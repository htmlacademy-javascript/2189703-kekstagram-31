// Функция для проверки длины строки.

const testStringLength = (string, length) => string.length <= length;

// Строка короче 20 символов
testStringLength('проверяемая', 20);
// Длина строки ровно 18 символов
testStringLength('проверяемая строка', 18);
// Строка длиннее 10 символов
testStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.

const testPolindrom = function (string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let newString = '';
  const half = string.length / 2;
  for (let i = string.length - 1; i >= half - 1; i--) {
    newString += string[i];
  }
  return (newString === string.slice(0, half + 1));
};

// Строка является палиндромом
testPolindrom('топот');

// Несмотря на разный регистр, тоже палиндром
testPolindrom('ДовОд');

// Это не палиндром
testPolindrom('Кекс');
testPolindrom('Несмотря на разный регистр, тоже палиндром');

//Строка  с пробелами является палиндромом
testPolindrom('А роза упала на лапу Азора');

// Функция для проверки, является ли строка палиндромом. Вариант 2.

const testPolindrom2 = function (string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let newString = '';
  let index = string.length;
  while (index > 0) {
    index--;
    newString += string[index];
  }
  return string === newString;

};

// Строка является палиндромом
testPolindrom2('топот');

// Несмотря на разный регистр, тоже палиндром
testPolindrom2('ДовОд');

// Это не палиндром
testPolindrom2('Кекс');
testPolindrom2('Несмотря на разный регистр, тоже палиндром');

//Строка  с пробелами является палиндромом
testPolindrom2('А роза упала на лапу Азора');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN


// Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число. Обратите внимание, что возвращать функция по-прежнему должна только целые положительные числа:

// имяФункции(2023); // 2023
// имяФункции(-1);   // 1
// имяФункции(1.5);  // 15

const getIntegers = function (string) {
  const newSttring = string.toString().replaceAll(' ', '');
  let integers = '';

  for (let i = 0; i < newSttring.length; i++) {
    const letter = +newSttring[i];
    if (!Number.isNaN(letter)) {
      integers += letter;
    }
  }

  if (integers.length === 0) {
    return NaN;
  }

  return +integers;
};


getIntegers('2023 год');

getIntegers('ECMAScript 2022');

getIntegers('1 кефир, 0.5 батона');

getIntegers('а я томат');

getIntegers(1.5);

