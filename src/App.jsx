import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authpage from './components/Auth/SignupSection/Authpage';
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
                    <Authpage />{" "} 
                  </PageTransition>
                }
              />
              <Route path="/Signup" element={<Authpage />} />

              {/* Starting Website Route */}
{/*  
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayouts />
                  </ProtectedRoute>
                }
              >
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <PageTransitionin>
                        <Dashboard />
                      </PageTransitionin>
                    </ProtectedRoute>
                  }
                />

                <Route index element={<Dashboard />} />
                <Route path="inbox-contents" element={<InboxContent />} />

                <Route path="/payoutDetails" element={<PayoutDetail />} />

                <Route path="/Payments" element={<Payments />} />

                <Route path="payout" element={<PayoutPag />} />

                <Route path="transactions" element={<TransactionPag />} />

                <Route path="settings" element={<SettingsManagemen />} />
              </Route> */}

              {/* End of website Route */}

              {/* start Admin Route */}

              {/* Admin Routes */}

              <Route
                path="/"
                element={
                  // <ProtectedRoute>
                    <AppLayout />
                  // </ProtectedRoute>
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

                 {/* Rides */}
                <Route path="/Roommates" element={<Roomates />} />

                {/* ChatPage */}
                <Route
                  path="/Messages"
                  element={<Chats />}
                />

                {/* GroupChatPage*/}
                <Route path="/CommunityGroupchat" element={<GroupChatPage />} />

                {/* Transactions */}
                <Route
                  path="/Rides"
                  element={<RideBookingPage/>}
                />

                {/* SettingsPage */}
                <Route path="/settings" element={<SettingsPage />} />

                {/* Payout Details */}
                {/* <Route path="/admin/pays" element={<PayoutDetails />} /> */}

                {/* Settings */}
                {/* <Route
                  path="/admin/settings"
                  element={<SettingsManagement />}
                /> */}

                {/* User Management */}
                {/* <Route path="/admin/users" element={<UserManagement />} /> */}

                {/* User Details */}
                {/* <Route path="/admin/userBoard" element={<UserDetailsPage />} /> */}

                {/* Facilities */}
                {/* <Route path="/admin/facilities" element={<Facilities />} /> */}
                {/* Receive */}
  
                {/* Health Facility */}
                {/* <Route
                  path="/admin/healthFacility"
                  element={<HealthDetailsPage />}
                /> */}

                {/* Teams Management */}
                {/* <Route path="/admin/team" element={<Teamsmanagement />} /> */}

                {/* Team Details */}
                {/* <Route path="/admin/teamUser" element={<TeamsDetails />} /> */}
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
