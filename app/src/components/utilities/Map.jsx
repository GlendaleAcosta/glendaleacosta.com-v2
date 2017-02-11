import React from 'react';

import Map from './dumbMap';
import { getVehicles } from './apiUtils';

/*
 A component to hold the Map component. Fetches a list of vehicle locations
 on componentWillMount, and then ever 2 seconds. 
 */
export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		// This is where we'll store vehicle locations and headings once we get them.

	}

	componentWillMount() {

	}

	render() {
		return (
			// I noticed the vh is important here.
			// Setting it to 100% will cause a component of height 0px to be rendered instead
			<div style={{ height: '100vh' }}>
				<Map
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			</div>
		);
	}
}