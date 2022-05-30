import React from 'react';
import {Bar} from 'react-chartjs-2'


  
 function Chart() {


    const data = {

        labels: ['medianos','compactos','premium'],
        
        datasets: [{
            label:'Categorias',
            backgroundColor:'rgba(0,255,0,1)',
            borderColor:'black',
            borderWith:1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FF0000',
            data: [5,6,10]
        }]
    }

    const opciones = {
        maintanAspectRatio: false,
        responsive: true,
    }

    

    return (


        < div className="container-fluid" >



            < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                <h1 className="h3 mb-0 text-gray-800">LISTA DE VEHICULOS</h1>
            </div >

            <div className='lista-productos listado'>

                    < div className="col-lg-6 mb-4" >
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <Bar data = {data}  options = {opciones}/>
                            </div>
                        </div>
                    </div >
            </div>
        </div>   
        
    )
}
  

export default Chart;