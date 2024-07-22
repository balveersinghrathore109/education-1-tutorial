import { motion } from 'framer-motion'

import Category from './Category'
import Course from './Course'

import { categories, courses } from '../../../Data'

const Courses = () => {
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
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="section" id="courses">
            <div className="flex flex-col items-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Our Top <span className="text-Teal">Categories</span>
                </div>
                <p className="text-sm text-gray leading-7 max-w-[700px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit adipisci, voluptate dicta porro nemo minima aut nulla
                    aperiam necessitatibus dolores alias consectetur impedit
                    veniam neque nesciunt tempora optio! Sit, mollitia.
                </p>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
            >
                {categories.map((category) => (
                    <Category key={category.id} {...category} />
                ))}
            </motion.div>
            <div className="text-xl font-bold mt-32 text-center">
                Most Popular Courses
            </div>
            <div className="mt-12 overflow-x-hidden w-full relative">
                <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
                    {courses.map((course) => (
                        <Course key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses
