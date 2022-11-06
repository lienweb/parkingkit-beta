import { useState } from "react";

export default function CurrentPos(){
  // let isLocated = false;
  // const [currentPos, getCurrentPosition] = 
  //   useState({ lat: position.coords.latitude, lng: position.coords.longitude})

  // function handleClick() {

  //   mapLink.href = '';
  //   mapLink.textContent = '';

  //   function success(position) {
  //     status.textContent = '';
  //     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  //   }

  //   function error() {
  //     status.textContent = 'Unable to retrieve your location';
  //   }

  //   if (!navigator.geolocation) {
  //     status.textContent = 'Geolocation is not supported by your browser';
  //   } else {
  //     status.textContent = 'Locating…';
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   }
  // }
  return (
    <>
      {/* <button id="find-me" onClick={handleClick}>Show my location</button><br />
      <p id="status">{
        // isLocated ? () : ()
      }</p> */}
      <a id="map-link" target="_blank" href={""}></a>
    </>
  )
}