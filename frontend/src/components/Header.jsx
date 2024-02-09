import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    function toggleMenuFunc() {
        setToggleMenu(!toggleMenu)

    }
    return (




        <nav class="bg-white border-gray-200 dark:bg-slate-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link to="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex"> <img src={logo} alt="" /> <span className='mt-3'>ProStore</span></span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " aria-controls="navbar-default" aria-expanded="false" onClick={toggleMenuFunc}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class={`${toggleMenu ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" class=" py-2 px-3 rounded  text-white flex" aria-current="page"> <FaShoppingCart className='m-1' />Cart </a>
                        </li>
                        <li>
                            <a href="#" class=" py-2 px-3 rounded  text-white flex" aria-current="page"> <FaUser className='m-1' />Sign In</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>



    )
}

export default Header