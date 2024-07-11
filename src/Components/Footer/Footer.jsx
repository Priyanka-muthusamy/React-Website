import React from 'react'
import './footer.scss';
import { GiCampfire } from 'react-icons/gi';
import { ImFacebook } from 'react-icons/im';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">

                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className='flex'><GiCampfire className='icon' />
                                Exotic</h1>
                        </a>
                    </div>

                    <div className="socials flex">
                        <ImFacebook className='icon' />
                        <BsTwitterX className='icon' />
                        <AiFillInstagram className='icon' />
                    </div>
                </div>
                
                <div className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">+91 7456392045</span>
                    <span className="email">priya12@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
