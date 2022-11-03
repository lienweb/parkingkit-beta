import { useState, useEffect } from "react"

export default function LoginGoogle(){
  const [parkingLot, setParkingLot] = useState({})
  const [info, setInfo] = useState({})

  // second parameter determine when to run after render process
  useEffect(()=>{
    fetch("https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json")
    .then(res => res.json())
      .then(data => setParkingLot(data))
      console.log('useEffect')
      const convert = JSON.parse(parkingLot)
      setInfo(convert)
  }, []) //run req only on 1st render

  return (
    <>
      <h1>This is Google Login</h1>
      {/* <p>{JSON.stringify(parkingLot)}</p> */}
      <p>{info}</p>
    </>
  )
}
