import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
const URL = import.meta.env.VITE_Node_Api_Url;

const AddAdmin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        role: "admin",
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setAdmin({
                ...admin,
                [name]: value
            });
    }

    const addAdmin = async () => {
        try {
            const response = await axios.post(`${URL}/user/`, admin);
            console.log(response.data.msg)
            toast.success(response.data.msg);
            navigate('/admin-dashboard');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Add Admin
            </h2>
            <ToastContainer position='top-right' autoClose={2000} />
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Name</span>
                    <input name='name' onChange={handleChange} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="Jane Doe" />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                    <input name='email' onChange={handleChange} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="example@email.com" type="email" />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Password</span>
                    <input name='password' onChange={handleChange} className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="*********" type="password" />
                </label>

                <div className="my-6">
                    <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" onClick={addAdmin}>
                        {/* <NavLink to='/' >Add Admin</NavLink> */}
                        Add Admin
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AddAdmin