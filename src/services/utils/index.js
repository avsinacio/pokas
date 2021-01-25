const getOriginalArtWork = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

const pokemonTypeColors = {
  normal: '#a8a878',
  fire: '#f08030',
  fighting: '#c03029',
  water: '#6890f0',
  flying: '#a890f0',
  grass: '#78c850',
  poison: '#a040a0',
  eletric: '#f8d030',
  ground: '#e0c068',
  psychic: '#f85788',
  rock: '#b8a038',
  ice: '#98d8d8',
  bug: '#a8b81f',
  dragon: '#7038f8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#ee99ac',
}

const pokemonStatNames = {
  hp: 'HP',
  attack: 'ATTACK',
  defense: 'DEFENSE',
  'special-attack': 'SP.ATK',
  'sepecial-defense': 'SP.DEF',
  speed: 'SPEED',
}

const hectogramsToKilograms = (value) => value / 10

const decimetersToMeters = (value) => value / 10

export {
  getOriginalArtWork,
  pokemonTypeColors,
  pokemonStatNames,
  hectogramsToKilograms,
  decimetersToMeters,
}
