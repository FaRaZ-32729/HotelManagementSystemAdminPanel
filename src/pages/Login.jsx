import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src="../assets/img/login-office.jpeg" alt="Office" />
                            <img aria-hidden="true" className="hidden object-cover w-full h-full dark:block" src="../assets/img/login-office-dark.jpeg" alt="Office" />
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                    Login
                                </h1>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="example@email.com" />
                                </label>
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Password</span>
                                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="***************" type="password" />
                                </label>
                                {/* You should use a button here, as the anchor is only used for the example  */}
                                <NavLink className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" to='/'>
                                    Log in
                                </NavLink>
                                <hr className="my-8" />


                                <p className="mt-1">
                                    <span className='text-sm me-2'>
                                        Don't have an account?
                                    </span>
                                    <NavLink className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/register">
                                        Register
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login