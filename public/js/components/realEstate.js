webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
	_inherits(Filter, _Component);

	function Filter() {
		_classCallCheck(this, Filter);

		var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

		_this.state = {
			name: 'Edmond'
		};
		return _this;
	}

	_createClass(Filter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ id: 'filter' },
				_react2.default.createElement(
					'div',
					{ className: 'inside' },
					_react2.default.createElement(
						'h4',
						null,
						'Filter'
					),
					_react2.default.createElement(
						'select',
						{ name: 'neighborhood', className: 'filters neighborhood' },
						_react2.default.createElement(
							'option',
							null,
							'Ridgewood'
						)
					),
					_react2.default.createElement(
						'select',
						{ name: 'housetype', className: 'filters housetype' },
						_react2.default.createElement(
							'option',
							null,
							'Ranch'
						)
					),
					_react2.default.createElement(
						'select',
						{ name: 'bedrooms', className: 'filters bedrooms' },
						_react2.default.createElement(
							'option',
							null,
							'Two Bedroom'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters price' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Price'
						),
						_react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price' }),
						_react2.default.createElement('input', { type: 'text', name: 'max-price', className: 'max-price' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters floor-space' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Floor Space'
						),
						_react2.default.createElement('input', { type: 'text', name: 'min-floor-space', className: 'min-floor-space' }),
						_react2.default.createElement('input', { type: 'text', name: 'max-floor-space', className: 'max-floor-space' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters extras' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Extras'
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Elevators'
							),
							_react2.default.createElement('input', { name: 'extras', type: 'checkbox', value: 'elevator' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Swimming Pool'
							),
							_react2.default.createElement('input', { name: 'extras', type: 'checkbox', value: 'swimming-pool' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Finished Basement'
							),
							_react2.default.createElement('input', { name: 'extras', type: 'checkbox', value: 'swimming-pool' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Gym'
							),
							_react2.default.createElement('input', { name: 'extras', type: 'checkbox', value: 'gym' })
						)
					)
				)
			);
		}
	}]);

	return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

		_this.state = {
			name: 'Edmond'
		};
		return _this;
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'logo' },
					'Logo'
				),
				_react2.default.createElement(
					'nav',
					null,
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'Create Ads'
					),
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'About Us'
					),
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'Log In'
					),
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'register-btn' },
						'Register'
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
	_inherits(Listings, _Component);

	function Listings() {
		_classCallCheck(this, Listings);

		var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

		_this.state = {
			name: 'Edmond'
		};
		_this.loopListings = _this.loopListings.bind(_this);
		return _this;
	}

	_createClass(Listings, [{
		key: 'loopListings',
		value: function loopListings() {
			var listingsData = this.props.listingsData;


			return listingsData.map(function (listing, index) {
				return _react2.default.createElement(
					'div',
					{ className: 'col-md-3', key: index },
					_react2.default.createElement(
						'div',
						{ className: 'listing' },
						_react2.default.createElement(
							'div',
							{
								className: 'listing-img',
								style: {
									background: 'url("' + listing.image + '") no-repeat\n\t\t\t\tcenter center'
								}
							},
							_react2.default.createElement(
								'span',
								{ className: 'address' },
								listing.address
							),
							_react2.default.createElement(
								'div',
								{ className: 'details' },
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3' },
									_react2.default.createElement('div', { className: 'user-img' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-9' },
									_react2.default.createElement(
										'div',
										{ className: 'user-details' },
										_react2.default.createElement(
											'span',
											{ className: 'user-name' },
											'Nina Smith'
										),
										_react2.default.createElement(
											'span',
											{ className: 'post-date' },
											'09/15/2019'
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'listing-details' },
										_react2.default.createElement(
											'div',
											{ className: 'floor-space' },
											_react2.default.createElement('i', { className: 'fa fa-square', 'aria-hidden': 'true' }),
											_react2.default.createElement(
												'span',
												null,
												'1000 ft\xB2'
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'bedrooms' },
											_react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
											_react2.default.createElement(
												'span',
												null,
												listing.bedrooms,
												' bedrooms'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'view-btn' },
										'View Listing'
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'bottom-info' },
						_react2.default.createElement(
							'span',
							{ className: 'price' },
							'$',
							listing.price
						),
						_react2.default.createElement(
							'span',
							{ className: 'location' },
							_react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
							' ',
							listing.city,
							',',
							listing.state
						)
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ id: 'listings' },
				_react2.default.createElement(
					'section',
					{ className: 'search-area' },
					_react2.default.createElement('input', { type: 'text', name: 'search' })
				),
				_react2.default.createElement(
					'section',
					{ className: 'sortby-area' },
					_react2.default.createElement(
						'div',
						{ className: 'results' },
						'390 results found'
					),
					_react2.default.createElement(
						'div',
						{ className: 'sort-options' },
						_react2.default.createElement(
							'select',
							{ name: 'sortby', className: 'sortby' },
							_react2.default.createElement(
								'option',
								{ value: 'price-asc' },
								'Highest Price'
							),
							_react2.default.createElement(
								'option',
								{ value: 'price-dsc' },
								'Lowest Price'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'view' },
							_react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
							_react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'listings-results' },
					this.loopListings()
				),
				_react2.default.createElement(
					'section',
					{ id: 'pagination' },
					_react2.default.createElement(
						'ul',
						{ className: 'pages' },
						_react2.default.createElement(
							'li',
							null,
							'Prev'
						),
						_react2.default.createElement(
							'li',
							{ className: 'active' },
							'1'
						),
						_react2.default.createElement(
							'li',
							null,
							'2'
						),
						_react2.default.createElement(
							'li',
							null,
							'3'
						),
						_react2.default.createElement(
							'li',
							null,
							'4'
						),
						_react2.default.createElement(
							'li',
							null,
							'5'
						),
						_react2.default.createElement(
							'li',
							null,
							'Next'
						)
					)
				)
			);
		}
	}]);

	return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var listingsData = [{
	address: '20-34 Grand Ave',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 3,
	price: 220000,
	floorSpace: 2000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://i.pinimg.com/originals/eb/f7/9c/ebf79cdc441aa9d010a2d37381cfa950.jpg'
}, {
	address: '50-34 Orange Ave',
	city: 'Orlando',
	state: 'FL',
	rooms: 4,
	price: 420000,
	floorSpace: 4000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://yslshoesshop.com/wp-content/uploads/2019/03/small-modern-apartment-apartment-small-modern-exterior-design-ideas-small-modern-apartment-exterior-design.jpg'
}, {
	address: '20-36 Rich Ave',
	city: 'Richmond',
	state: 'VA',
	rooms: 2,
	price: 200000,
	floorSpace: 2100,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://senaterace2012.com/wp-content/uploads/apartment-building-design-ideas-modern-exterior_146247.jpg'
}, {
	address: '55-44 Grand Ave',
	city: 'Atlanta',
	state: 'GA',
	rooms: 3,
	price: 320000,
	floorSpace: 3000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://vondells.com/daut/as/l/a/apartment-exterior-design-best-apartments-modern-small-living-room-decorating-ideas_exterior-apartment-design-ideas_exterior_exterior-homes-designs-home-design-tool-restaurant-software-free-shutter-ho_972x525.jpg'
}, {
	address: '80 Kings Highway',
	city: 'Brooklyn',
	state: 'NY',
	rooms: 3,
	price: 450000,
	floorSpace: 2500,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://odis.homeaway.com/odis/listing/a73ae7df-fdc3-4052-8f57-fa6fbb73b5fa.c10.jpg'
}, {
	address: '30-34 Jersey Ave',
	city: 'Newark',
	state: 'NJ',
	rooms: 2,
	price: 180000,
	floorSpace: 1800,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://images1.apartments.com/i2/spqueuFThK0yXuZv980l6ZLiS86Ig17IBQTNIELWvlA/117/the-modern-fort-lee-nj-1br-15ba---916-sf.jpg'
}, {
	address: '55 Hollywood Boulevard',
	city: 'Los Angeles',
	state: 'CA',
	rooms: 3,
	price: 850000,
	floorSpace: 4000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://www.contemporist.com/wp-content/uploads/2018/07/modern-apartment-smart-glass-wall-130718-152-01-800x481.jpg'
}, {
	address: '33 Jersey Street',
	city: 'Hoboken',
	state: 'NJ',
	rooms: 4,
	price: 500000,
	floorSpace: 4000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://static.materialicious.com/images/modern-luxury-apartment-exterior-design-o_3.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {
			name: 'Edmond',
			listingsData: _listingsData2.default
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			console.log(this.state.listingsData);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(
					'section',
					{ id: 'content-area' },
					_react2.default.createElement(_Filter2.default, null),
					_react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
				)
			);
		}
	}]);

	return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);