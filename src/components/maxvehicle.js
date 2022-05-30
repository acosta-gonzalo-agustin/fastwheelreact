import React from 'react';
import { useState, useEffect } from 'react';


  
 function MaxProduct() {

  const [max,setEstado] = useState([]);

    useEffect(function() {

        fetch('https://fastwheel.herokuapp.com/product/main_booking')
        .then(function(data) {
            return data.json()
        })
        .then(function(max) {
          console.log(max)
          let vehicle = max.vehicle
          setEstado(vehicle);
        })
    },[])

    let img = "https://fastwheel.herokuapp.com/img/img-users/";

    return (

        < div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ULTIMO VEHICULO EN BASE DE DATOS</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img + max.picture} alt="dummy" />
                    </div>
                    <h6 className="m-0 font-weight-bold text-primary">{max.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Precio por dia: ${max.pricexday}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Marca: {max.brand.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Combustible: {max.fuel.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Categoria: {max.category.name}</h6>
                    <h6 className="m-0 font-weight-bold text-primary">Numero de asientos: {max.seat_number}</h6>
                </div>
            </div>
        </div >


    )
  
}

export default MaxProduct;