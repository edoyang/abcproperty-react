import "./home.scss"
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdowns';
import { useState } from "react";

const Home = (): JSX.Element => {
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    return (
    <div className="home" id="home">
        <div className="hero">
            <div className="left">
                <h1 className="pre-line">
                Modern living{'\n'}for everyone
                </h1>
                <p>We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona for more than 15 years.</p>
                <div className="container">
                    <div className="property-search">
                        <Dropdown 
                            options={['house', 'apartment', 'land', 'commercial']} 
                            defaultLabel="Select Property Type" 
                            isActive={isDropdownActive} 
                            onToggle={toggleDropdown}
                        />
                        <div className="search-input">
                            <img src="location.svg" alt="" />
                            <input type="text" placeholder="Search location"/>
                        </div>
                        <button className="btn-primary"><img src="mirror.svg"/>Search</button>
                    </div>
                </div>
            </div>
        
            <div className="right">
                <img src="hero.png" alt="hero" />
            </div>
        </div>


        <div className="top-offers" id="top">
            <div className="container">
                <div className="left">
                    <h1>Top offers</h1>
                    <p>Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</p>
                </div>
                <div className="right">
                    <Link className="btn-secondary" to="/listing"> Show all offer </Link>
                </div>
            </div>

            <Carousel />
        </div>


        <div className="about-us" id="about-us">
            <div className="left">
                <img src="about-us.png" alt="About us" />
            </div>
            <div className="right">
                <h1>About us</h1>
                <p className='pre-line'>
                We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase or rental of real estate. Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice.
                {'\n\n'}
                We have a connection to all banks on the Slovak market, so we can solve everything under one roof. By constantly innovating our business activities, we move forward and we are able to offer truly above-standard services that set us apart from the competition.
                </p>
            </div>
        </div>


        <div className="our-team" id="team">
            <div className="container">
                <div className="team-card">
                    <div className="image-container">
                        <img src="team1.avif" alt="team1" />
                    </div>
                    <div className="team-description">
                        <h3>Edoardo</h3>
                        <p>Fullstack Developer</p>
                    </div>
                </div>

                <div className="team-card">
                    <div className="image-container">
                        <img src="team2.avif" alt="team2" />
                    </div>
                    <div className="team-description">
                        <h3>Giulia</h3>
                        <p>Frontend Developer</p>
                    </div>
                </div>

                <div className="our-team-card">
                    <h1>Our Team</h1>
                    <p>Our team full of passionated engineer in their fields</p>
                </div>

                <div className="team-card">
                    <div className="image-container">
                        <img src="team3.avif" alt="team3" />
                    </div>
                    <div className="team-description">
                        <h3>Luca</h3>
                        <p>Backend Developer</p>
                    </div>
                </div>

                <div className="team-card">
                    <div className="image-container">
                        <img src="team4.avif" alt="team4" />
                    </div>
                    <div className="team-description">
                        <h3>Marco</h3>
                        <p>UI/UX Designer</p>
                    </div>
                </div>

                <div className="team-card">
                    <div className="image-container">
                        <img src="team5.avif" alt="team5" />
                    </div>
                    <div className="team-description">
                        <h3>Anna</h3>
                        <p>Project Manager</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="references" id="references">
            <h1>References</h1>
            <p>Let's hear what they said about us</p>

            <div className="testimonial-container">
                <div className="testimonial-card">
                    <div className="text">
                        <p className='merriweather'>“</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</p>
                    </div>
                    <div className="user">
                        <h1>Emerson Aminoff</h1>
                        <p>3 Bedroom apartment in Madrid</p>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="text">
                        <p className='merriweather'>“</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</p>
                    </div>
                    <div className="user">
                        <h1>Jocelyn Stanton</h1>
                        <p>2 bedroom apartmentt in Barcelona</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home