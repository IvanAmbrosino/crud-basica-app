import React, {useState} from 'react'
import CRUDForm from './CRUDForm';
import CRUDTable from './CRUDTable';

//los datos los llamo de una variable inicial, este primer CRUD es falso
const initialDB = [
  {
    id:1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id:3,
    name: "hyoga",
    constellation: "Cisne",
  },
  {
    id:4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id:5,
    name: "Ikki",
    constellation: "Fenix",
  }
];

const CRUDapp = () => {
  //se cargan los datos de la base de datos falsa
  const [db,setDb] = useState(initialDB);

  //Cuando este en null vamos a hacer una insercion
  //Cuando lo pasemos a True, vamos a hacer una actualizacion
  const [dataToEdit,setDataToEdit] = useState(null);
  

  /*Funciones para modificar los datos de la BD */
  const createData = (data) => {
    //siempre verificar los datos que te llegan con un console.log(data);
    //en este caso llegan los datos pero el id esta en Null --> hay que setearlo
    //para setear un id que no se repita puede usarse Date.now()
    data.id = Date.now();
    //console.log(data);
    setDb([...db,data]);
  };

  const updateData = (data) => {
    //consulta por cada elemento si el id coincide con el id del dato, en caso positivo queda la data
    //en caso contrario no se modifica y queda  el elemento el.
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm('¿Estas seguro de eliminar el Registro con el id: '+id+' ?')

    if (isDelete){
      let newData = db.filter(el => el.id !== id); //llena la nueva cadena con todos los datos q tengan un id diferente al q le pasaron  por parametro
      setDb(newData);
    }else{
      return;
    }
  };
  

  return (
    <div>
      <h2>CrudAPP</h2>
      {/* 
      Simplificando hacemos un formulario para la actualizacion y modificacion
      Pero en realidad se tendria que usar uno diferente para cada uno
      */}
      {/* 
      le pasamos una prop con la funcion de createData que se va a ejecutar
      internamente dentro del formulario cuando hagamos la creacion del formulario
      */}
      <article className='grid-1-2'>
        <CRUDForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
        {/* le pasamos los datos a la tabla como props */}
        <CRUDTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
      </article>
    </div>
  )
}

export default CRUDapp
