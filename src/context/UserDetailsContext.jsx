import React, { createContext, useContext, useState } from "react";

// Create a UserContext
const UserContext = createContext();

// Create a provider component to wrap around your app
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};
