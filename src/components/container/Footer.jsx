import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 'auto' }}
            transition={{ duration: 1 }}
            className="bg-Teal p-10"
        >
            <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
                <div className="">
                    <div className="font-bold mb-6">Get Started</div>
                    <p className="text-sm leading-7">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eaque, eum optio pariatur reiciendis nemo
                        mollitia!
                    </p>
                </div>
                <div className="">
                    <div className="font-bold mb-6">Services</div>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-sm hover:underline">
                            Web Design
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Web Development
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Science
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Digital Marketing
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="font-bold mb-6">Company</div>
                    <div className="flex flex-col gap-4">
                        <a className="text-sm hover:underline" href="#">
                            Privacy Policy
                        </a>
                        <a className="text-sm hover:underline" href="#">
                            Sitemap
                        </a>
                        <a className="text-sm hover:underline" href="#">
                            Careers
                        </a>
                        <a className="text-sm hover:underline" href="#">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="font-bold mb-6">Follow us</div>
                    <div className="text-sm mb-4">
                        skillexlearning@gmail.com
                    </div>
                    <div className="text-sm">+91456789123</div>
                    <div className="flex gap-4 mt-4">
                        <a className="hover:scale-110 text-xl" href="#">
                            <BsFacebook />
                        </a>
                        <a className="hover:scale-110 text-xl" href="#">
                            <BsInstagram />
                        </a>
                        <a className="hover:scale-110 text-xl" href="#">
                            <BsTwitter />
                        </a>
                        <a className="hover:scale-110 text-xl" href="#">
                            <BsPinterest />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer
