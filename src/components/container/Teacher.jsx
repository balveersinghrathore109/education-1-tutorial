import Accordion from './Accordion'

import teacher1 from '../../assets/boxed-bg.jpg'
import teacher2 from '../../assets/boxed-bg.jpg'
import { accordions } from '../../Data'

const Teacher = () => {
    return (
        <div className="section" id="teacher">
            <div className="grid sm:grid-cols-2 place-items-center gap-8">
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        Become <span className="text-Teal">An Instructor</span>{' '}
                        <br />
                        of Our Platform
                    </div>
                    <p className="mb-4 text-sm leading-7 text-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat maxime cumque, eos quisquam excepturi accusamus
                        delectus, aspernatur accusantium ipsam aut ipsa
                        voluptate beatae repellendus saepe. Natus aliquam quod
                        perspiciatis officiis.
                    </p>
                    <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold">
                        Start Teaching
                    </button>
                </div>
                <div className="p-4 md:w-3/4 sm:row-start-1">
                    <img src={teacher1} alt="" />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 place-items-center gap-8">
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        Become <span className="text-Teal">An Instructor</span>{' '}
                        <br />
                        of Our Platform
                    </div>
                    <p className="mb-4 text-sm leading-7 text-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat maxime cumque, eos quisquam excepturi accusamus
                        delectus, aspernatur accusantium ipsam aut ipsa
                        voluptate beatae repellendus saepe. Natus aliquam quod
                        perspiciatis officiis.
                    </p>
                    <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold">
                        Get Started
                    </button>
                </div>
                <div className="p-4 md:w-3/4">
                    <img src={teacher2} alt="" />
                </div>
            </div>

            <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
                Frequently <span className="text-Teal">Asked Questions</span>
            </div>
            <div className="mt-12 max-w-[700px] mx-auto">
                {accordions.map((accordion) => (
                    <Accordion key={accordion.id} {...accordion} />
                ))}
            </div>
        </div>
    )
}

export default Teacher
