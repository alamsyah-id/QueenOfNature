import React from "react"
import shampoo from "../assets/images/2shampoo.png"
import BackgroundGradient from "../components/BackgroundGradient"
const HeroSection = (props) => {
    return (
        <div className='flex items-center justify-center py-10'>
            <section className='w-full md:flex lg:flex lg:items-center mt-24 px-10 lg:px-32 lg:mt-16'>
                {/* MAIN SHAMPOO PICTURE START */}
                <div className='flex justify-evenly lg:w-[35%]'>
                    <img
                        src={shampoo}
                        alt=''
                        className='bg-center lg:relative bg-cover lg:w-[80%] drop-shadow-2xl'
                    />
                </div>
                {/* MAIN SHAMPOO PICTURE END */}

                {/* MAIN TEXT START */}
                <div className='w-full lg:w-[65%] my-9 flex justify-end items-center'>
                    <div className='text-center lg:text-end md:text-end'>
                        <span className='text-sky-600 font-semibold text-4xl md:text-4xl lg:text-7xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                            Effective Natural Product
                        </span>
                        <p className='text-lg lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-5'>
                            Veniam ut sint magna dolore tempor eiusmod
                            reprehenderit. Veniam ut sint <br /> magna dolore
                            tempor eiusmod reprehenderit.
                        </p>
                        <a
                            href='#_'
                            class='mt-10 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'
                        >
                            <span class='group w-full h-full group-hover:drop-shadow-md hover:shadow-xl bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 absolute'></span>
                            <span class='relative px-6 py-3  rounded-full transition-all ease-out bg-slate-200 dark:bg-gray-900 group-hover:bg-opacity-0 duration-700'>
                                <span class='relative group-hover:text-black text-gray-700 dark:text-white'>
                                    View Product
                                </span>
                            </span>
                        </a>
                        {/* MAIN TEXT END */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
