import React from 'react'
import { AddPokemon } from '../components/AddPokemon'
import { PokemonList } from '../components/PokemonList'

export const HomeScreen = () => {
    return (
        <div className="container">
            {/* <button onClick={fetchPokemons} className="btn btn-primary"> fetch </button> */}
            <PokemonList />
            <AddPokemon update={false}/>
        </div>
    )
}
