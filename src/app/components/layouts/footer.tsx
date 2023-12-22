'use client'

import React from 'react'
import { Footer } from 'flowbite-react'

const CustomFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Footer container>
            <Footer.Copyright href="https://github.com/yusufadji" by="yusufadji" year={currentYear} />
        </Footer>
    )
}

export default CustomFooter