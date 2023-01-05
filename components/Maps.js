import * as React from 'react';
import { getCenter } from 'geolib';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

import Link from 'next/link';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoidGVndWhkYXJtYSIsImEiOiJja3psNjRneWsxNHQ1Mm5ueXh2dThpY2xuIn0.EOP9mO-H8NKTAW6jcvX7KQ'; // Set your mapbox token here

export default function Maps() {
  const [showPopup, setShowPopup] = useState({});
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 133.91782211030434,
          latitude: 34.66236717301612,
          zoom: 16,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          longitude={133.91782211030434}
          latitude={34.66236717301612}
          anchor="bottom"
          color="red"
        >
          <p
            role="img"
            onClick={() => setShowPopup()}
            className="cursor-pointer text-2xl text-red-500 animate-bounce "
            aria-label="push-pin"
          ></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Marker>
      </Map>
    </div>
  );
}
