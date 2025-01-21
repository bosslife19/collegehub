import { useState } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { BiSearch } from "react-icons/bi";
import home from "../../../assets/Icons.png";
import cases from "../../../assets/Icons (1).png";
import locat from "../../../assets/Icons (2).png";

const RideBookingPage = () => {
  const [rideDetails, setRideDetails] = useState({
    pickup: "",
    destination: "",
    pickupCoordinates: null,
    destinationCoordinates: null,
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMapClick = (event) => {
    if (event.latLng) {
      const { lat, lng } = event.latLng.toJSON();
      if (!rideDetails.pickupCoordinates) {
        setRideDetails((prev) => ({
          ...prev,
          pickupCoordinates: { lat, lng },
        }));
      } else {
        setRideDetails((prev) => ({
          ...prev,
          destinationCoordinates: { lat, lng },
        }));
      }
    }
  };

  const handleBookRide = () => {
    if (!rideDetails.pickup || !rideDetails.destination) {
      alert("Please fill in both pickup and destination!");
      return;
    }

    alert(`Ride booked successfully from ${rideDetails.pickup} to ${rideDetails.destination}`);
  };

  const fetchDirections = () => {
    if (rideDetails.pickupCoordinates && rideDetails.destinationCoordinates) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: rideDetails.pickupCoordinates,
          destination: rideDetails.destinationCoordinates,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            alert("Unable to find directions!");
          }
        }
      );
    }
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 37.7749, // Default center (San Francisco)
    lng: -122.4194,
  };

  return (
    <div className=" font-poppins h-[120vh] pb-[50%] bg-[#F4E2EF]">
      <div className="lg:w-2/2 xl:w-2/4 m-auto mb-[10px] rounded-md flex bg-[#91447B] flex-col text-[#fff] justify-center px-[20px] py-[30px]">
        <h1 className="text-[20px] leading-[20px] font-[600]">Hi Roger</h1>
        <p className="text-[#E3D0DE] text-[14px] leading-[33px] font-[400]">Where are you going today?</p>

        <div className="flex flex-col items-center bg-[#91447B] text-[#E3D0DE] pt-[10px] ">
          <input
            type="text"
            name="pickup"
            placeholder="Type your pickup location"
            value={rideDetails.pickup}
            onChange={handleInputChange}
            className="rounded-[10px] p-[16px] text-[#fff] bg-[#AB6B99] opacity-[0.7] outline-none mb-4 w-full placeholder:text-[#fff]"
          />
          <div className="flex p-[16px] rounded-[10px] justify-between items-center w-full bg-[#AB6B99] opacity-[0.7]">
            <input
              type="text"
              name="destination"
              placeholder="Enter destination"
              value={rideDetails.destination}
              onChange={handleInputChange}
              className="text-[#fff] outline-none bg-transparent w-full placeholder:text-[#fff]"
            />
            <div className="px-3 text-[20px] pb-0 text-[#fff]">
              <BiSearch />
            </div>
          </div>
          <div className="flex justify-between w-full pt-[10px]">
            <div className="gap-3 flex">
              <button
                onClick={fetchDirections}
                className="bg-[#AB6B99] flex items-center text-[#fff] text-[12px] px-[10px]   md:py-[10px] rounded font-semibold"
              >
                Home
                <img src={home} className="w-[15px] md:w-[30px]" alt="Home Icon" />
              </button>
              <button
                onClick={fetchDirections}
                className="bg-[#AB6B99] flex items-center   text-[#fff] text-[12px] px-[10px] py-[0px] md:py-[10px] rounded font-semibold"
              >
                Class
                <img src={cases} className="w-[30px]" alt="Cases Icon" />
              </button>
              <button
                onClick={fetchDirections}
                className="bg-[#AB6B99] flex items-center text-[#fff]   text-[12px] px-[10px] py-[0px] md:py-[10px] rounded font-semibold"
              >
                Other
                <img src={locat} className="w-[30px]" alt="Location Icon" />
              </button>
            </div>
            <div>
              <button
                onClick={handleBookRide}
                className="md:bg-[#83386d] text-[11px] md:text-[14px] hover:bg-[#b749a7] transition  text-[#fff]  md:px-[10px] py-[0px] md:py-[10px] rounded font-semibold"
              >
                Book Ride
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="border-[2px] border-[#000] rounded-[10px] overflow-hidden h-[400px]">
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={handleMapClick}
        >
          {rideDetails.pickupCoordinates && <Marker position={rideDetails.pickupCoordinates} />}
          {rideDetails.destinationCoordinates && <Marker position={rideDetails.destinationCoordinates} />}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </LoadScript>
      <div className="text-center mt-4">
        {rideDetails.pickupCoordinates && (
          <p>
            Pickup Location: {rideDetails.pickupCoordinates.lat}, {rideDetails.pickupCoordinates.lng}
          </p>
        )}
        {rideDetails.destinationCoordinates && (
          <p>
            Destination Location: {rideDetails.destinationCoordinates.lat}, {rideDetails.destinationCoordinates.lng}
          </p>
        )}
      </div>
    </div>
    </div>
  );
};

export default RideBookingPage;
