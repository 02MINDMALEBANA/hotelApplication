import '../css/bookingPage.css'
import { Link } from 'react-router-dom';
// import logo2 from '../mediaContent/download (8).jfif'
import map from '../mediaContent/location.jfif'
import React, {useState, Image, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import dayjs from "dayjs";
import {db} from "../config/firebase";
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';

function BookingPage(props){


    console.log(props.blog);
    const [hotel, setHotel]=useState('');
    const [checkin, setCheckin]=useState('');
    const [checkout, setCheckout]=useState('');
    const [rooms, setRooms]=useState('');
    const [sort, setSort]=useState('');
    const [searching, setSearching]=useState('');




    return(
        <div id='body'>
            <div className='head'>
                <div className='logo2'> 
                    {/* <img src={logo2} style={{borderRadius:'50%'}} id='logo2'></img> */}
              
                </div>
                <div className='link1'>
                    <Link to="/" id='link1' style={{marginLeft:'33%', fontWeight:'bold'}}>HOME</Link>
                    <Link to="/service" id='link1' style={{marginLeft:'5%',fontWeight:'bold'}}>SERVICES</Link>
                    <Link to="/about" id='link1' style={{marginLeft:'2%', fontWeight:'bold'}}>ABOUT US</Link>
                </div>
            </div>

            <div className='best'>
                <h1  id='h1best'>BEST HOTEL DEALS!!!</h1>
            </div>
            
            <div className='inputs'>
                <h2 style={{marginLeft:'35%'}}>ENJOY A LUXURY EXPERIENCE</h2><br></br><br></br>
              
                 {/* <button onChange={(e)=>setSearching(e.target.value)}>search</button> */}
                 {/* Sort by:
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option></option>
                    <option> Price   
                    </option>
                    <option> Rating</option>
                    
                </select> */}

            </div>
            <div className='contents'>
                <h3>Book a hotel</h3><br></br><hr></hr>
                <h3>You'll get the best deals here!</h3>
              
                <img src={map} id='logo2' style={{backgroundColor:"brown", width:'120px', height:'120px'}}/> 
               
                <input style={{ marginLeft: '60%', width: '333px', height: '30px', backgroundColor:'#d2bdb3',fontSize:'20px',textAlign:'center'}} placeholder=' Search by location ' onChange={(e)=>setSearching(e.target.value)}/>
             
                <br></br>
             
                <div className='parentDiv' >
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
                                 
                                   {/* <img className='picture' src={res.pic}/> */}
                                   <img  className='picture' src={res.picture} />
                                 
                                  
                                   
                                </Link>
                                <div style={{}}><p style={{color:'#d2bdb3', fontWeight:'bold', fontSize:'20px', marginTop:'0%'}}>{res.name}</p></div>
                               
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