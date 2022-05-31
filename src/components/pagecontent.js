import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainMetrics from './metrics';
import ProductList from './productlist';






function Pagecontent() {


    return (



        < div className="container-fluid" >

            
            {/* <!-- Content Row --> */}
            <Routes>
                <Route path="/" exact element={<MainMetrics/>} />
                <Route path="/list"  element={<ProductList/>} />
            </Routes>
        </div >








    )


}


export default Pagecontent;


