import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Support</h4>
                    <ul className={styles.footer__list}>
                        <li>Coronavirus (COVID-19) FAQs</li>
                        <li>Manage your trips</li>
                        <li>Contact Customer Service</li>
                        <li>Safety Resource Center</li>
                    </ul>
                </div>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Discover</h4>
                    <ul className={styles.footer__list}>
                        <li>Genius loyalty program</li>
                        <li>Seasonal and holiday deals</li>
                        <li>Travel articles</li>
                        <li>Booking.com for Business</li>
                        <li>Traveller Review Awards</li>
                        <li>Car rental</li>
                        <li>Flight finder</li>
                        <li>Restaurant reservations</li>
                        <li>Booking.com for Travel Agents</li>
                    </ul>
                </div>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Terms and settings</h4>
                    <ul className={styles.footer__list}>
                        <li>Privacy & cookies</li>
                        <li>Terms & conditions</li>
                        <li>Grievance officer</li>
                        <li>Modern Slavery Statement</li>
                        <li>Human Rights Statement</li>
                    </ul>
                </div>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Partners</h4>
                    <ul className={styles.footer__list}>
                        <li>Extranet login</li>
                        <li>Partner help</li>
                        <li>List your property</li>
                        <li>Become an affiliate</li>
                    </ul>
                </div>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>About</h4>
                    <ul className={styles.footer__list}>
                        <li>About Booking.com</li>
                        <li>How We Work</li>
                        <li>Sustainability</li>
                        <li>Press center</li>
                        <li>Careers</li>
                        <li>Investor relations</li>
                        <li>Corporate contact</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footer__bottom}>
                <div className={styles.footer__currency}>
                    <span className="flag-icon flag-icon-in"></span> INR
                </div>
                <p className={styles.footer__copyright}>
                    Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
                    <br />
                    Copyright © 1996–2024 Booking.com™. All rights reserved.
                </p>
                <div className={styles.footer__logos}>
                    <img src="path/to/booking-logo.png" alt="Booking.com" />
                    <img src="path/to/priceline-logo.png" alt="Priceline" />
                    <img src="path/to/kayak-logo.png" alt="Kayak" />
                    <img src="path/to/agoda-logo.png" alt="Agoda" />
                    <img src="path/to/opentable-logo.png" alt="OpenTable" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
