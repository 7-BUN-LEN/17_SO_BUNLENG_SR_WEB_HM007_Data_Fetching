import React from 'react'
import image from '../../public/images/logo.png'
import Link from 'next/link';
import Image from 'next/image'
const NavbarComponent = () => {
  return (
        <div>
            <div class="absolute z-50 h-screen w-full">
                <nav class="aborder-gray-200">        
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-30">
                        <a href="#" class="flex items-center space-x-56 rtl:space-x-reverse">
                            <Image src={image}></Image>
                        </a>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 text-lg">
                                <li>
                                    <Link className=" block py-3 px-3 text-white font-bold  rounded md:bg-transparent md:p-0 dark:text-white" href="/">{" "} Home {" "}</Link>
                                </li>
                                <li>
                                    <Link className= "block py-3 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="/populars">
                                        {" "}
                                        Popular
                                        {" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link className= "block py-3 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="/romance">
                                        {" "}
                                        Romance 
                                        {" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link className= "block py-3 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="/anime">
                                        {" "}
                                        Anime
                                        {" "}
                                    </Link>
                                </li>
                                <li>
                                    <input type="text" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder='Search Anything..........'></input>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>  
        </div>  
    );
}

export default NavbarComponent