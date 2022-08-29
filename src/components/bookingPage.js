import '../css/bookingPage.css'
import { Link } from 'react-router-dom';
import logo2 from '../mediaContent/download (8).jfif'
import map from '../mediaContent/location.jfif'
import React, {useState, Image, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import dayjs from "dayjs";

function BookingPage(props){


    console.log(props.blog);
    const [hotel, setHotel]=useState('');
    const [checkin, setCheckin]=useState('');
    const [checkout, setCheckout]=useState('');
    const [rooms, setRooms]=useState('');
    const [sort, setSort]=useState('');
    const [searching, setSearching]=useState('');



    return(
        <div>
            <div className='head'>
                <div>
                    <img src={logo2} id='logo2'></img>
              
                </div>
                <div>
                    <Link to="/" id='link'>HOME</Link>
                    <Link to="/service" id='link'>SERVICES</Link>
                    <Link to="/about" id='link'>ABOUT US</Link>
                </div>
            </div>

            <div className='best'>
                <h1 id='h1best'>BEST HOTEL DEALS!!!</h1>
            </div>
            
            <div className='inputs'>
                <input placeholder='City or Hotel' onChange={(e)=>setHotel(e.target.value)}/>
                <input type="date" placeholder='mm/dd/yyyy' onChange={(e)=>setCheckin(e.target.value)}/>
                 <input type="date" placeholder='mm/dd/yyyy' onChange={(e)=>setCheckout(e.target.value)}/>
                 <input placeholder='01' onChange={(e)=>setRooms(e.target.value)}/>
                 {/* <button onChange={(e)=>setSearching(e.target.value)}>search</button> */}
                 Sort by:
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option></option>
                    <option> Price</option>
                    <option> Rating</option>
                    
                </select>

            </div>
            <div className='contents'>
                <h3>Book a hotel</h3><br></br><hr></hr>
                <h3>You'll get the best deals here!</h3>
              
                <img src={map} id='logo2'/> 
               
                <input style={{ marginLeft: '60%', width: '333px', height: '30px' }} placeholder='search' onChange={(e)=>setSearching(e.target.value)}/>
             
                <br></br>
             
                <div className='parentDiv'>
                    {
                         props.blog.filter((res)=>{
                            if (res.location.toLowerCase().includes(searching.toLocaleLowerCase())){
                                return(res);
                            } else {
                                if (searching == ""){
                                    return(res);
                                }
                            }
                         }).map((res, index) => (
                            <>
                                 <div>
                                 <Link to={`blog/${res.id}`}>
                                 
                                   <img className='picture' src={res.pic}/>
                                   
                                </Link>
                               
                                 </div>

                             </>
                         ))
                    }

                </div>
            
            </div>
        </div>
    )
}
export default BookingPage;