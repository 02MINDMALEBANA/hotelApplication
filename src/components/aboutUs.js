
import '../css/aboutUs.css'
import { Link } from 'react-router-dom';

function AboutUS() {
    return(
        <div className='abtBody'>
            <div className="homelink">
                <Link to="/">Home</Link>
                {/* <a href="home.js">Home</a> */}
            </div>
            <div className="about">

                <h1 id='h1Abt'>ABOUT US</h1>
                <p id='p1'> THE PEACH</p>
                <p id='p2'>
                    This custom built web based online booking portal offers
                    access to multiple hotels and affordable accomodation and with
                    filtering options, 
                    you can quickly find the best deal that suits your needs.
                <br></br><br></br>
               
                THE PEACH developed because of the people in the business, with courage, passion, and a true calling to something more. 
                With a mission to provide hotel guests with the ultimate hospitality experience, the right blend of service, luxury, and efficiency.
                We have a family culture and our attention to detail is firmly grounded in our people,
                 who pride themselves on their ability to provide a truly personal touch to every guest. 
                </p>
             
                
            </div>

        </div>
    )
}

export default AboutUS;
