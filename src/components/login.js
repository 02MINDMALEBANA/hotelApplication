
import '../css/login.css'
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
function Login(){


    const [email, setEmail]= useState('');
    const [Password, setPasssword]=useState('');
 

    let history=useHistory();
    const login=(()=>{
        signInWithEmailAndPassword(auth, email, Password).then(()=>{
            history.push("/booking")
            alert('success')
        }).catch((errors)=>{
            console.log(errors)
            alert('invalid email or password')
        })
    })
    return(

  
        
        <div id="log">
            <div className='login'>
                <p id='loginform'>LOGIN FORM</p>
                <input id='myinputs' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} type='email'/><br></br>
                <input id='myinputs' placeholder='Enter your Password' onChange={(e)=>setPasssword(e.target.value)} type='password'/><br></br>
                <br></br>
                <span style={{marginLeft:'120px'}}>Forgot Password?
                    <Link to="/forgot">Click here to create a new one!</Link>
                </span>
                <br></br><br></br>
                <span style={{marginLeft:'120px'}}>Don't have an account?
                    <Link to="/sign-up">Click here to create an account!</Link>
                </span>
                <button id='btn' onClick={login}>Login</button>

            </div>

          

        </div>
      
    )
}
export default Login;