import React, {useEffect,useState} from 'react';

const initialForm = {
    name:"",
    constellation:"",
    id: null,
};

const CRUDForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form,setForm] = useState(initialForm);

  //Creamos una funcion de efecto (useEfect) que se va a activar cuando detecte que la variable data to edit cambió
  //con este efecto conectamos el click de editar y pasamos los datos de la tabla al formulario
  useEffect (() => {
    if (dataToEdit){ //si el dataToEdit tiene algo
        setForm(dataToEdit) //ejecutamos el setForm para que ponga los datos para su actualizacion
    } else{
        setForm(initialForm) //caso contrario lo dejamos con los datos iniciales
    }
  }, [dataToEdit]) 

  {/*los distintos eventos que se van a trabajar en el formulario*/}
  //funcion que detecta cambios y los almacena en los atributos del form
  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    })
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); //funcion para que no se autoprocese el formulario

    //aca generamos las validaciones del formulario
    if (!form.name || !form.constellation)  { //controla que los datos no esten vacios con !
        alert("Datos Incompletos");
        return;
    }

    if (form.id === null){
        createData(form); //se les pasa los datos que se guardan en el handleChange en form
    }else {
        updateData(form);
    }

    handleReset();
  };
  
  //se resetea el formulario
  const handleReset = (e) => {
    setForm(initialForm) //setea el formulario con los datos iniciales previamente establecidos
    setDataToEdit(null) //seteamos todo 
  };  

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" name='name' placeholder='Nombre' onChange={handleChange} value={form.name} />
        <input type="text" className="form-control" name='constellation' placeholder='Constelacion' onChange={handleChange} value={form.constellation}/>
        <input type='submit' className="btn btn-primary" value='Enviar'/>
        <input type='reset' className="btn btn-primary" value='Limpiar'onClick={handleReset}/>
      </form>
    </div>
  );
};

export default CRUDForm;
