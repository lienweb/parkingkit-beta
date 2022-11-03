import { useRef, useEffect } from 'react';
import { MapWidget } from './map-widget.js';

export default function MapDemo({ zoomlevel:zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  // let center = [51.505, -0.09];

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    // map.setView(center, zoomLevel);  // 建地圖、設定經緯度
    console.table(map)
    console.log(zoomLevel)
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div id="map"
      style={{ width: '100%', height: '100vh'}}
      ref={containerRef}
    >
      <button>test button</button>
    </div>
  );
}


