import { useParams } from "react-router-dom"
import React, {useState} from "react"
import '../css/results.css'
function Results(props){
    const {id}= useParams()

    console.log(id)

    const book=(()=>{
        alert('successfully booked') 
        
    })

    const [checkin, setCheckin]=useState('');
    const [checkout, setCheckout]=useState('');
    const [rooms, setRooms]=useState('');
    
    return(
        <div className="output">
               
           
            {/* {
                props.blog.filter((item => item.id == id)).map((res,index) => (
                    <div key={index}>
                        <p 
                        >Hotel details<br></br> {res.welcome}</p><br></br>
                        R{res.price}<br></br>
                        {res.pic}

                    </div>
                ))
            } */}
            {
                props.blog.filter((item => item.id == id)).map((res,index) =>(
                    <div key={index} className="output1">
                        <div className="results1">
                            <h1 id="h1wel">{res.welcome}</h1>
                        </div>
                        <div>
                                <input type="date" placeholder='mm/dd/yyyy' onChange={(e) => setCheckin(e.target.value)} />
                                <input type="date" placeholder='mm/dd/yyyy' onChange={(e) => setCheckout(e.target.value)} />
                                <input placeholder='Days' onChange={(e)=>setRooms(e.target.value)}/>
                                <br></br><br></br><br></br>
                            </div>
                        <div className="detail">
                           
                            <div> <img className='picture' src={res.pic}/></div>
                            <div> <p className="para">{res.name}</p></div>
                            {/* <div className="rate">
                               <img className="stars" src={res.rating}/></div> */}
                            <div className="map"> {res.map} </div>
                            <div className="location"> {res.location}</div>
                        </div>
                        <div> R{res.price} </div>
                        
                      
                        <button onClick={book}>Book Now</button>
                        
                    </div>
                ))
            }
            {/* {
                 props.blog.filteredData((item =>item.id)).map((res,index)=>(
                    <div key={index}>
                        {res.location}

                    </div>
                 )) 
            } */}

        </div>
    )
}
export default Results