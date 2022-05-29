import React, { useEffect, useState } from 'react';

function Categories() {

    const [Categories,setCategories] = useState([]);

    useEffect(function() {

        fetch('https://fastwheel.herokuapp.com/product/list')
        .then(function(data) {
            return data.json()
        })
        .then(function(data) {
            setCategories(data.countByCategory)
        })
    },[])


    return (

        < div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">CANTIDAD DE PRODUCTOS POR CATEGORIA</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                    
                    {Categories.map((category,index) => <div key = {category+index} className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                
                                <div className="card-body">
                                    {category[0]}
                                    
                                </div>
                                <div className="">
                                    {category[1]}
                                </div>

                            </div>
                        </div>
                    )}

                        

                    </div>
                </div>
            </div>
        </div >


    )

}


export default Categories;