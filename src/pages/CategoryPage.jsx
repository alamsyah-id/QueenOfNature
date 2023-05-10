import React from "react"
import Navbar from "../components/Navbar"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"

const CategoryPage = () => {
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient />
            <Navbar />
            <div className='flex my-10 justify-center items-center w-screen h-screen'>
                <div className='relative'>
                    <span className='absolute text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-xl'>
                        Category Page
                    </span>
                    <span className='relative text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                        Category Page
                    </span>
                </div>
            </div>
            <DarkMode />
            <Footer />
        </div>
    )
}

export default CategoryPage
