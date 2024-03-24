import { Link } from "react-router-dom";
import './style.scss';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const location = useLocation();

    const toggleIsActive = (): void => {
        setIsActive(!isActive);
    }

    const smoothScrollTo = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) smoothScrollTo(hash);
    }, [location]);

    return (
        <header>
            <div className="logo">
                <Link to="/"> <img src="logo.svg" alt="Logo" /> </Link>
            </div>
            <div className={`menu ${isActive ? "active" : ""}`}>
                <Link to="/#home">Home</Link>
                <Link to="/#top">Top offers</Link>
                <Link to="/listing">Search in offer</Link>
                <Link to="/#references">References</Link>
                <Link to="/#about-us">About us</Link>
                <Link to="/#team">Our team</Link>
                <Link to="/contact" className="btn-primary">Contact us</Link>
            </div>
            <Link to="/contact" className="btn-primary">Contact us</Link>
            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleIsActive}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
