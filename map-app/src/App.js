
import React, { useLayoutEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function App() {

  const [marker, setMarker] = useState('');

  mapboxgl.accessToken = "pk.eyJ1IjoicmFyYW0iLCJhIjoiY2t2bGRtNWN6M2ZtbzJvcGd2ZDV5eTBmMiJ9.H3XDB5QalWUljh2wEWg-iA";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });

    const marker = new mapboxgl.Marker()
    marker.setLngLat([37.610641, 55.761994])
    marker.addTo(map)
    setMarker(marker)
  }, []);

  function handleStoreChange(e){
    marker.setLngLat(stores[e.target.value]);
  }

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleStoreChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}