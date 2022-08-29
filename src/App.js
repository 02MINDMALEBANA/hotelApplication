import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainPage';
import SignUp from './components/signUp';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
import AboutUS from './components/aboutUs';
import Services from './components/services';
import BookingPage from './components/bookingPage';
import Results from './components/results';
import logo2 from '../src/mediaContent/download (8).jfif'
import dp from '../src/mediaContent/unnamed.jpg'
import star from '../src/mediaContent/star.jfif'
import beds from '../src/mediaContent/beds.jfif'
import icon from '../src/mediaContent/locationicon.png'
import pool from '../src/mediaContent/boutique pta.jfif'
import room1 from '../src/mediaContent/kings hotel plk.jfif'
import room2 from '../src/mediaContent/menlyn pta.jfif'
import room3 from '../src/mediaContent/fusion boutique hotel plk.jfif'
import room4 from '../src/mediaContent/sign.jpg'
                                                            
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {db} from './config/firebase'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';

function App() {

  const [guesthouse, setGuesthouse]=useState([]);




  const blog=[{
    welcome:"Guest room, 2 Twin/Single Bed(s), Garden view, Balcony",
    price:"1500.00",
    name:"King Hotel Polokwane",
    // rating:[star],
    location: "Polokwane, Polokwanne",
    map: <img src={icon} className="rate"/>,
    pic: beds,
    id: 1
  },
  {
    welcome:"Guest room, 1 Double Bed, Garden view",
    price:"750.00",
    name:"Fusion Boutique Hotel",
    rating:[star],
    location: "Polokwane, Polokwanne",
    map: <img src={icon} className="rate"/>,
    pic:  room3,
    id: 2

  },
  {
    welcome:"Standard room, 1 Single Bed",
    price:"450.00",
    name:"Mosate Lodge Polokwane",
    rating:[star],
    location: "Polokwane, Polokwanne",
    map: <img src={icon} className="rate"/>,
    pic:  room2,
    id: 3

  },
  {
    welcome:"Self Catering Standard, 1 Double Bed, Sleeps 2, Free self parking",
    price:"900.00",
    name:"ANEW Hotel Capital",
    rating:[star],
    location: "Pretoria",
    map: <img src={icon} className="rate"/>,
    pic:  room4,
    id: 4


  },
  {
    welcome:"Junior Suite, 1 King Bed, 2 sleeps, Free WIFI",
    price:"1300.00",
    name:"King Hotel Polokwane",
    rating:[star],
    location: "Polokwane, Polokwanne",
    map: <img src={icon} className="rate"/>,
    pic:  room1,
    id: 5
  },
  {
    welcome:"Deluxe room, Pool, Free WIFI, Free Parking",
    price:"1000.00",
    name:"Casta Diva",
    rating:[star],
    location: "Pretoria",
    map: <img src={icon} className="rate"/>,
    pic:  pool,
    id: 6
  }
 
]

//ad database
   useEffect(() => {
    getdata()

  //   const collectHotels = collection(db, 'hotels');
  //   const hotel = {
  //     welcome: "Guest room, 2 Twin/Single Bed(s), Garden view, Balcony",
  //     price: "1500.00",
  //     name: "King Hotel Polokwane",
  //     // rating:[star],
  //     location: "Polokwane, Polokwanne",

  //   }
    
    
  //   addDoc(collectHotels, hotel).then(() => {
  //     console.log('success')
  //   }).catch((mistakes) => {
  //     console.log(mistakes)
  //   })
  //     console.log(hotel)
   },[])
   const getdata= async ()=>{
    console.log('get')
    const myhotelcollection = collection(db, "hotels")
    const data= await getDocs(myhotelcollection)
    setGuesthouse(data.docs.map((rooms)=>(rooms.data())))
    
   }
   console.log("successfully added", guesthouse)




  return (
    <Router basename='hotelApplication'>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/forgot" component={ForgotPassword}></Route>
        <Route path="/about" component={AboutUS}></Route>
        <Route path="/service" component={Services}></Route>
        <Route path="/booking" >
          <BookingPage  blog={blog} />
        </Route>
        <Route path="/blog/:id">
          <Results blog={blog} />
        </Route>
     

      </Switch>
    </Router>

  );
}

export default App;
