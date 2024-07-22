import {
    Home,
    About,
    Courses,
    Teacher,
    Contact,
    Footer,
    Navbar,
} from './components/Index'

export default function App() {
    return (
        <div className="font-Poppins bg-Solitude">
            <Navbar />
            <Home />
            <About />
            <Courses />
            <Teacher />
            <Contact />
            <Footer />
        </div>
    )
}
