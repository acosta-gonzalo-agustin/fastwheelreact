import React from 'react';
import Topnav from './topnav';
import Pagecontent from './pagecontent';


function Main() {


    return (


        <div id="content" >
            
            {/* <!-- Topbar --> */}
            <Topnav/>
            <Pagecontent/>
            
        </div >


    )
}

export default Main;