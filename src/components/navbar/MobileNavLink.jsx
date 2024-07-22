import { Link } from 'react-scroll'

const MobileNavLink = ({ setToggle, href, title }) => {
    return (
        <li className="list-none cursor-pointer mr-8">
            <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setToggle(false)}
                className="font-bold transition-all duration-300"
            >
                {title}
            </Link>
        </li>
    )
}

export default MobileNavLink
