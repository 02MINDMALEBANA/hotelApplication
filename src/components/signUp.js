
import '../css/signUp.css'
import profile from '../mediaContent/images.png'
import { useHistory } from 'react-router-dom';
import React,{useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import { Link } from 'react-router-dom';

function SignUp(){

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [Password, setPasssword]=useState('');
    const [contact, setContact]= useState('');




  
    let history=useHistory();
    const sign=(()=>{
        createUserWithEmailAndPassword(auth,  email, Password).then(()=>{
            alert('successfully signed in')
            history.push("/booking")
            
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    })

    return(
        <div id="sign">

            {/* <div className="signForm">
            </div> */}
            <div className="signForm">
                <p id="ppp">REGISTRATION FORM</p>
                <label>
                <img src={profile} id="img"></img>
                </label>
                <input id='myinputs' placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/><br></br>
                <input id='myinputs' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/><br></br>
                <input id='myinputs' placeholder='Enter your Password' onChange={(e)=>setPasssword(e.target.value)}/><br></br>
                <input id='myinputs' placeholder='Enter your Contact Number' onChange={(e)=>setContact(e.target.value)}/><br></br>
                <br></br>

                <span style={{marginLeft:'120px'}}>Already have an account?
                    <Link to="/login">Click here to Sign-In!</Link>
                </span>
                <button onClick={sign}>Submit</button>
            </div>

        </div>
    )
}
export default SignUp;
