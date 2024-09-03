import React from 'react'

export const Card = ({ logo, url, platform, emoji }) => {
    return (


        <div className="w-full max-w-sm bg-white my-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between py-2 px-8">
                <div className="flex flex-col items-center">
                    <img className="w-16 h-16 mb-1 rounded-full shadow-lg" src={logo} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Adarsh Jha</h5>
                </div>
                <div className="flex mt-2 md:mt-2">
                    <a href={url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{platform}</a>
                    <a href="#" className="py-2 hidden sm:block px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{emoji}</a>
                </div>
            </div>
        </div>

    )
}
