import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URL = import.meta.env.VITE_Node_Api_Url;

const UpdateReceptionist = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [receptionist, setReceptionist] = useState({
        name: "",
        email: "",
        role: "staff",
        subRole: ""

    });

    const getHouseKeeper = async () => {
        const response = await axios.get(`${URL}/user/${id}`);
        console.log(response.data)
        setReceptionist(response.data);
    }
    useEffect(() => {
        getHouseKeeper();
    }, [URL]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setReceptionist({
            ...receptionist, [name]: value
        });
    }

    const handleReceptionistUpdate = async () => {
        const {_id, __v, ...receptionistData} = receptionist;   
        try {
            const response = await axios.put(`${URL}/user/${id}`, receptionistData);
            console.log(response)
            navigate("/receptionist-dashboard")
        } catch (error) {
            toast.error(error.response)
        }

    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Update Receptionist
            </h2>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Name</span>
                    <input name='name' className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" value={receptionist.name}  onChange={handleOnChange} />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                    <input name='email' className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" value={receptionist.email} onChange={handleOnChange} type="email" />
                </label>

                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400"> Role</span>
                    <input name='role' className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" value={receptionist.role} type="text" />
                </label>
                <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">Sub Role</span>
                    <select
                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 
                   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                   dark:text-gray-300 dark:focus:shadow-outline-gray form-select" name='subRole' defaultValue=""
                        onChange={handleOnChange}
                    >
                        <option value="" disabled>{receptionist.subRole}</option>
                        <option value="manager">Manager</option>
                        <option value="housekeeping">HouseKeeper</option>
                    </select>
                    </label>

                <div className="my-6">
                    <button onClick={handleReceptionistUpdate} className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Update HouseKeeper
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateReceptionist