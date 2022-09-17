import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect, useRef, useState } from "react";
import Map from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const SearchableMap = (props) => {
  const { setLatLong } = props

  const [viewport, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    transitionDuration: 100,
  });

  const mapRef = useRef();
  const handleOnResult = (event) => {
    console.log(event.result);

  };
  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    setLatLong({lat: viewport.latitude, long: viewport.longitude})
    return setViewPort({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  useEffect(() => {
    setLatLong({lat: (viewport.latitude).toFixed(1), long: (viewport.longitude).toFixed(1)})
  }, [setLatLong, viewport]);

  return (
      <Map
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        width="70%"
        height="50%"
        onViewportChange={setViewPort}
        mapboxApiAccessToken={token}
      >
        <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={token}
          position="top-left"
        />
      </Map>

  );
};
export default SearchableMap;