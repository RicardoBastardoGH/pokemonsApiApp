import React, { useState } from 'react'
import validator from 'validator'
import {  IconButton, Button } from '@material-ui/core';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from '../hooks/useForm';
import { addPokemon, addPokemon2 } from '../helpers/Api';
import Swal from 'sweetalert2'

export const AddPokemon = ( props ) => {

    console.log(props)
    const update = props.update; 
    const types = ["water","fire","normal","bug","poison"];
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        image: '',
        attack: '50',
        defense: '50',
        type: "water",
        hp: '50'
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const { name, image, attack, defense, type , hp} = formValues;

    const handleValidation = () => {
        let errors = {};
    
        //Name
        if (!name) {
          setFormIsValid (false);
          errors["name"] = "Nombre no puede ser vacio";
          return;
        }
    
        if (!name.match(/^[a-zA-Z]+$/)) {
            setFormIsValid (false);
            errors["name"] = "Nombre solo debe contener letras";
            return;
        }
        // Image
        if (!image) {
            setFormIsValid (false);
            errors["image"] = "Debe ingresar una imagen";
            return;
        }    
        if(!validator.isURL(image)){
            setFormIsValid (false);
            errors["image"] = "Debe ingresar una url valida";
            return;
        }

        setFormIsValid (true);
        return; 
  }

    const handleAddNewPokemon = ( e ) => {
        e.preventDefault();

        console.log(name,image,attack,defense,type);
        console.log("TYPE",type);

        const currentDateTime=  new Date().toISOString()
        const newPokemon = {
            name,
            image,
            type,
            hp: hp.toString(),
            attack: attack.toString(),
            defense: defense.toString(),
            idAuthor:1,
            created_at: currentDateTime,
            updated_at: currentDateTime
        }
        addPokemon2(newPokemon)
        .then(res => {
            console.log(res);
            Swal.fire("Excelente","Pokemon Creado Exitosamente",'success' )
        })
        .catch(err => console.log(err))

    }
 
    return (
        <div className="container">
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Nuevo Pokemon</h5>
                    <form onSubmit={ handleAddNewPokemon }>
                        <div className="form-group">
                    
                        <div className="row">
                            <div className="col mt-2" >
                                    
                            
                                <label className="form-label me-3" >Nombre: </label>
                                <input type="text" 
                                       className="form-control" 
                                       name="name"
                                       value={ name }
                                       onChange={ handleInputChange }
                                       onKeyPress={handleValidation}
                                       aria-describedby="emailHelp" 
                                       placeholder="Ingrese el Nombre"/>
                                <br/>
                                <label className="form-label me-3" >Imagen: </label>
                                <input type="text" 
                                       className="form-control" 
                                       placeholder="Url"
                                       name="image"
                                       value={ image }
                                       onKeyPress={handleValidation}
                                       onChange={ handleInputChange} />
                                <br/>
                                <label className="form-label">Type</label>
                                <select className="form-select"
                                        name="type"
                                        value={ type }
                                        onChange={ handleInputChange}>
                                    { types.map(t => (<option>{t}</option>) ) }
                                </select>

                            </div>
                            <div className="col mt-5" >
                                <div style={{float: 'right',   textAlign: 'end'}} >
                                <label className="form-label mb-5 me-3">Ataque: {attack}</label>
                                <span className="me-1">0 </span>
                                <input type="range" 
                                       className="" 
                                       min="0" 
                                       max="100" 
                                       step="1" 
                                       name="attack"
                                       value={ attack }
                                       onChange={ handleInputChange}/>
                                <span className="ms-1">100</span>   
                                <br/>
                                <label className="form-label mb-5 mt-4 me-3">Defensa: {defense}</label>
                                <span className="me-1">0 </span>
                                <input type="range" 
                                       className="" 
                                       min="0" 
                                       max="100" 
                                       step="1"
                                       name="defense"
                                       value={ defense }
                                       onChange={ handleInputChange}/>
                                <span className="ms-1">100</span>  
                                <br/>
                                <label className="form-label mt-4 me-3">Hp: {hp}</label>
                                <span className="me-1">0 </span>
                                <input type="range" 
                                       className="" 
                                       min="0" 
                                       max="100" 
                                       step="1"
                                       name="hp"
                                       value={ hp }
                                       onChange={ handleInputChange}/>
                                <span className="ms-1">100</span>  


                                </div>
                                
                            </div>

                        </div>
                        
                        <div className="col mt-5 text-center" >
                
                            <Button variant="contained" 
                                type="submit"
                                color="primary"
                                className="me-2" 
                                disabled={!formIsValid}
                                startIcon={<SaveIcon />} style={{textTransform: 'none', float: 'center'}} size="large">
                                Guardar
                            </Button>
                            
                            <Button variant="contained" 
                                color="primary" 
                                startIcon={<ClearOutlinedIcon />} style={{textTransform: 'none', float: 'center'}} size="large">
                                Cancelar
                            </Button>
                            
                        
                        </div>
                        </div>
                    </form>
                
                </div>
            </div>
            <h1>Update: {update}</h1>
        </div>
    )
}
