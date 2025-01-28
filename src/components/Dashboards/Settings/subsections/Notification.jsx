const notifications = [
  { id: 1, message: "Your account has been successfully updated.", cause: "Account settings were modified.", time: "2 hours ago" },
  { id: 2, message: "You have a new message from Support.", cause: "A response to your recent inquiry.", time: "5 hours ago" },
  { id: 3, message: "Your password was changed successfully.", cause: "You updated your password via the settings page.", time: "1 day ago" },
  { id: 4, message: "New features have been added to your account.", cause: "We recently rolled out a feature update.", time: "3 days ago" },
  { id: 5, message: "Your profile picture has been updated.", cause: "You uploaded a new picture.", time: "5 days ago" },
  { id: 6, message: "A new login was detected on your account.", cause: "Login from a new device detected.", time: "1 week ago" },
  { id: 7, message: "Your subscription has been renewed.", cause: "Automatic renewal completed.", time: "2 weeks ago" },
];

const Notification = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-500 text-sm">Stay updated with the latest activities on your account.</p>
      </div>

      {/* Notification List */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg h-96 overflow-y-auto">
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center justify-between gap-4 border-b border-gray-200 p-4 last:border-none"
            >
              <div className="flex flex-col gap-2">
                {/* Green Dot and Main Content */}
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="text-gray-700 font-medium">{notification.message}</p>
                </div>
                {/* Cause Text */}
                <p className="text-gray-500 text-sm">{notification.cause}</p>
              </div>
              {/* Time on the right */}
              <span className="text-gray-500 text-sm">{notification.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
