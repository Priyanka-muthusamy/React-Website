import React, { useEffect } from 'react';
import './offers.scss';

import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

import img1 from '../../Assets/peru-house.jpeg';
import img2 from '../../Assets/mexico-house.jpeg';
import img3 from '../../Assets/cambodia-house.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Offers = [
    {
        id: 1,
        imgSrc: img1,
        stTdeitle: 'Machu Picchu',
        location: 'Peru',
        price: 'Rs.35,000'
    },

    {
        id: 2,
        imgSrc: img2,
        stTdeitle: 'Guanajuato',
        location: 'Mexico',
        price: 'Rs.50,000'
    },

    {
        id: 3,
        imgSrc: img3,
        stTdeitle: 'Angkor Wat',
        location: 'Cambodia',
        price: 'Rs.66,450'
    }
]

const Offer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural specteculars, come see the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">

                    {
                        Offers.map((offer) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                                    <div className="destImage">
                                        <img src={offer.imgSrc} alt={offer.stTdeitle} />

                                        <span className="discount">
                                            30% off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>
                                                {offer.price}
                                            </h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>2 beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wifi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon" />
                                            <small>450 Vine #310, {offer.location}</small>
                                        </div>

                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Offer;
