import logo from './logo.svg';
import './App.css';
import React, { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "pk.eyJ1IjoicmFyYW0iLCJhIjoiY2t2bGRtNWN6M2ZtbzJvcGd2ZDV5eTBmMiJ9.H3XDB5QalWUljh2wEWg-iA";

  useLayoutEffect(() => {
      const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [37.61192, 55.76199],
      zoom: 10
    })
      return () => {

      }
  }, [])

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));