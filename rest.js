function summyMachine(...numbers) {
  return numbers.reduce((total, currentNumber) => (currentNumber += total));
}
function fightClubCredits(star1, star2, star3, director, ...others) {
  console.log(`We want to thank everyone who helped this movie come true! `);
  console.log(`First to our protagonists, ${star1}, ${star2} and ${star3}.`);
  console.log(`Also our director ${director}.`);
  console.log(`And finally to our co-stars: ${others}.`);
}

fightClubCredits(
  "Brad Pitt",
  "Edward Norton",
  "Helena Bonham Carter",
  "David Fincher",
  "Meat Loaf",
  "Jared Leto",
  "Holt McCallany",
  "Zach Grenier",
  "Eion Bailey",
  "Peter Iacangelo",
  "Thom Gossom Jr."
);
