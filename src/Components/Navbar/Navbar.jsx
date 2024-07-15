import React, { useState, useEffect } from 'react'
import './navbar.scss';
import { GiCampfire } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    //code to toggle/show navBar
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //code to remove navBar
    const removeNav = () => {
        setActive('navBar')
    }

    const [transparent, setTransparent] = useState('header');

    const addBg = () => {
        if(window.scrollY >= 10) {
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <section className='navBarSection'>
            <div className={transparent}>

                <div data-aos="fade-right" data-aos-duration="2000" className='logoDiv'>
                    <a href="#" className='logo'>
                        <h1 className='flex'><GiCampfire className='icon' />
                        Exotic
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li data-aos="fade-left" data-aos-duration="2000" className='navItem'>
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li data-aos="fade-left" data-aos-duration="2500" className='navItem'>
                            <a href="#" className="navLink">Products</a>
                        </li>

                        <li data-aos="fade-left" data-aos-duration="3000" className='navItem'>
                            <a href="#" className="navLink">Resources</a>
                        </li>

                        <li data-aos="fade-left" data-aos-duration="3500" className='navItem'>
                            <a href="#" className="navLink">Contacts</a>
                        </li>

                        <li data-aos="fade-left" data-aos-duration="4000" className='navItem'>
                            <a href="#" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <button data-aos="fade-left" data-aos-duration="4500" className='btn loginBtn'>
                                <a href='#'>Login</a>
                            </button>
                            <button data-aos="fade-left" data-aos-duration="5000" className='btn'>
                                <a href='#'>Sign Up</a>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon' />
                </div>
            </div>
        </section>
    );
}

export default Navbar;
