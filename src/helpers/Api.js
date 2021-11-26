// import React from 'react'
import axios from 'axios';

import { ArtTrack, DriveFileRenameOutlineSharp } from "@mui/icons-material";

const baseUrl = "https://pokemon-pichincha.herokuapp.com/pokemons/";


  export const getPokemons = async(  ) => {

    const resp = await fetch( `${baseUrl}?idAuthor=1` );
    const  data  = await resp.json();
    // console.log(data)


    // const pokemons = data.map( p => {
    //     return {
    //         Nombre: p.name, 
    //         Imagen: p.image, 
    //         Ataque: p.attack, 
    //         Defensa: p.Defense,
    //     }
    // })

    return data;


}

export const addPokemon = async( pokemon  ) => {

    const url = `${baseUrl}`
    console.log(url)
    console.log("https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1")
    const response = await axios.post(url, pokemon,
        { headers: { "Content-Type": "application/json; charset=UTF-8" },
          params: { idAuthor: 1 }, //Add userID as a param 
      }) 
    console.log(response)
    return response;    


}

export const addPokemon2 = async( pokemon  ) => {

    // POST request using fetch with async/await
    const url = `${baseUrl}?idAuthor=1`
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemon),
        params: { idAuthor: 1 }
    };
    const response = await fetch(baseUrl, requestOptions);
    const data = await response.json();
    return data;

}
export const updatePokemon = async( pokemon  ) => {

    // POST request using fetch with async/await
    const url = `${baseUrl}:${pokemon.id}`
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemon)
    };
    const response = await fetch(baseUrl, requestOptions);
    const data = await response.json();
    return data;

}


export const deletePokemonById = async( id  ) => {

    // POST request using fetch with async/await
    const url = `${baseUrl}:${id}`
    console.log(url)

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(baseUrl, requestOptions);
    const data = await response.json();
    return data;

}