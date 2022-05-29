import React, { useEffect, useState } from 'react';

function Metric(props) {

    const [feature,setFeature] = useState([]);

    useEffect(function() {
       
        fetch(props.url)
        .then(function(list) {
            return list.json()
        })
        .then(function(data) {
            setFeature(data.total)
        })
    })


    return(

        <div className="col-md-4 mb-4" >
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.name}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{feature}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )

}


export default Metric;