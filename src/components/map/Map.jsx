import "./Map.scss";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import Pin from "../pin/Pin.jsx";

function Map({items}){
    return (
        <MapContainer center={[-36.848, 174.763]} zoom={11} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item=> (<Pin item={item} key={item.id}/>))}
        </MapContainer>
    );
}

export default Map;