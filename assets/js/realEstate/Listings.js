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
			<section className='listings'>
				{/* Search Area */}
				<section className='search-area'>
					<input type='text' name='search' />
				</section>
				{/* Sort By Section */}
				<section className='sortby-area'>
					<div>390 results found</div>
					<div className='sort-options'>
						<select name='sortby' className='sortby'>
							<option value='price-asc'>Highest Price</option>
							<option value='price-dsc'>Lowest Price</option>
						</select>
						<div className='view'>
							<i className='fa fa-th-list' aria-hidden='true'></i>
							<i className='fa fa-th' aria-hidden='true'></i>
						</div>
					</div>
				</section>
				{/* Listings */}
				<section className='listings-results'>
					<div className='listing'>
						<div className='listing-img'>
							<span className='Address'>Address</span>
							<div className='details'>
								<div className='user-img'></div>
								<div className='user-details'>
									<span className='user-name'>Nina Smith</span>
									<span className='post-date'>09/15/2019</span>
								</div>
								<div className='listing-details'>
									<div className='floor-space'>
										<i className='fa fa-square-o' aria-hidden='true'></i> 1000 ft&sup2;
									</div>
									<i className='fa fa-bed' aria-hidden='true'></i>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Pagination */}
				<section className='pagination'></section>
			</section>
		);
	}
}
