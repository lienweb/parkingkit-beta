import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import L from 'leaflet';


function Button(){
  const map = useMap()
  function handleOnFindLocation() {
    map.locate({
      setView: true,
    });
  }

  useEffect(()=>{
    if(!map) return;
    const buttonControl = L.control({
      position: 'topright'
    })
    // console.log(buttonControl)

    buttonControl.onAdd = function(map) {
      this._div = L.DomUtil.create('div', 'btnWrapper')
      const buttonElement = `<button onClick={handleOnFindLocation}>find my location</button>`
      this._div.innerHTML = buttonElement
      return this._div
    }
    buttonControl.addTo(map)
    console.log('create control')

    return () => {
      //map.remove(buttonControl) //表示destroy map but it's created by useContext, 不需cleanup
      buttonControl.remove() //should cleanup control otherwise re-render
    }
  }, [])
}

export default Button;