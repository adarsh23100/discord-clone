import { DownloadIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero() {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0">
        <div className="p-7 py-9 h-screen md:flex relative">
            <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
                <h1 className="text-5xl text-white font-bold">Imagine a place...</h1>
                <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
                    <button className="bg-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
                        <DownloadIcon className="w-6 mr-2" />
                        Download for Windows</button>
                    <button className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">Open Discord in your browser</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero