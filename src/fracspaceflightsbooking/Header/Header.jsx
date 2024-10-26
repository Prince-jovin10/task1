// Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = ({ onShowStays, onShowFlights }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <a href="/" className={styles.header__logo}>
                       Travel by Fracspace
                    </a>
                    <nav className={styles.header__nav}>
                        <a 
                            href="#"
                            className={`${styles.nav__link} ${styles.active}`}
                            onClick={(e) => {
                                e.preventDefault();
                                onShowStays();
                            }}
                        >
                            <i className="fas fa-bed"></i> 🏨 Stays
                        </a>
                        <a 
                            href="#"
                            className={styles.nav__link}
                            onClick={(e) => {
                                e.preventDefault();
                                onShowFlights();
                            }}
                        >
                            <i className="fas fa-plane"></i> 🛪 Flights
                        </a>
                        <a href="/" className={styles.nav__link}>
                            <i className="fas fa-plane-departure"></i>🛌 Flight + Hotel
                        </a>
                        <a href="/" className={styles.nav__link}>
                            <i className="fas fa-car"></i> 🚘 Car rentals
                        </a>
                        <a href="/" className={styles.nav__link}>
                            <i className="fas fa-map-marked-alt"></i> 🎪 Experiences
                        </a>
                        <a href="/" className={styles.nav__link}>
                            <i className="fas fa-taxi"></i> 🚕 Airport taxis
                        </a>
                    </nav>
                </div>
                <div className={styles.header__right}>
                    <div className={styles.header__currency}>
                        INR ₹ <span className="flag-icon flag-icon-in"></span>
                    </div>
                    <div className={styles.header__help}>
                        <i className="fas fa-question-circle"></i>
                    </div>
                    <a href="/" className={styles.header__link}>List your property</a>
                    <a href="/register" className={styles.header__button}>Register</a>
                    <a href="/signin" className={`${styles.header__button} ${styles.header__button_secondary}`}>Sign in</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
