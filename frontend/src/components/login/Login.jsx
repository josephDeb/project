import logo from './../../assets/logo.png'
import search from './../../assets/search.png'
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col justify-center max-w-screen-2xl mx-auto min-h-screen overflow-hidden manjari">


            <div className="w-[89%] p-6 m-auto rounded-md shadow-xl lg:max-w-sm bg-slate-300">
                <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase ">
                    Sign in
                </h1>

                <div className='xl:w-[130px] h-[130px] rounded-full mx-auto mt-3 flex justify-center items-center'>
                    <img src={logo} className='objectFit: ' />
                </div>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            placeholder='example@gmail.com'
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            minLength={6}
                            placeholder='Your password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a

                        className="text-[15px] text-gray-700 hover:underline"
                    >
                        Forget Password?
                    </a>



                    <div className="mt-2">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-500">
                            <p>Submit</p>
                        </button>
                    </div>

                    <div className="mt-2">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-500 flex justify-center items-center gap-4">
                            <img src={search} className='w-5' />    <p>Google Account</p>
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

export default Login