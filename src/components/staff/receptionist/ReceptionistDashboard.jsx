import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const URL = import.meta.env.VITE_Node_Api_Url;


const ReceptionistDashboard = () => {
  const [receptionist, setReceptionist] = useState([]);

  const getReceptionist = async () => {
    const response = await axios.get(`${URL}/user`);
    const guestUsers = response.data.filter((user) => user.subRole === "receptionist")
    setReceptionist(guestUsers);
  }
  useEffect(() => {
    getReceptionist();
  }, [URL])



  return (
    <div className="container grid px-6 mx-auto">

      <div className='flex justify-between'>
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Receptionist
        </h2>

      </div>

      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {
                receptionist.map((data, index) => (
                  <tr className="text-gray-700 dark:text-gray-400" key={index}>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold">{data.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {data.email}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {data.subRole}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <NavLink to={`/update-receptionist/${data._id}`} >
                          <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                              </path>
                            </svg>
                          </button>
                        </NavLink>

                        <NavLink to='/delete-guest' >
                          <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReceptionistDashboard