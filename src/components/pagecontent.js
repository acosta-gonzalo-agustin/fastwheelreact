import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainMetrics from './metrics';
import ProductList from './productlist';
import Charts from './chart';





function Pagecontent() {


    return (



        < div className="container-fluid" >

            
            {/* <!-- Content Row --> */}
            <Routes>
                <Route path="/" exact element={<MainMetrics/>} />
                <Route path="/list"  element={<ProductList/>} />
                <Route path="/charts" element={<Charts/>}/>
            </Routes>
        </div >








    )


}


export default Pagecontent;


