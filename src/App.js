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
// import logo2 from '../src/mediaContent/download (8).jfif'
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
import {auth, db} from './config/firebase'
import { addDoc, collection, getDoc, getDocs , query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';

function App() {

  const [guesthouse, setGuesthouse]=useState([]);

  const [hotels, setHotels] = useState([])
      
  const hotelRef = collection(db, 'hotels')

  const getHotels = async () =>{
        const data =  await getDocs(hotelRef)
       
       
        console.log('hotels data', data.docs.map((results)=>(results.data())))
        setHotels( data.docs.map((results)=>({...results.data(), id:results.id})))
  }

    //get booking history
    const [histories, setHistories]=useState([]);
    const hotelBooking =collection(db, 'bookingDetails')
    const getBookingHistory =async() =>{
      // const userID = auth.currentUser.uid;
      const userRef = collection(db, 'users')
      // const q = query(userRef, where('userId', '==', userID))
     



      // console.log('user id ===', userID)
      const data =await getDocs(hotelBooking)
      console.log(data)
      data.forEach((results)=>{
        console.log('my booking history', results.data())
        setHistories(results.data())
      })
      // console.log('booking history', data.docs.map((results)=>({...results.data(), userID:results.userID})))
      // setHistories(data.docs.map((results)=>({...results.data(), id:results.userID})))
  
    }






//ad database
   useEffect(() => {
    // getdata()
    getHotels()
    getBookingHistory()

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




  //  const getdata= async ()=>{
  //   console.log('get')
  //   const myhotelcollection = collection(db, "hotels")
  //   const data= await getDocs(myhotelcollection)
  //   setGuesthouse(data.docs.map((rooms)=>(rooms.data())))
    
  //  }

  //  console.log("hotels", hotels)

  //for booking details
  const [bookingDetails, setBookingDetails] = useState ([]);
  useEffect( () => {
    
    console.log(bookingDetails);
  }, [bookingDetails])

  const addBooking=((_checkin, _checkout, _days)=>{

    setBookingDetails((item)=> [...item, {
      id:item.length,
      checkin:_checkin,
      checkout:_checkout,
      days:_days


    }])

    console.log(bookingDetails);

  })




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
          <BookingPage  blog={hotels} />
        </Route>
        <Route path="/blog/:id">
          <Results blog={hotels} book={addBooking} booking={bookingDetails}/>
        </Route>
     

      </Switch>
    </Router>

  );
}

export default App;
