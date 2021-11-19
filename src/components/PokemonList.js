import React, { useEffect, useState } from 'react'
import {  TextField, IconButton, Button } from '@material-ui/core';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';

import { getPokemons } from '../helpers/Api';
import { Datatable } from './Datatable';


export const PokemonList = () => {
    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        getPokemons()
            .then(res => { setData( res ); })
            .catch(err => { console.log('err',err) })
    }, []) 

    const search = (rows) => {
        return rows.filter( row => row.name.toLowerCase().indexOf(query.toLowerCase() ) > -1 ||
                                    row.attack.toString().indexOf(query) > -1 ||
                                    row.defense.toString().indexOf(query) > -1)
    }

    return (
        <div>
            <h5>Listado de Pokemons</h5>

            <div className="row mt-2">
                <div className="col">

                <TextField
                className="mt-1"
                    type="text" 
                    value={query}
                    onChange= { (e) => setQuery(e.target.value)}
                    variant="outlined"
                    placeholder="Buscar"
                    id="outlined-start-adornment"
                    
                    InputProps={{
                        startAdornment: <InputAdornment position="start"> <SearchOutlinedIcon /></InputAdornment>,
                    }}
                    size="small"
                />

                <Button variant="contained" 
                        color="primary" 
                        startIcon={<AddOutlinedIcon />} style={{textTransform: 'none', float: 'right'}} size="large">
                    Nuevo
                </Button>
          
            </div>

            </div>
            { data.length 
                ? <Datatable data = {search(data)} />
                : <h5>Cargando...</h5> 
            }
        </div>
    )
}
