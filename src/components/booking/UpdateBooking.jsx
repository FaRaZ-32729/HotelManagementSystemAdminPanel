import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
const URL = import.meta.env.VITE_Node_Api_Url;

const UpdateBooking = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState({
        roomId : "",
        numberOfGuests : "",
        totalAmount : "" ,
        checkInDate :  "", 
        checkOutDate :  "", 
    });

    const getBookings = async () => {
        try {
            const response = await axios.get(`${URL}/booking/${id}`);
            setBooking(response.data.booking);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBookings();
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setBooking({
            ...booking, [name]: value
        });
    }
    // const upDate = async () =>{
    //     const response = await axios.put(`${URL}/booking/${id}`, booking);
    //     console.log(response)
    // }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Update Bookings
            </h2>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Room Type</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" name='roomType' defaultValue=""
                   onChange={handleOnChange}
                    >
                        <option value="" disabled>{booking.roomId?.roomType || "loading..."}</option>
                        <option value="available">Single</option>
                        <option value="Double">Double</option>
                        <option value="Premium">Premium</option>
                    </select>
                </label>

                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Status</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" name='status' defaultValue=""
                   onChange={handleOnChange}
                    >
                        <option value="" disabled>{booking.roomId?.status || "loading..."}</option>
                        <option value="confirmed">confirmed</option>
                        <option value="canceled">canceled</option>
                        <option value="checked-in">checked-in</option>
                        <option value="checked-out">checked-out</option>
                    </select>
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Capacity</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Price"name='numberOfGuests' value={booking.numberOfGuests} onChange={handleOnChange} disabled type="number" />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Price</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name='totalAmount' value={booking.totalAmount} disabled type="number" onChange={handleOnChange} />
                </label>


                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Check In</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name='CheckInDate' disabled onChange={handleOnChange} value={new Date(booking.checkInDate).toLocaleDateString()} type="text" />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Check Out</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name='CheckOutDate' onChange={handleOnChange} disabled value={new Date(booking.checkOutDate).toLocaleDateString()} type="text" />
                </label>

                <div className="my-6">
                    <button  className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        {/* <NavLink to='/' >Update Booking</NavLink> */}
                        update
                    </button>
                </div>

            </div>

        </div>
    )
}

export default UpdateBooking