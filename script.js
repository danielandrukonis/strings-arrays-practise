// Pradžiai užduotėlės su String'ais;
// Stringas kurį testuosime:
const sentence = "Petras Jonaitis";

// 1. Parašykite funkciją clearSpaces, kuri paima stringą, kaip argumentą ir grąžina stringą be tarpų;

const sentence = "Petras Jonaitis";

function clearSpaces(statement) {

  let result = statement.split(" ").join("");

  return result

}
  
console.log(clearSpaces(sentence))

// 2. Parašykite funkciją changeName, kuri paima stringą su vardu ir pavarde kaip argumentą ir sukeičia juos vietomis ir tada grąžina;

const sentence = "Petras Jonaitis";
const swapName = sentence.replace(/(\w+)\s(\w+)/, "$2 $1");

console.log(swapName);

// 3. Parašykite funkciją deleteBoundaries, kuri paima stringą, kaip argumentą ir grąžina be pirmos ir paskutinės raidės;

const sentence = "Petras Jonaitis";

function deleteBoundaries(statement) {

let result = statement.slice(1, 14);

return result

}

console.log(deleteBoundaries(sentence))

// Užduotys su masyvais
// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

function arrDoubled(number) {
  return numbers.map(doubleNumber);
}

function doubleNumber(number) {
  return number * 2;
}

console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// pvz arrMultiplied([5, 3, 1], 5) grąžina [25, 15, 5]

let numbers = [5, 3, 1];

function arrMultiplied(number) {
  return numbers.map(fivedNumber);
}

function fivedNumber(number) {
  return number * 5;
}

console.log(arrMultiplied(numbers));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// pvz arrCountTwos([5, 2, 3, 1, 2, 2]) grąžina 3;

let array = [1, 2, 3, 5, 2, 8, 9, 2]

function arrCountTwos(sum) {
 
 return array.map(countedNumber);

}

function countedNumber(sum) {

    return array.filter(x => x === 2).length
      
  }

console.log(countedNumber(array));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

// 6. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

const array = [8, 5, 4, 2, 7, 1, 9]

function MyMin(myArray) {
  let numbers = myArray.length;
  minimum = myArray[numbers - 1];
  while (numbers--) {
    if (myArray[numbers] < minimum) {
      minimum = myArray[numbers]
    }
  }
  return minimum;
};

const min = MyMin(array);

function MyMax(myArray) {
  let numbers = myArray.length;
  maximum = myArray[numbers - 1];
  while (numbers--) {
    if (myArray[numbers] > maximum) {
      maximum = myArray[numbers]
    }
  }
  return maximum;
};

const max = MyMax(array);

console.log("Mažiausas: " + " " + min, "Didžiausas: " + max)



// 7. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
//reikalingi String ir Array metodai

// 8. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atskirą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

// 9. Sukurkite funkciją checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

// 10. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
  "Mažeikiai",
  "Jonava",
  "Utena",
];
//reikalingi String ir Array metodai
