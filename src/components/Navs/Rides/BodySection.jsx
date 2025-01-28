import React from 'react';
import { Link } from 'react-router-dom';

const CarBookingPage = () => {
  return (
    <div className="bgbanners   py-[20px] md:py-[80px] flex flex-col justify-center px-[20px] lg:px-[40px]">
      <div className="max-w-xl w-full  bg-white rounded-lg font-inter  shadow-lg p-8 ">
        {/* Title Section */}
        <h1 className="text-3xl font-extrabold font-poppins text-center text-gray-900 mb-6">
          Student Car Booking
        </h1>

        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-6 text-center">
          Book your ride with ease. Choose a pickup location, destination, and set the time for your travel. Our service is tailored to make student life easier!
        </p>

        {/* Key Information */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Affordable Rates</p>
            <p className="text-gray-600">Only $15 per trip</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Available Anytime</p>
            <p className="text-gray-600">24/7 availability</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Eco-Friendly Cars</p>
            <p className="text-gray-600">Fuel-efficient rides</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <Link to="#" className="w-full py-3 px-5 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Start Your Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarBookingPage;
