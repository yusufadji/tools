import React from 'react'

const Container = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className='relative z-10 w-full -mt-16 mb-16 mx-auto container flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg'>
            <section className="relative w-full mx-auto container mt-10 mb-16 px-10 bg-white dark:bg-gray-900">
                {children}
            </section>
        </main>
    )
}

export default Container