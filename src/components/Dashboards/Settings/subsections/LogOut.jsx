import  { useState } from "react";
import logout from "../../../../assets/logoutIcon.png";

const LogOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true); // Show the spinner and disable the button
    console.log("Logging out...");

    // Simulate a logout process with a delay
    setTimeout(() => {
      setIsLoading(false); // Hide the spinner
      console.log("Logged out");
      // Add actual logout functionality here
    }, 2000);
  };

  return (
    <div className="flex w-full items-center justify-center m-auto px-2 sm:px-2">
      <div className=" w-full bg-white p-6 flex flex-col mx-auto text-center rounded-lg  ">
        {/* Image Section */}
        <img
          src={logout}
          alt="Logout Illustration"
          className="w-[300px] h-[300px] mx-auto mb-6"
        />

        {/* Additional Text */}
        <p className="text-gray-600 my-6 font-inter">
          Logging out will end your current session. You can always log back in
          to continue using our services. If you didn't mean to logout, you can
          cancel this action.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className={`px-4 py-2 w-full md:w-[200px] rounded-lg shadow transition duration-300 flex items-center justify-center 
              ${isLoading ? "bg-gray-400 cursor-not-allowed " : "bg-red-500 hover:bg-red-600 text-white"}
            `}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 12h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.042 1.135 5.824 3 7.938l1-1.647z"
                ></path>
              </svg>
            ) : (
              "Logout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
