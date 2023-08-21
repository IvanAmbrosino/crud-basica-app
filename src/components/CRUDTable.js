import React from 'react'
import CRUDTableRow from './CRUDTableRow'

//set data to edit y delete data son las funciones que llama el hijo CRUDtablerow
//si hubiera muchos mas niveles en el medio, se puede usar la API de Context
const CRUDTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Constelacion</th>
            <th scope="col">Acciones</th>
          </tr>  
        </thead>
        <tbody>
            {/*generamos la estructura de las filas en otro componente*/
            /*hacemos un conditional Render por si la cadena de datos viene vacia*/}
            {data.length === 0 ? <tr><td colSpan='3'>Sin Datos</td></tr> : data.map(el => <CRUDTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)}
        </tbody>
      </table>
    </div>
  )
}

export default CRUDTable
