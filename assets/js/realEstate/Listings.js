import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Edmond'
		};
	}
	render() {
		return (
			<section className='filter'>
				<h4>Filter</h4>
				<select name='neighborhood' className='filters neighborhood'>
					<option>Ridgewood</option>
				</select>
				<select name='housetype' className='filters housetype'>
					<option>Ranch</option>
				</select>
				<select name='bedrooms' className='filters bedrooms'>
					<option>Two Bedroom</option>
				</select>
				<div className='filters price'>
					<span className='title'>Price</span>
					<input type='text' name='min-price' className='min-price' />
					<input type='text' name='max-price' className='max-price' />
				</div>
				<div className='filters floor-space'>
					<span className='title'>Floor Space</span>
					<input type='text' name='min-floor-space' className='min-floor-space' />
					<input type='text' name='max-floor-space' className='max-floor-space' />
				</div>
			</section>
		);
	}
}
