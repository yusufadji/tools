'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar, DarkThemeToggle, CustomFlowbiteTheme } from 'flowbite-react'
import { NAVBAR_DATA, NAVBAR_TITLE } from '../../constants/constants'

const customNavbar: CustomFlowbiteTheme['navbar'] = {
    root: {
        base: "fixed t-0 l-0 w-full z-10 bg-[rgba(255,255,255,0.7)] backdrop-blur-sm px-2 py-2.5 dark:border-gray-700 dark:bg-[rgba(31,41,55,0.7)] sm:px-4",
        inner: {
            base: "mx-auto flex flex-wrap items-center justify-between"
        }
    },
    collapse: {
        "base": "w-full md:block md:w-auto",
        "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        "hidden": {
            "on": "hidden",
            "off": ""
        }
    },
    link: {
        active: {
            on: "bg-cyan-700 text-primary dark:text-white md:bg-transparent md:text-cyan-700",
            off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
        base: "block py-2 pr-4 pl-3 md:p-0 hover:text-primary transition last:mb-4 last:md:mb-0"
    }
}

const CustomNavbar = () => {
    const [isActive, setActive] = useState(0)
    return (
        <Navbar fluid theme={customNavbar}>
            <Navbar.Brand className='md:block hidden text-gray-800 dark:text-gray-50' as={Link} href="/">
                <h1 className="self-center whitespace-nowrap text-xl text-primary font-bold">{NAVBAR_TITLE}</h1>
            </Navbar.Brand>
            <div className='w-full md:w-auto flex md:flex-row flex-col justify-end items-center'>
                <Navbar.Collapse>
                    {NAVBAR_DATA.map((nav, index) => (
                        <Navbar.Link active={isActive == index ? true : false} onClick={(e) => setActive(index)} className='capitalize' key={index} as={Link} href={nav.path}>{nav.title}</Navbar.Link>
                    ))}
                </Navbar.Collapse>
                <div className="flex md:flex-col flex-row items-center justify-between w-full md:w-auto mx-0 md:mx-4">
                    <Navbar.Toggle />
                    <DarkThemeToggle />
                </div>
            </div>
        </Navbar>
    )
}

export default CustomNavbar