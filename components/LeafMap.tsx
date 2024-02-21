"use client"
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MarkerIcon from '@/../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '@/../../node_modules/leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
type PositionType = {
    lat: number,
    lng: number
};
const LeafMap = () => {
    const [position, setPosition] = useState<PositionType>({ lat: 21, lng: 72 });
    useEffect(() => {
        // navigator.geolocation?.getCurrentPosition(res => {
        //     const lat: number = res.coords.latitude;
        //     const lng: number = res.coords.longitude;
        //     setPosition((prev: PositionType) => { return { lat, lng } });
        //     L.map('map').setView(position, 9);
        // });
        fetch('https://api.ipregistry.co/?key=tryout')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                console.log('Your country is ' + json['location']['country']['name']);
            });

        // const getUserIp = () => {
        //     fetch("https://geolocation-db.com/json/41c35270-ca78-11ee-90e9-b72a16caa43d/").then(data => {
        //         console.log(data);
        //     }).catch(e => {
        //         alert('user has blocked this');
        //         console.log(e);
        //     });
        // }
        // getUserIp();
    }, []);
    return (
        <>
            <div>
                <MapContainer
                    style={{
                        height: '100vh',
                        width: '100vw'
                    }}

                    center={position}
                    zoom={9} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        icon={
                            new L.Icon({
                                iconUrl: MarkerIcon.src,
                                iconRetinaUrl: MarkerIcon.src,
                                iconSize: [25, 41],
                                iconAnchor: [12.5, 41],
                                popupAnchor: [0, -41],
                                shadowUrl: MarkerShadow.src,
                                shadowSize: [41, 41],
                            })
                        }
                        position={{ lat: 21.18873, lng: 72.82927 }}
                    // position={position}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default LeafMap

function useMapEvent(arg0: string, arg1: (e: any) => void) {
    throw new Error('Function not implemented.');
}
