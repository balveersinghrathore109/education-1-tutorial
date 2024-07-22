import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ title }) => {
    const [activeIndex, setActiveIndex] = useState(false)

    return (
        <div className="pb-8">
            <div
                className="flex items-center justify-between"
                onClick={() => setActiveIndex((prev) => !prev)}
            >
                <div className="sm:text-xl text-base font-bold">{title}</div>
                <BsChevronDown
                    className={`${activeIndex ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300`}
                />
            </div>
            <AnimatePresence>
                {activeIndex && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                        className="pt-4"
                    >
                        <p className="text-sm leading-7 text-gray">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Est, deserunt perspiciatis esse vitae velit
                            sint minima magnam nihil ipsum dicta corrupti
                            suscipit reprehenderit officiis ea necessitatibus
                            rerum! Vero, cumque sapiente!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion
