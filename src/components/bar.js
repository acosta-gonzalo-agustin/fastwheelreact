import React from 'react';
import {Link} from 'react-router-dom';


function Bar() {
	return (


		<div className='bg-gradient-primary'>

			<ul className="navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar">

				{/* <!-- Sidebar - Brand --> */}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						<i className="fas fa-chart-line"></i>
					</div>
					<div className="sidebar-brand-text mx-3">Admin</div>
				</a>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider my-0" />

				{/* <!-- Nav Item - Dashboard --> */}
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard</span></Link>
				</li>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider" />


				{/* <!-- Nav Item - Pages --> */}
				<li className="nav-item active">
					<Link className="nav-link collapsed" to="/list">
						<i className="fas fa-fw fa-folder"></i>
						<span>Lista de Vehiculos</span>
					</Link>
				</li>

				{/* <!-- Nav Item - Charts --> */}
				<li className="nav-item active">
					<Link className="nav-link" to="/charts">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Charts</span>
					</Link>
				</li>

				

				{/* <!-- Nav Item - Tables --> */}
				<li className="nav-item active">
					<a className="nav-link" href="https://fastwheel.herokuapp.com/">
						<i className="fas fa-fw fa-table"></i>
						<span>Aplicacion Web</span></a>
				</li>

			

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>


		</div>

	)


}

export default Bar;