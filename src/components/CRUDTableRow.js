import React from 'react'

const CRUDTableRow = ({el, setDataToEdit, deleteData}) => {
  let {name,constellation,id} = el;  
  return (
      <tr>
        <td>{el.name}</td>
        <td>{el.constellation}</td>
        <td>
            {/*llama a los metodos de los padres */}
            <button type='button' className="btn btn-warning" onClick={() => setDataToEdit(el)}>Editar</button>
            <button type='button' className="btn btn-danger" onClick={() => deleteData(id)}>Eliminar</button>
        </td>
     </tr>
  )
}

export default CRUDTableRow
