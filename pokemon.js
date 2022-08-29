//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const urlNoNumber =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 899; i++) {
  const pokemonImg = document.createElement("img");
  pokemonImg.src = `${urlNoNumber}${i}.png`;

  const singleDiv = document.createElement("div");

  singleDiv.appendChild(pokemonImg);

  const singleSpan = document.createElement("span");
  singleDiv.appendChild(singleSpan);
  singleSpan.innerText = `${i}`;
  container.appendChild(singleDiv);
}
