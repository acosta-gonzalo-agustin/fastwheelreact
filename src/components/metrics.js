import React from 'react';
import Metric from './metric';
import LastProduct from './lastproduct';
import Categories from './categories';
import LastUser from './lastuser';
import Maxvehicle from './maxvehicle';


function MainMetrics() {


    return (

        <div>


            < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                <h1 className="h3 mb-0 text-gray-800">Fast-Wheel Dashboard</h1>
            </div >


            < div className="row" >
                <Metric name='USUARIOS' url='https://fastwheel.herokuapp.com/user/listing'/>
                <Metric name='CATEGORIAS' url='https://fastwheel.herokuapp.com/product/categories'/>
                <Metric name='PRODUCTOS' url='https://fastwheel.herokuapp.com/product/list'/>

            </div >

            < div className="row" >
                {/* <!-- Last Product in DB --> */}
                <LastProduct />
                {/* <!-- Categories in DB --> */}
                <Categories />

                {/* <!-- Max Product DB --> */}
                <Maxvehicle/>

                {/* <!-- Last User in DB --> */}
                <LastUser />
            </div >

        </div>

    )


}


export default MainMetrics;
