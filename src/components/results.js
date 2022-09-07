import { useParams } from "react-router-dom"
import React, {useState, useEffect} from "react"
import '../css/results.css'
import star from '../mediaContent/star.jfif'
import icon from '../mediaContent/locationicon.png'
import {auth, db} from '../config/firebase';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'

function Results(props){
    const {id}= useParams()

    const [checkin, setCheckin]=useState('');
    const [checkout, setCheckout]=useState('');
    const [days, setDays]=useState('');
    // const [total, setTotal]=useState(props.blog);
    const [hotels, setHotels] = useState([])
    const [user, setUser] = useState({})

    //calculating total amount to be paid
      let  hotelPrice = 0;
   
       props.blog.filter((item => item.id == id)).map((res, index) => {
        console.log('hotel info,',res.price )
         hotelPrice = res.price
   
       })
       let totalAmount = hotelPrice * days;
       console.log('hotel price from state', hotelPrice)
       console.log("totalAmount",totalAmount)


    console.log(id)
    console.log('testing hotels',props.blog)

    const book=(()=>{
        const  collectionReF = collection(db, "bookingDetails");
        const bookingDetails={
            
            checkin:checkin,
            checkout:checkout,
            days:days,
            Totalamount:totalAmount,
            userName:user.userName,
            userEmail:user.userEmail,
            userContact:user.userContact,

        };                              

        addDoc(collectionReF, bookingDetails).then(()=>{
            alert("added successfully")
        }).catch((err)=>{
            console.log(err);
        })


        console.log(checkin);
        console.log(checkout);
        console.log(days);
        

        props.book (checkin, checkout, days, totalAmount,user.userName,user.userEmail,user.userContact ) ;


        alert('successfully booked') 
        
    })

    
  
    //function to get current user details
    const getUser = async() =>{
        const userID = auth.currentUser.uid;
        console.log('user id = ', userID)
        
        const userRef = collection(db, 'users')
        const q = query(userRef, where('userId', '==', userID))
        const data = await getDocs(q)
        console.log(data)
        data.forEach((results)=>{
            console.log(results.data())
            setUser(results.data())

        })
    
    }
          //get booking history
        // const [histories, setHistories] = useState([]);
        // const hotelBooking = collection(db, 'bookingDetails')

       
   
    
    useEffect(()=>{
        getUser()
     
   
   
    },[])
   

   
    console.log("my hotels",hotels)


    
    return(
        <div className="output">
            <div>
                {
                    props.blog.filter((item => item.id == id)).map((res, index) => (
                        <div key={index} className="output1">
                            <div className="results1">
                                <h1 id="h1wel">{res.description}</h1>
                            </div>
                            <div>
                                <input type="date" placeholder='mm/dd/yyyy' onChange={(e) => setCheckin(e.target.value)} />
                                <input type="date" placeholder='mm/dd/yyyy' onChange={(e) => setCheckout(e.target.value)} />
                                <input placeholder='Number of Days' onChange={(e) => setDays(e.target.value)} />
                                <br></br><br></br><br></br>
                            </div>
                            <div className="detail">

                                <div> <img className='picture' src={res.picture} /></div>
                                <div> <p className="para">{res.name}</p></div>

                                <div className="map"> <img src={icon} style={{ height: '66px', width: '70px' }} /></div>
                                <div className="location"> {res.location}</div>
                            </div>
                            <div className="price"><p style={{ fontWeight: 'bold' }}>R{res.price}</p></div>


                            <button onClick={book} style={{ borderRadius: '10px' }}><p style={{ fontWeight: 'bold' }}>Book Now</p></button>

                        </div>
                    ))
                }


            </div>
     
            <div className="history">
                {
                    props.booking.map((res, index)=>(
                        <div key={index}>
                            <div className="detailsB">
                                <h1 style={{marginLeft:'30%', marginTop:'6%'}}>Booking details</h1>
                                <h3>User Name: {user.userName}</h3>
                                <h3>CheckIn date: {res.checkin}</h3>
                                <h3>CheckOut date: {res.checkout}</h3>
                                <h3>Number of days: {res.days}</h3>
                                <h3 style={{marginBottom:'10%'}}>Total Price: R{totalAmount}</h3>
                            </div>

                        </div>
                    ))
                }
                
   

            </div>
               
   

        </div>
    )
}
export default Results