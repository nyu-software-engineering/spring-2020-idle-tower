import React, { useState, useEffect } from 'react';
import './market-research.scss';

import RestaurantList from './restaurant-list.js';


const MarketResearch = (props) => {
	/* Get data */
	// Init state
	const [data, setData] = useState(0);
	
	// Get mock data
	useEffect(() => {
		fetch('https://my.api.mockaroo.com/business.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			// if (d['error']) {
			// 	// handle mockaroo API error
			// }
			
			setData(d);
		});
	}, [])
	// 
	return (
		<div className="MarketResearch">
			<div className="MarketResearch__title">{props.title}</div>
		
			<RestaurantList response={data} key={props.title} />
		</div>
	)
}

export default MarketResearch;