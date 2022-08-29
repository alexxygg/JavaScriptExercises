const evenAndOddNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const evenNumbers = evenAndOddNumbers.filter((num) => {
  return num % 2 === 0;
});

const oddNumbers = evenAndOddNumbers.filter((num) => {
  return num % 2 === 1;
});

const oneToTen = evenAndOddNumbers.filter((num) => {
  return num <= 10;
});

const elevenToTwenty = evenAndOddNumbers.filter((num) => {
  return num > 10;
});

const divisibleBy5 = evenAndOddNumbers.filter((num) => {
  return num === 5 || num === 10 || num === 15 || num === 20;
});

const countriesOTAN = [
  { country: "Belgium", year: 1949 },
  { country: "Canada", year: 1949 },
  { country: "Denmark", year: 1949 },
  { country: "France", year: 1949 },
  { country: "Iceland", year: 1949 },
  { country: "Italy", year: 1949 },
  { country: "Luxembourg", year: 1949 },
  { country: "Netherlands", year: 1949 },
  { country: "Norway", year: 1949 },
  { country: "Portugal", year: 1949 },
  { country: "United Kingdom", year: 1949 },
  { country: "United States", year: 1949 },
  { country: "Greece", year: 1952 },
  { country: "Turkey", year: 1952 },
  { country: "Germany", year: 1955 },
  { country: "Spain", year: 1982 },
  { country: "Czech Republic", year: 1999 },
  { country: "Hungary", year: 1999 },
  { country: "Poland", year: 1999 },
  { country: "Bulgaria", year: 2004 },
  { country: "Estonia", year: 2004 },
  { country: "Latvia", year: 2004 },
  { country: "Lithuania", year: 2004 },
  { country: "Romania", year: 2004 },
  { country: "Slovakia", year: 2004 },
  { country: "Slovenia", year: 2004 },
  { country: "Albania", year: 2009 },
  { country: "Croatia", year: 2009 },
  { country: "Montenegro", year: 2017 },
  { country: "North Macedonia", year: 2020 },
];

const otanEntryBefore2000 = countriesOTAN.filter((countryyy) => {
  return countryyy.year <= 2000;
});

const originalOtanMembers = countriesOTAN.filter((countryyy) => {
  return countryyy.year <= 1950;
});

const otanEntryCountriesOnlyAfter2000 = countriesOTAN
  .filter((ctry) => ctry.year >= 2000)
  .map((ctry) => ctry.country);

const otan1950to2000 = countriesOTAN
  .filter((x) => x.year >= 1950 && x.year <= 2000)
  .map((x) => x.country);
