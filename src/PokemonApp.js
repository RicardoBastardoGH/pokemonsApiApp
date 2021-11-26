import React, { useState } from 'react'
import { AddPokemon } from './components/AddPokemon';
import { PokemonList } from './components/PokemonList';
import { getPokemons } from "./helpers/Api"
import { AppRouter } from './routes/AppRouter';

export const PokemonApp = () => {

  

    return (
        // <div className="container">
        //     {/* <button onClick={fetchPokemons} className="btn btn-primary"> fetch </button> */}
        //     {/* <PokemonList />
        //     <AddPokemon /> */}
        // </div>
        <AppRouter />
    )
}
