import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { googleMapsApiKey } from "../App";
import "./MapPage.css";

const MapPage = () => {
  const [map, setMap] = useState();
  const [searchBoxA, setSearchBoxA] = useState();
  const [searchBoxB, setSearchBoxB] = useState();
  const [pointA, setPointA] = useState();
  const [pointB, setPointB] = useState();
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [clearRoute, setClearRoute] = useState(false);

  const position = {
    lat: -3.772592,
    lng: -38.477828,
  };

  const onMapLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onLoadA = useCallback((ref) => {
    setSearchBoxA(ref);
  }, []);

  const onLoadB = useCallback((ref) => {
    setSearchBoxB(ref);
  }, []);

  const onPlacesChangedA = useCallback(() => {
    const places = searchBoxA.getPlaces();
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    setDistance(null);
    setDuration(null);
    setClearRoute(true);
  }, [searchBoxA]);

  const onPlacesChangedB = useCallback(() => {
    const places = searchBoxB.getPlaces();
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    setDistance(null);
    setDuration(null);
    setClearRoute(true);
  }, [searchBoxB]);

  const traceRoute = useCallback(() => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
      setClearRoute(false);
    }
  }, [pointA, pointB]);

  const directionsServiceOptions = useMemo(() => {
    if (origin && destination) {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    } else {
      return null;
    }
  }, [origin, destination]);

  const directionsCallback = useCallback(
    (res) => {
      if (res !== null && res.status === "OK") {
        setResponse(res);
        const route = res.routes[0].legs[0];
        setDistance(route.distance.text);
        setDuration(route.duration.text);
      } else {
        console.log(res);
      }
    },
    []
  );

  const directionsRendererOptions = useMemo(() => {
    if (response) {
      return {
        directions: response,
      };
    } else {
      return null;
    }
  }, [response]);

  const convertToCSV = (data) => {
    const rows = [
      ["origin", "destination", "distance", "duration"], // Cabeçalho
      [data.origin, data.destination, data.distance, data.duration], // Dados
    ];

    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach((rowArray) => {
      const row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    return encodeURI(csvContent);
  };

  const handleDownload = () => {
    const data = {
      origin: pointA,
      destination: pointB,
      distance: distance,
      duration: duration,
    };

    const csvContent = convertToCSV(data);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "route.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <div className="address">
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <input
                className="addressField"
                placeholder="Digite o endereço inicial"
              />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <input
                className="addressField"
                placeholder="Digite o endereço final"
              />
            </StandaloneSearchBox>
            <button onClick={traceRoute}>Traçar rota</button>
            {distance && duration && (
              <div className="routeInfo">
                <p>Distância: {distance}</p>
                <p>Duração: {duration}</p>
              </div>
            )}
            <button onClick={handleDownload}>Baixar CSV</button>
          </div>
          {!clearRoute && !response && pointA && <Marker position={pointA} />}
          {!clearRoute && !response && pointB && <Marker position={pointB} />}
          {directionsServiceOptions && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}
          {directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
