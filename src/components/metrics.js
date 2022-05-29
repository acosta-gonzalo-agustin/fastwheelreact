import React from 'react';
import Metric from './metric';
import LastProduct from './lastproduct';
import Categories from './categories';
import LastUser from './lastuser';


function MainMetrics() {


    return (

        <div>


            < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                <h1 className="h3 mb-0 text-gray-800">Fast-Wheel Dashboard</h1>
            </div >


            < div className="row" >
                <Metric name='USUARIOS' url='http://localhost:3001/user/listing' />
                <Metric name='CATEGORIAS' url='http://localhost:3001/product/categories' />
                <Metric name='PRODUCTOS' url='http://localhost:3001/product/list' />

            </div >

            < div className="row" >
                {/* <!-- Last Product in DB --> */}
                <LastProduct />
                {/* <!-- Categories in DB --> */}
                <Categories />
                {/* <!-- Last User in DB --> */}
                <LastUser />
            </div >

        </div>

    )


}


export default MainMetrics;
