import React, { useEffect, useState } from 'react';
import './LoginPage.css'
import LoginValidation from './LoginValidation';
// import { Redirect } from 'react-router-dom';
import { Navigate  } from 'react-router-dom';

function Login(props) {



const[formValue,setFormValue]=useState({email:"",password:""})

const[formErrors,setFormErrors]=useState({})

const[isSubmit,setIsSubmit]=useState(false)

const handleChange=(event)=>{
    
    const {name,value}=event.target   //destructuring
    setFormValue({...formValue,[name]:value}) //spread syntax to append value
    console.log(formValue)
}

const handleSubmit=(event)=>{
    event.preventDefault()
    setFormErrors(LoginValidation(formValue))
    console.log(formErrors)
    setIsSubmit(true)

    
}



// Successful Signup validation
useEffect(()=>{

    if(Object.keys(formErrors).length===0)
    {alert("successfully submitted")
    
       
    
}

},[formErrors])

    return (
        <div className='body'>
            <br/><br/>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<Navigate to='/home'/>) : (<pre className='pretext'>{JSON.stringify(formValue, undefined, 2)}</pre>)} 
           	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

            

            <div class="login">
				<form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" value={formValue.email} onChange={handleChange}/>
                    <p className='error'>{formErrors.email}</p>
					<input type="password" name="password" placeholder="Password" required="" value={formValue.password} onChange={handleChange}/>
                    <p className='error'>{formErrors.password}</p>
					<button>Login</button>
				</form>
			</div>
            </div>

			
	</div>
   
      
    );
}

export default Login;