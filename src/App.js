import React from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/ui/Hero';
import Features from './components/layout/Features';
import Explore from './components/layout/Explore';
import Offer from './components/layout/Offer';
import Destinations from './components/layout/Destinations';
import Footer from './components/layout/Footer';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Features />
			<Explore />
			<Offer />
			<Destinations />
			<Footer />
		</>
	);
}

export default App;
