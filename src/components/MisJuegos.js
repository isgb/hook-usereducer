import React from 'react'

export const MisJuegos = () => {

    const conseguiDatosForm = e =>{
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo : e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        console.log(juego)
    }

    return (
        <div>
            <h1>Estos son mis videojuegos</h1>

            <p>Número de videojuegos: 15</p>

            <ul>
                <li>Gta</li>
                <li>Mortal kombat</li>
                <li>Crash Bandicoot</li>
            </ul>

            <h3>Agregar Juego</h3>

            <form onSubmit={conseguiDatosForm}>
                <input type='text' name="titulo" placeholder='Titulo'/>
                <textarea name='descripcion' placeholder='Descripción'></textarea>
                <input type='submit' value='Guardar'/>
            </form>
        </div>

    )
}
