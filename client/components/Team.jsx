import React from 'react'

export default function Team(props) {
  const { team } = props
  return (
    <div className="poke-list">
      {team.map((pokemon, index) => (
        <div key={pokemon.name + index}>
          <img src={pokemon.sprites.front_default} alt={'pokemon'}></img>
        </div>
      ))}
    </div>
  )
}
