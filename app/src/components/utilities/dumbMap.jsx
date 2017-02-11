import React from 'react';

import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

/*
 A component that displays a google maps view. Takes in 
 a list of markers as props, and displays them on the map.
 */
const Map = withGoogleMap((props) => {
	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={9}
			defaultCenter={{ lat: 38.249358, lng: -122.039966 }}
			onClick={props.onMapClick}
		/>
		
	);
});

export default Map;