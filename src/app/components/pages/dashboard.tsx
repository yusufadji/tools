import { Card, CustomFlowbiteTheme } from 'flowbite-react'
import React from 'react'
import { DASHBOARD_CONTENTS } from '../../constants/constants'
import Container from '../layouts/container'

const DashboardCards: CustomFlowbiteTheme['card'] = {
    root: {
        "base": "flex w-full rounded-lg mx-auto border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 max-w-sm",
        "children": "flex items-start justify-start h-full flex-col gap-4 p-6",
        "horizontal": {
            "off": "flex-col",
            "on": "flex-col md:max-w-xl md:flex-row"
        },
        "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    img: {
        "base": "",
        "horizontal": {
            "off": "rounded-t-lg",
            "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        }
    }
}

const displayContents = () => {
    return (DASHBOARD_CONTENTS.map((content, index) => (
        <Card key={index} href={content.path} theme={DashboardCards}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {content.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {content.subtitle}
            </p>
        </Card>
    )))
}

const Dashboard = () => {
    return (
        <Container>
            <h2>Testing</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto my-6'>
                {displayContents()}
            </div>
        </Container>
    )
}

export default Dashboard