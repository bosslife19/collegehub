 import { FaShieldAlt, FaSmile } from 'react-icons/fa';

const Sectionsabout = () => {
  return (
    <>
    <div className="bg-gray-100 py-12 px-6">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Why Choose Our Rides?
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Enjoy safe, reliable, and student-friendly car booking services designed just for you.
        </p>
      </div>

      {/* Section Content */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Safety Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <FaShieldAlt className="text-indigo-500 w-10 h-10" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Safety Comes First
            </h3>
          </div>
          
          <p className="text-gray-600">
            All our rides are tracked and monitored for your peace of mind. We ensure trained drivers and regular car maintenance for a safe experience.
          </p>
        </div>

        {/* Enjoyment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <FaSmile className="text-green-500 w-10 h-10" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Comfortable and Enjoyable Rides
            </h3>
          </div>
          
          <p className="text-gray-600">
            Enjoy spacious, clean, and air-conditioned vehicles for your trips. Booking rides has never been easier, faster, and more enjoyable.
          </p>
        </div>
      </div>
    </div>
    {/*  */}
    <div>

    </div>
    </>
  );
};

export default Sectionsabout;
