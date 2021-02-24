import { WiStormShowers } from "weather-icons-react";

const StormLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiStormShowers size={30} color='lightblue' />
    </div>
  )
}

export default StormLocationMarker