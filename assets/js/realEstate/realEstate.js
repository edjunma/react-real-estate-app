import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';
import { SIGTERM } from 'constants';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Edmond',
			listingsData,
			min_price: 0,
			max_price: 10000000,
			min_floor_space: 0,
			max_floor_space: 50000,
			elevator: false,
			finished_basement: false,
			gym: false,
			swimming_pool: false,
			filteredData: listingsData
		};
		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
	}
	change(event) {
		var name = event.target.name;
		var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	}

	filteredData() {
		var newData = this.state.listingsData.filter(() => {
			return item.price >= this.state.min_price
		})
	}

	render() {
		return (
			<div>
				<Header />
				<section id='content-area'>
					<Filter change={this.change} globalState={this.state} />
					<Listings listingsData={this.state.filteredData} />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
