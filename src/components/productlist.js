import React, { useEffect, useState } from 'react';

function ProductList() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(function () {

        fetch('https://fastwheel.herokuapp.com/product/list')
            .then(function (list) {
                return list.json()
            })
            .then(function (vehicles) {
                console.log(vehicles.data)
                setVehicles(vehicles.data)
            })
    }, [])


    let img = "https://fastwheel.herokuapp.com/img/img-autos/";

    return (

        < div className="container-fluid" >



            < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                <h1 className="h3 mb-0 text-gray-800">LISTA DE VEHICULOS</h1>
            </div >

            <div className='lista-productos listado'>


                


                {vehicles.map((vehicle, i) => <li key={i + vehicle}>

                    < div className="col-lg-6 mb-4" >
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                                    <h6 className="m-0 font-weight-bold text-primary"> {vehicle.name}</h6>
                                </div >
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img + vehicle.profile_picture} alt="dummy" />
                                </div>
                                <h6 className="m-0 font-weight-bold text-primary">Precio por dia: $ {vehicle.pricexday}</h6>
                                <h6 className="m-0 font-weight-bold text-primary">Marca: {vehicle.brand.name}</h6>
                                <h6 className="m-0 font-weight-bold text-primary">Combustible: {vehicle.fuel.name}</h6>
                                <h6 className="m-0 font-weight-bold text-primary">Categoria: {vehicle.category.name}</h6>
                                <h6 className="m-0 font-weight-bold text-primary">Numero de asientos:  {vehicle.seat_number}</h6>
                            </div>
                        </div>
                    </div >
                </li>

                )}



            </div>


        </div>

    )
}

export default ProductList;