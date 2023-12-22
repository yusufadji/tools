import React from 'react'

const Container = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className='w-full mx-auto container flex flex-col justify-center items-center bg-white dark:bg-gray-900'>
            <section className="w-full mx-auto min-h-screen container my-24 px-10 relative bg-white dark:bg-gray-900">
                {children}
            </section>
        </main>
    )
}

export default Container