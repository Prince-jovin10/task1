import React, { useState } from 'react';
import './App.css';
import Header from './fracspaceflightsbooking/Header/Header';
import Footer from './fracspaceflightsbooking/Footer/Footer';
import HomePage from './fracspaceflightsbooking/HomePage/HomePage';
import TrendingDestinations from './fracspaceflightsbooking/TrendingDestinations/TrendingDestinations';
import Deals from './fracspaceflightsbooking/Deals/Deals';
import Explore from './fracspaceflightsbooking/ExploreIndia/Explore';
import PropertyType from './fracspaceflightsbooking/PropertyTypes/PropertyTypes';
import Holiday from './fracspaceflightsbooking/Holiday/Holiday';
import Rating from './fracspaceflightsbooking/HomeGuestsLove/Rating';
import TripPlanner from './fracspaceflightsbooking/TripPlanner/TripPlanner';
import FlightsHomePage from './fracspaceflightsbooking/FlightsTab/FlightsHomePage/FlightsHomePage';
import FlightsTrip from './fracspaceflightsbooking/FlightsTab/FlightsTrip/FlightsTrip';
import Faq from './fracspaceflightsbooking/FlightsTab/FlightsFaq/Faq';

function App() {
    const [showStaysComponents, setShowStaysComponents] = useState(false);
    const [showFlightsComponents, setShowFlightsComponents] = useState(false);

    const handleShowStays = () => {
        setShowStaysComponents(true);
        setShowFlightsComponents(false);
    };

    const handleShowFlights = () => {
        setShowFlightsComponents(true);
        setShowStaysComponents(false);
    };

    return (
        <div>
            <Header onShowStays={handleShowStays} onShowFlights={handleShowFlights} />
            {showStaysComponents && (
                <>
                    <HomePage />
                    <Explore />
                    <Deals />
                    <Rating />
                    <TripPlanner />
                    <PropertyType />
                    <Holiday />
                    <TrendingDestinations />
                    <Footer />
                </>
            )}
            {showFlightsComponents && (
                <>
                    <FlightsHomePage />
                    <FlightsTrip />
                    <Faq />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
