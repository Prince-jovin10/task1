import React, { useState } from 'react';
import styles from './HomePage.module.css';
import Flights from '../Assets/HomePage/Flights.png';



const HomePage = () => {
    // State for form inputs
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState('2 adults · 0 children · 1 room');
    const [isLookingForFlights, setIsLookingForFlights] = useState(false);

    const handleSearch = () => {
        // Handle search logic
        console.log("Search triggered");
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.heading}>Find your next stay</h1>
                <p className={styles.subheading}>Search deals on hotels, homes, and much more...</p>
            </header>

            <div className={styles.search__container}>
                <input 
                    type="text" 
                    className={styles.search__input} 
                    placeholder="Where are you going?" 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)} 
                />

                <input 
                    type="date" 
                    className={styles.search__input} 
                    placeholder="Check-in Date" 
                    value={checkInDate} 
                    onChange={(e) => setCheckInDate(e.target.value)} 
                />

                <input 
                    type="date" 
                    className={styles.search__input} 
                    placeholder="Check-out Date" 
                    value={checkOutDate} 
                    onChange={(e) => setCheckOutDate(e.target.value)} 
                />

                <input 
                    type="text" 
                    className={styles.search__input} 
                    placeholder="2 adults · 0 children · 1 room" 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)} 
                />

                <button className={styles.search__button} onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className={styles.flights__checkbox}>
                <input 
                    type="checkbox" 
                    id="flights" 
                    checked={isLookingForFlights} 
                    onChange={() => setIsLookingForFlights(!isLookingForFlights)} 
                />
                <label htmlFor="flights">I'm looking for flights</label>
            </div>

            <section className={styles.offers__section}>
                <h2 className={styles.offers__heading}>Offers</h2>
                <p className={styles.offers__subheading}>Promotions, deals, and special offers for you</p>

                <div className={styles.offers__cards}>
                    <div className={styles.offer__card}>
                        <h3>Fly away to your dream vacation</h3>
                        <img src ={Flights}/>
                        <p>Get inspired – compare and book flights with flexibility</p>
                        <button className={styles.offer__button}>Search for flights</button>
                    </div>
                    <div className={styles.offer__card}>
                        <h3>Go for a good time, not a long time</h3>
                        <img src ={Flights}/>
                        <p>
                            Finish your year with a mini break. Save 15% or more when 
                            you book and stay by January 7, 2025.
                        </p>
                        <button className={styles.offer__button}>Find Late Escape Deals</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
