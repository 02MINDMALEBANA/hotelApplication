
import '../css/mainpage.css'
import logo1 from '../mediaContent/logo.png'
import SignUp from './signUp';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function MainPage(){
    
    let history=useHistory();
    const main=(()=>{
        history.push("/about")
    })
    return(
        <div>
            <div className="header">
                <div>
                    <img src={logo1} id='logo'></img>
                    {/* <h1> logo</h1> */}
                </div>
                <div>
                    {/* <span>LOGIN
                        <Link to="/login">Login</Link>
                    </span> */}
                    <Link id='link' to="/">HOME</Link>
                    <Link id='link' to="/login">LOGIN</Link>
                    <Link id='link' to="/sign-up">SIGN-UP</Link>
                    <Link to="/service" id='link'> SERVICES</Link>
                    
                    {/* <a href="home.js">Home</a> */}
                    {/* <a href='signUp.js'>Sign-Up</a>
                    <a href="login.js">Login</a>
                    <a href='services.js'>Services</a> */}
                </div>

               
               
            </div>
            <div className="content">
                <div className="center">
                    <h1 id='myh1'>The Vacation Heaven</h1>
                    <br></br><br/>
                    <button id='btnHome' onClick={main}>Read More
                        {/* <Link to="/about"/> */}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MainPage;
