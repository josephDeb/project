import React from 'react'
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <div className="relative flex flex-col justify-center max-w-screen-2xl mx-auto min-h-screen overflow-hidden manjari">


            <div className="w-[89%] p-6 m-auto rounded-md shadow-xl lg:max-w-sm bg-slate-300">
                <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase ">
                    Find Account
                </h1>

                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email or Phone number
                        </label>
                        <input
                            placeholder='example@gmail.com or 09#########'
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>


                    <div className="mt-2">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-500">
                            <p>Find Account</p>
                        </button>
                    </div>


                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Dont have an account?{" "}
                    <a
                        onClick={() => navigate("/sign-up")}
                        className="font-medium text-gray-700 hover:underline"
                    >

                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword