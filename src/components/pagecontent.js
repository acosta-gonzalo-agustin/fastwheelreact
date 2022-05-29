import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainMetrics from './metrics';
import ProductList from './productlist';

// import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'; 


function Pagecontent() {


    return (



        < div className="container-fluid" >

            
            {/* <!-- Content Row --> */}
            <Routes>
                <Route path="/" exact element={<MainMetrics/>} />
                <Route path="/list" exact element={<ProductList />} />
            </Routes>
        </div >








    )


}


export default Pagecontent;


