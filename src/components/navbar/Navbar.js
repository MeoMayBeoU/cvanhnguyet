import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-9'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
							<i class="material-icons">cloud</i>
							</Link>
							<Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
									<i class="material-icons">search</i> 
									</Link>
								</li>
								<li>
									<Link to='/skills'>
									<i class="material-icons">view_module</i> 
									</Link>
								</li>
								<li>
									<Link to='/experiences'>
									<i class="material-icons">refresh</i> 
									</Link>
								</li>
								<li>
									<Link to='/educations'>
									<i class="material-icons">more_vert</i> 
									</Link>
								</li>
							
							</ul>
						</div>
					</div>
				</nav>
				
			</>
		);
	}
}
