import React from 'react';
import { useState, useEffect } from 'react';


  
 function LastProduct() {

  const [valoresEstado,setEstado] = useState(0);
  
  
  function traerDatos(){
    fetch("https://fastwheel.herokuapp.com/product/list")
    .then(response => response.json() )
    .then(function(list) {
        let vehicles = list.data;
        setEstado(vehicles[vehicles.length-1])
    }) 
    .catch(e =>console.log(e))
  }
  
  useEffect( () => { 
    traerDatos()
    console.log(valoresEstado) 
  }, [] )   


  if (valoresEstado !== 0){

    let img = "https://fastwheel.herokuapp.com/img/img-autos/";

    return (

        < div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ULTIMO VEHICULO EN BASE DE DATOS</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img + valoresEstado.picture} alt="dummy" />
                    </div>
                    <h6 className="m-0 font-weight-bold text-primary">{valoresEstado.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Precio por dia: ${valoresEstado.pricexday}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Marca: {valoresEstado.brand.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Combustible: {valoresEstado.fuel.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Categoria: {valoresEstado.category.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Numero de asientos: {valoresEstado.seat_number}</h6>
                </div>
            </div>
        </div >


    )



  }
  
}

export default LastProduct;