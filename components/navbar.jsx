'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react';
export default function CustomNavbar() {
    const pathname = usePathname();
    const {data:session} =useSession()
    return (
        <div>


            <nav className="bg-white border-gray-200 dar">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Next-Auth</span>
                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">

                        </button>



                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dar dark:border-gray-700">
                            <li>
                                <Link href="/" className={`${pathname === '/' ? 'text-blue-700' : ''}block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`} aria-current="page">Home</Link>
                            </li>
                            {session?.user && <> 
                            <li>
                                <Link href="/client" className={`${pathname === '/client' ? 'text-blue-700' : ''} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} arial-current="page">Client </Link>
                            </li>
                            
                            <li>
                                <Link href="/server" className={`${pathname === '/server' ? 'text-blue-700' : ''} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Server</Link>
                            </li> </> }
                            <li>
                                <Link href="/register" className={`${pathname === '/register' ? 'text-blue-700' : ''} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Register</Link>
                            </li>
                            <li>
                                <Link href="/login" className={`${pathname === '/login' ? 'text-blue-700' : ''} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Login</Link>
                            </li>
                            {session?.user &&  
                            <li>
                                <Link href="/api/auth/signout" className={`${pathname === '/logout' ? 'text-blue-700' : ''} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Logout</Link>
                            </li> }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
