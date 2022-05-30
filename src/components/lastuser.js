import React, { useEffect, useState } from 'react';


function LastUser() {


    const [LastUser,setLastUser] = useState([]);

    useEffect(function() {

        fetch('https://fastwheel.herokuapp.com/user/listing')
        .then(function(users) {
            return users.json()
        })
        .then(function(users) {
            let data = users.data;
            setLastUser(data[data.length-1])
        })
    },[])

    let img = "https://fastwheel.herokuapp.com/img/img-users/";

    return (

        

        < div className="col-lg-6 mb-4" >

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ULTIMO USUARIO EN BASE DE DATOS</h6>
                </div>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Name : {LastUser.name} {LastUser.last_name}</h6>
                </div>
                <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img + LastUser.profile_picture} alt="dummy" />
                    </div>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Email : {LastUser.email}</h6>
                </div>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Phone Number : {LastUser.phone_number}</h6>
                </div>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Driver Licence: {LastUser.driver_licence}</h6>
                </div>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Promo code: {LastUser.promo_code}</h6>
                </div>
                
            </div>
        </div >


    )

}


export default LastUser;