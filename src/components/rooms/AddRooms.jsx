import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
const URL = import.meta.env.VITE_Node_Api_Url;


const AddRooms = () => {

    const [roomType, setRoomType] = useState("");
    const [roomStatus, setRoomStatus] = useState("");
    const [roomCapacity, setRoomCapacity] = useState("");
    const [roomPrice, setRoomPrice] = useState();
    // toast.configure();
    // toast.configure();

    const handleAddRoom = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${URL}/room/`, {
                // const response = await axios.post("http://localhost:8000/room/",{
                roomType,
                status: roomStatus.toLocaleLowerCase(),
                pricePerNight: roomPrice,
                capacity: roomCapacity
            });

            // alert(response.data)
            toast.success(response.data.msg);
            console.log(response)

            console.log(response)
        } catch (error) {
            console.log(error.response.data.errors[0])
            // alert(error.response.data.errors[0])
            toast.error(error.response.data.errors[0])

        }

    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Add Rooms
            </h2>
            <ToastContainer position='top-right' autoClose={2000} />
            {/* General elements */}

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                {/* <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Type</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Single, Double, Premium" type='text' onChange={(e)=>setRoomType(e.target.value)} />
                </label> */}
                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Type</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" defaultValue=""
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <option value="" disabled>Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Premium">Premium</option>
                    </select>
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Status</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" defaultValue=""
                        onChange={(e) => setRoomStatus(e.target.value)}
                    >
                        <option value="" disabled>Select Room Status</option>
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Under Maintenance">Under Maintenance</option>
                        <option value="Cleaning">Cleaning</option>
                    </select>
                </label>


                {/* <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Status</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Available, Booked, Under Maintenance" type="text" onChange={(e) => setRoomStatus(e.target.value)} />
                </label> */}

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Capacity</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Number Of Person" type="number" onChange={(e) => setRoomCapacity(e.target.value)} />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Price</span>
                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Price" type="number" onChange={(e) => setRoomPrice(e.target.value)} />
                </label>

                <div className="my-6">
                    <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" onClick={handleAddRoom}>
                        {/* <NavLink to='/' >Add Room</NavLink> */}
                        add Room
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AddRooms