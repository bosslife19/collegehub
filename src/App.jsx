import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authpage from './components/Auth/SignupSection/Homepage';
import WelcomeLottie from './alert/welcomLoading/welcomLoading';
import PageTransition from './UI/Layout/PageTransition';
import PageNotFound from './UI/PageNotFound';
import AppLayout from './UI/Layout/AppLayout';
import Homesection from './components/Dashboards/DashBoardHome/Homesection';
 import Roomates from './components/Dashboards/Roommates/Roomates';
import Chats from './components/Dashboards/Chats/Chats';
import GroupChatPage from './components/Dashboards/Community/Groupchat';
import RideBookingPage from './components/Dashboards/Rides/RidesBookingPage';
import SettingsPage from './components/Dashboards/Settings/Settings';
import Login from './components/Auth/Login&Signup/Login';
import FindBoard from './components/Navs/FindRoommates/FindBoard';
import ProtectedRoute from './UI/Layout/ProtectedRoute';
import SignUp from './components/Auth/Login&Signup/SignUp';
import Homepage from './components/Homescreen/Homepage';
import PrivacyNotice from './components/TermsAndPrivacy/Privacy';
import TermsOfService from './components/TermsAndPrivacy/Terms';
import AboutRide from './components/Navs/Rides/AboutRide';
import ServicePage from './components/Navs/Services/ServicePage';
import UserProfilePage from './components/Dashboards/Chats/UserProfile/UserProfile';
// import Homepage from './components/Auth/SignupSection/Homepage';
// import AppLayout from './UI/Layout/AppLayout';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <WelcomeLottie onComplete={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          {/* <AuthProvider> */}
            <Routes>
              {/* Public Routes */}
              <Route
                path="/login"
                element={
                  <PageTransition>
                    {" "}
                    <Login />{" "} 
                  </PageTransition>
                }
              />
              <Route path="/signup" element={<SignUp />} />

              {/* Homescreen */}
              <Route path="/home" element={<Homepage />} />
             
              {/* Find a roommate */}
              <Route path="/find-a-Roommate" element={<FindBoard />} />
              
              {/* privacy */}
              <Route path="/privacy-notice" element={<PrivacyNotice />} />
              
              {/* Find a roommate */}
               <Route path="/terms-of-service" element={<TermsOfService />} />

              {/* Find a roommate */}
              <Route path="/ride" element={<AboutRide />} />

               {/* service */}
               <Route path="/service" element={<ServicePage />} />

              
              
              {/* Admin Routes */}

              <Route
                path="/"
                element={
                  // <ProtectedRoute>
                    <AppLayout />
                //  </ProtectedRoute>
                }
              >
                {/* Default Dashboard Route */}
                <Route index element={<Homesection />} />

                {/* Dashboard Route */}
                <Route
                  path="/dashboard"
                  element={
                    // <PageTransition >
                    <Homesection />
                    // </PageTransition>
                  }
                />

                 {/* Roommates */}
                <Route path="/roommates" element={<Roomates />} />

                {/* ChatPage */}
                <Route
                  path="/messages"
                  element={<Chats />}
                />

                 {/* Profile Details*/}
                 <Route
                  path="/user/:userId"
                  element={<UserProfilePage />}
                />



                {/* GroupChatPage*/}
                <Route path="/community-group-chat" element={<GroupChatPage />} />

                {/* Rides */}
                <Route
                  path="/Rides"
                  element={<RideBookingPage/>}
                />

                {/* SettingsPage */}
                <Route path="/settings" element={<SettingsPage />} />

              </Route>

              {/* Fallback Route */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          {/* </AuthProvider> */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App
