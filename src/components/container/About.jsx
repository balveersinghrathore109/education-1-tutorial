import about from '../../assets/boxed-bg.jpg'

const About = () => {
    return (
        <div className="section" id="about">
            <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                    <img className="p-4" src={about} alt="" />
                </div>
                <div className="">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        We provide the <br />
                        best <span className="text-Teal">online courses</span>
                    </div>
                    <p className="text-sm text-gray leading-7">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt itaque dignissimos harum maxime deleniti,
                        sit aut nemo eveniet. Autem est, ab corrupti esse quas
                        consequatur aperiam quibusdam obcaecati dolor facilis!
                    </p>
                    <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
                        Know more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
