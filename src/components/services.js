
import '../css/services.css'
import { Link } from 'react-router-dom';
function Services(){
    return(
        <div className="services">
            <div className="div1">
                <Link to="/" id='link'>HOME</Link>
               
            </div>
        
            <div className="div2">
               
            </div>
            <h3>WELCOME TO THE PEACH HOTEL BOOKING WEBSITE</h3><br></br>
            {/* <div className='h3div'>
                <h3>WELCOME TO THE PEACH HOTEL BOOKING WEBSITE</h3><br></br></div> */}

            <div className="div3">
                {/* <h3>WELCOME TO THE PEACH HOTEL BOOKING WEBSITE</h3><br></br> */}
                <div className='box1'>
                    <h4>HOTEL BOOKING</h4>
                    <br></br>
                    <h6>You can book on our website 
                        online at anytime or anywhere 
                        we ensure that we offer our 
                        services 24/7</h6>
                </div>
                <div className='box2'>
                   <h4>ROOMS</h4>
                   <br></br>
                   <h6>we offer affordable and luxurious 
                        rooms and hotel services, we 
                        ensure that you are always 
                        comfortable </h6>
                   
                </div>
                <div className='box3'>
                    <h4>ANEMITIES</h4>
                    <br></br>
                    <h6>We ensure that you stay 
                        entertained and enjoying your 
                        stay at our hotels, there’s access
                        to wifi, some rooms have TV’s and
                        there’s wide range of beverages
                        and food</h6>
                </div>
                <div className='box4'>
                    <h4>CONTACT US</h4>
                    <br></br>
                    <h6>You can contact us anytime  that 
                        you want at our Facebook page/ on
                        WhatsApp and on our telephone</h6>
                </div>
            </div>
            <div className="div4">
                {/* <a href="abooutUs.js">About US</a> */}
                <Link to="/about" id='link'>About US</Link>
                <Link to="/" id='link'>Home</Link>
                {/* <a href="home.js">Home</a>   */}
            </div>

        </div>
    )
}
export default Services;