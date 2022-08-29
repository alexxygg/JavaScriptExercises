const kurtCobain = {
  name: "Kurt",
  lastName: "Cobain",
  born: "February 20, 1967",
  bornAt: "Aberdeen, Washington, U.S.",
  death: "April 5, 1994",
  yearsActive: "1982 to 1994",
};

function fullName(kurt) {
  return `${kurt.name} ${kurt.lastName}`;
}

function fullName2(kurt) {
  const { name, lastName } = kurt;
  return `${name} ${lastName}`;
}

function fullName3({ name, lastName }) {
  return `${name} ${lastName}`;
}

const fastestCarsMPH = [
  { carModel: "Koenigsegg Jesko Absolut", speed: 330 },
  { carModel: "Hennessey Venom F5", speed: 311 },
  { carModel: "Bugatti Bolide", speed: 310 },
  { carModel: "Bugatti Chiron Super Sport 300+", speed: 304 },
  { carModel: "SSC Tuatara", speed: 283 },
  { carModel: "Rimac Nevera", speed: 258 },
  { carModel: "Aston Martin Valkyrie", speed: 250 },
  { carModel: "McLaren Speedtail", speed: 250 },
  { carModel: "Koenigsegg Gemera", speed: 249 },
  { carModel: "Pagani Huayra BC Pacchetto Tempesta", speed: 236 },
  { carModel: "Lamborghini Aventador LP780-4 Ultimae Coupe", speed: 220 },
  { carModel: "Pininfarina Battista", speed: 218 },
  { carModel: "Mercedes-AMG One", speed: 217 },
  { carModel: "Ford GT", speed: 216 },
];

const fastCars = fastestCarsMPH.filter((car) => car.speed > 300);

const fastCars2 = fastestCarsMPH.filter(({ speed }) => speed > 300);

const carSentence = fastestCarsMPH.map((car) => {
  return `The ${car.carModel} goes at around ${car.speed} miles per hour.`;
});

const carSentence2 = fastestCarsMPH.map(({ carModel, speed }) => {
  return `The ${carModel} goes at around ${speed} miles per hour.`;
});
