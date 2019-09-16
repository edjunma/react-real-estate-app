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
			<section id='listings'>
				{/* Search Area */}
				<section className='search-area'>
					<input type='text' name='search' />
				</section>
				{/* Sort By Section */}
				<section className='sortby-area'>
					<div className='results'>390 results found</div>
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

				{/* Listing 1 */}
				<section className='listings-results'>
					<div className='col-md-3'>
						<div className='listing'>
							<div className='listing-img'>
								<span className='address'>23 Dexi Hills</span>
								<div className='details'>
									<div className='col-md-3'>
										<div className='user-img'></div>
									</div>
									<div className='col-md-9'>
										<div className='user-details'>
											<span className='user-name'>Nina Smith</span>
											<span className='post-date'>09/15/2019</span>
										</div>
										<div className='listing-details'>
											<div className='floor-space'>
												<i className='fa fa-square' aria-hidden='true'></i>
												<span>1000 ft&sup2;</span>
											</div>
											<div className='bedrooms'>
												<i className='fa fa-bed' aria-hidden='true'></i>
												<span>3 bedrooms</span>
											</div>
										</div>
										<div className='view-btn'>View Listing</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Listing 2 */}
					<div className='col-md-3'>
						<div className='listing'>
							<div className='listing-img'>
								<span className='address'>23 Dexi Hills</span>
								<div className='details'>
									<div className='col-md-3'>
										<div className='user-img'></div>
									</div>
									<div className='col-md-9'>
										<div className='user-details'>
											<span className='user-name'>Nina Smith</span>
											<span className='post-date'>09/15/2019</span>
										</div>
										<div className='listing-details'>
											<div className='floor-space'>
												<i className='fa fa-square' aria-hidden='true'></i>
												<span>1000 ft&sup2;</span>
											</div>
											<div className='bedrooms'>
												<i className='fa fa-bed' aria-hidden='true'></i>
												<span>3 bedrooms</span>
											</div>
										</div>
										<div className='view-btn'>View Listing</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Listing 3 */}
					<div className='col-md-3'>
						<div className='listing'>
							<div className='listing-img'>
								<span className='address'>23 Dexi Hills</span>
								<div className='details'>
									<div className='col-md-3'>
										<div className='user-img'></div>
									</div>
									<div className='col-md-9'>
										<div className='user-details'>
											<span className='user-name'>Nina Smith</span>
											<span className='post-date'>09/15/2019</span>
										</div>
										<div className='listing-details'>
											<div className='floor-space'>
												<i className='fa fa-square' aria-hidden='true'></i>
												<span>1000 ft&sup2;</span>
											</div>
											<div className='bedrooms'>
												<i className='fa fa-bed' aria-hidden='true'></i>
												<span>3 bedrooms</span>
											</div>
										</div>
										<div className='view-btn'>View Listing</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Listing 4 */}
					<div className='col-md-3'>
						<div className='listing'>
							<div className='listing-img'>
								<span className='address'>23 Dexi Hills</span>
								<div className='details'>
									<div className='col-md-3'>
										<div className='user-img'></div>
									</div>
									<div className='col-md-9'>
										<div className='user-details'>
											<span className='user-name'>Nina Smith</span>
											<span className='post-date'>09/15/2019</span>
										</div>
										<div className='listing-details'>
											<div className='floor-space'>
												<i className='fa fa-square' aria-hidden='true'></i>
												<span>1000 ft&sup2;</span>
											</div>
											<div className='bedrooms'>
												<i className='fa fa-bed' aria-hidden='true'></i>
												<span>3 bedrooms</span>
											</div>
										</div>
										<div className='view-btn'>View Listing</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='bottom-info'>
						<span className='price'>$1000 / month </span>
						<span className='location'>
							<i className='fa fa-map-marker' aria-hidden='true'></i> Ridgewood, NY
						</span>
					</div>
				</section>
				{/* Pagination */}
				<section id='pagination'>
					<ul className='pages'>
						<li>Prev</li>
						<li className='active'>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}
