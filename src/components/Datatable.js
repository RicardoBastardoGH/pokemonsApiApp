import React, { useEffect } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const Datatable = ( {data} ) => {
    
    const columns = ["Nombre","Imagen","Ataque","Defensa","Acciones"];

    useEffect(() => {
        
    }, [data])
      
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
                    <tr>
                        {/* {columnsEng.map((column) => (
                            <td>{row[column]}</td>
                            ))} */}
                        <td>{row["name"]}</td>
                        <td><img className="characterImg" src={row["image"]} /> </td>
                        <td>{row["attack"]}</td>
                        <td>{row["defense"]}</td>
                        <td> <BorderColorOutlinedIcon/>   <DeleteForeverIcon /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
                
        </div>
    )
}
