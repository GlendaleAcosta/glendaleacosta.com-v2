import React from 'react';

import Map from './Map';

export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	render() {
		return (
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