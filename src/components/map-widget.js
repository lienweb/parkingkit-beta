import "leaflet/dist/leaflet.css";
import Icon from '../assets/marker.png';
import L from "leaflet";

export class MapWidget {
  constructor(domNode) {
    this.map = L.map(domNode, {
      zoomControl: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: false,
      scrollWheelZoom: false,
      zoomAnimation: false,
      touchZoom: false,
      zoomSnap: 0.1
    });

    // 設定圖資來源
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
    this.map.setView([51.505, -0.09], 13);

    // marker & popup
    const myIcon = L.icon({
      iconUrl: Icon,
      iconSize: [24, 24]
    })
    L.marker([51.5, -0.09], myIcon)
      .addTo(this.map)
      .bindPopup('test')
      .openPopup();
  }
  setZoom(level) {
    this.map.setZoom(level);
  }
}
