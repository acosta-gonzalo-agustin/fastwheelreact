import React from 'react';
import { useState, useEffect } from 'react';


  
 function MaxVehicle() {

  const [Max,setMax] = useState(0);
  
  
  function traerDatos(){
    fetch("https://fastwheel.herokuapp.com/product/main_booking")
    .then(response => response.json() )
    .then(function(max) {
        let vehicle = max.vehicle;
        setMax(vehicle)
    }) 
    .catch(e =>console.log(e))
  }
  
  useEffect( () => { 
    traerDatos() 
  }, [] )   


  if (Max !== 0){



    let img = "https://fastwheel.herokuapp.com/img/img-autos/";

    return (

        < div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">VEHICULO MAS RENTADO</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img + Max.picture} alt="dummy" />
                    </div>
                    <h6 className="m-0 font-weight-bold text-primary">{Max.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Precio por dia: ${Max.pricexday}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Marca: {Max.brand.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Combustible: {Max.fuel.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Categoria: {Max.category.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Numero de asientos: {Max.seat_number}</h6>
                </div>
            </div>
        </div >


    )



  }
  
}

export default MaxVehicle;