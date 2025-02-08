import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
const URL = import.meta.env.VITE_Node_Api_Url;


const UpdateRooms = () => {
    const { id } = useParams();
    // console.log(id)

    // const [fetchedRooms, setFetchedRooms] = useState({});
    const [fetchedRooms, setFetchedRooms] = useState({
        roomType: "",
        status: "",
        capacity: "",
        pricePerNight: " ",
    });

    const getAllRooms = async () => {
        try {
            const response = await axios.get(`${URL}/room/${id}`)
            setFetchedRooms(response.data.room)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllRooms()
    }, []);



    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFetchedRooms({
            ...fetchedRooms, [name]: value
        })
    }

    const handleUPdate = async (e) => {
        const { _id, __v, ...updatedRoomData } = fetchedRooms;
        updatedRoomData.roomType = updatedRoomData.roomType.toLowerCase();
        updatedRoomData.status = updatedRoomData.status.toLowerCase();
        try {
            const response = await axios.put(`${URL}/room/${id}`, updatedRoomData);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Update Rooms
            </h2>
            {/* General elements */}

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                {/* <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Type</span>
                    <input value={fetchedRooms.roomType}  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Single, Double, Premium" type='text' />
                </label> */}
                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Type</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" name='roomType' defaultValue=""
                        onChange={handleOnChange}
                    >
                        <option value="" disabled>{fetchedRooms.roomType}</option>
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
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" name='status' defaultValue=""
                        onChange={handleOnChange}
                    >
                        <option value="" disabled>{fetchedRooms.status}</option>
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Under Maintenance">Under Maintenance</option>
                        <option value="Cleaning">Cleaning</option>
                    </select>
                </label>
                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Capacity</span>
                    <input value={fetchedRooms.capacity} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Number Of Person" name='capacity' type="number" onChange={handleOnChange} />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Price</span>
                    <input value={fetchedRooms.pricePerNight} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="pricePerNight" placeholder="Price" type="number" onChange={handleOnChange} />
                </label>

                {/* <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Status</span>
                    <input value={fetchedRooms.status} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Available, Booked, Under Maintenance" type="text" />
                </label> */}

                <div className="my-6">
                    <button onClick={handleUPdate} className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        <NavLink to='/rooms' >Update Room</NavLink>

                    </button>
                </div>

            </div>

        </div>
    )
}

export default UpdateRooms