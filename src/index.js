import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

const input =(
	<div id="outer-form" className="bg-col">
	<div id="form" className="margin-top">
			<div className="container">
			<h4 style={{margin:0}} className="reg-color">Registration</h4><br/>
			<form className="col s12" id="mainform">
				<div className="row">
				
					<div className="input-field col s12 m6">
						<input type="text" className="input-color validate" id="name" name="name" required />
						<label for="name">Name</label>
					</div>
					<div className="input-field col s12 m6">
                    	<input id="regno" type="text" minLength="8" maxLength="10" pattern="^([0-9]{2})([a-zA-Z]{3})([0-9]{3,4})$" name="regno" className="validate input-color" required/>
                    	<label for="regno">Registration Number</label>
                	</div>
            	</div>
            	<div className="row">
            		<div className="input-field col s12 m6">
            			<input type="text" className="validate input-color" id="phno" minlength="10" maxlength="13" name="phno" required/>
            			<label for="phno">Contact Number</label>
            		</div>
            		<div className="input-field col s12 m6">
            			<input type="email" className="validate input-color" id="email" name="email" required/>
            			<label for="email">Email Address</label>
            		</div>
            	</div>            	
			</form>
			<div className="center-align">
				<button className="btn waves-effect waves-light" type="submit" name="action" id="btn">
				Submit
				<i className="material-icons right">send</i>
				</button>
			</div>

			</div>
		</div>
		</div>
	);
$(document).ready(function(){
	$("#btn").click(function(){

		//alert("Button Clicked");
		
		const name1=$('#name').val();
	    const regno1=$('#regno').val();
	    const phno1=$('#phno').val();
	    const email1=$('#email').val();
	    const out=(
			<div className="container">	
			<h4><u>Details Filled: </u></h4>		
			<h5>
				<div><b>Name:</b>    {name1}</div>
				<div><b>Registration Number:</b>   {regno1} </div>
				<div><b>Contact Number:</b>   {phno1} </div>
				<div><b>Email Address:</b>   {email1}</div>			
				</h5>
			</div>
			);
	    ReactDOM.render(out,document.getElementById('print'));
	});

});
		


ReactDOM.render(input, document.getElementById('root'));