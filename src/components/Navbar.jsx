import { useEffect } from "react"
import logo from "../assets/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]); // Toggles whenever menuOpen changes

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center py-0">

                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-15 w-auto" />
                        <span className="text-white text-xl font-bold">ACupOfRamen</span>
                    </a>


                    {/*
                        Hamburger menu
                        Only shown on small screens via md:hidden
                    */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/*
                        Nav links
                        Only shown on medium screens or larger (hides elements on all sizes by default)
                    */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    )
}