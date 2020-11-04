import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/90592442_505954263429846_5989871896215158784_n.png';

export default function Profile() {
	return (
		<div class="row">
		<div class="col s12 m12">
		  <div class="card">
			<div class="card-image">
			  <img src={ImgProfile}/>
			
			  <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons right">cloud</i></a>
			</div>
			<div class="col s12 m12">
				<h5>Nguyen T. Anh Nguyet</h5>
			</div>
			<div class="card-content">
			  <p>TESTER SELENIUMS , C++ AND C#</p>
			</div>
		  </div>
		</div>
	  </div>
	);
}
