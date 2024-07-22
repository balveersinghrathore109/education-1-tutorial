import { motion } from 'framer-motion'

const Category = ({ icon, category }) => {
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
        <motion.div
            variants={item}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-4 bg-white p-8 rounded-md"
        >
            <div className="text-4xl text-Teal">{icon}</div>
            <div className="">{category}</div>
            <a className="text-sm text-gray" href="#">
                View More
            </a>
        </motion.div>
    )
}

export default Category
