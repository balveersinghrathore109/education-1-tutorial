import { motion } from 'framer-motion'

import hero from '../../assets/boxed-bg.jpg'
import { logos } from '../../Data'

const Home = () => {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    }
    const item = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <div className="section" id="home">
            <div className="md:flex items-center justify-center gap-1">
                <div className="">
                    <div className="font-bold text-xs text-Teal mb-4">
                        Your e-learning partner
                    </div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
                        This is <br />
                        the new way <br />
                        to learn online
                    </div>
                    <p className="text-sm leading-7 text-gray max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis rerum accusantium, doloribus iure totam odit!
                    </p>
                    <div className="mt-6">
                        <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                            Get Started
                        </button>
                        <button className="px-6 py-3 border border-solid border-gray rounded-lg text-sm">
                            Discover
                        </button>
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <img className="border border-solid" src={hero} alt="" />
                </div>
            </div>
            <div className="">
                <p className="text-center text-xl">
                    We collaborate with
                    <span className="text-Teal">
                        100+ leading universities and companies
                    </span>
                </p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className="flex items-center justify-center flex-wrap gap-8 p-2"
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            variants={item}
                            className="w-28"
                            key={index}
                        >
                            <img
                                className="w-full object-cover border border-solid"
                                src={logo}
                                alt=""
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Home
