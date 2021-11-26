import React from 'react'
import { AddPokemon } from '../components/AddPokemon'

export const UpdateScreen = () => {
    return (
        <div>
            <AddPokemon update={true} />
        </div>
    )
}
