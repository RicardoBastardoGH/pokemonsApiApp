import React, { useEffect } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { IconButton } from '@mui/material';
import { deletePokemonById } from '../helpers/Api';
import Swal from 'sweetalert2'

export const Datatable = ( {data} ) => {
    
    const columns = ["Nombre","Imagen","Ataque","Defensa","Acciones"];

    useEffect(() => {
        
    }, [data])
 
    const deletePokemon = (id) =>{
        console.log('id',id);
        deletePokemonById(id)
        .then(res => {
            console.log(res);
            Swal.fire("Excelente","Pokemon Eliminado Exitosamente",'success' )
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="mt-3">
            <table className="table table-bordered text-center" cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>
                        {columns.map((heading) => <th ><strong>{heading}</strong></th>)}
                    </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        {/* {columnsEng.map((column) => (
                            <td>{row[column]}</td>
                            ))} */}
                        <td>{row["name"]}</td>
                        <td><img className="characterImg" src={row["image"]} /> </td>
                        <td>{row["attack"]}</td>
                        <td>{row["defense"]}</td>
                        <td> 
                            <IconButton color="primary" 
                                        aria-label="delete">
                                <BorderColorOutlinedIcon/>
                            </IconButton>     

                            <IconButton color="primary" 
                                        aria-label="delete"
                                        onClick ={ () => deletePokemon(row.id)}>
                                <DeleteForeverIcon />
                            </IconButton>    
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
                
        </div>
    )
}
