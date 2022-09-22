import { SET_JV_HP, SET_JV_ATK } from '../actions/JV.js'

const initialState = [
  {
    name: 'squirtle',
    id: 7,
    stats: {
      0: {
        base_stat: 44,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 48,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 65,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    types: {
      0: {
        type: {
          name: 'water',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_JV_HP:
      return state.map((jvPokemon) => {
        if (jvPokemon.id == pokemon.id) {
          const tempPokemon = jvPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return jvPokemon
      })
    case SET_JV_ATK:
      return state.map((jvPokemon) => {
        if (jvPokemon.id == pokemon.id) {
          const tempPokemon = jvPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return jvPokemon
      })
    default:
      return state
  }
}

export default reducer
