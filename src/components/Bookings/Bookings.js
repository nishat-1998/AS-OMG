import React from 'react';
import {useState,useEffect,useContext} from 'react';
import { UserContext } from '../../App';
const Booking = () => {
    const [booking,setBooking]= useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/booking?email='+loggedInUser.email,{
            method:'GET',
            headers:{'Content-Type':'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
            
        })
        .then(res => res.json())
        .then(data => setBooking(data));
            
    }, [])
    return (
        <div>
            <h2>You Have :{booking.length} Booking</h2>
            {
                booking.map(book=> <li key={book._id}> {book.name} From:{(new Date(book.checkIn).toDateString('dd/MM/yyyy'))} To:{(new Date(book.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Booking;