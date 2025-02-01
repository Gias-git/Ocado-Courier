import React from "react";

const NotificationModal = ({ isOpen,  notifications }) => {
  if (!isOpen) return null;

  return (
    <div className=" border-primaryColor   flex items-center justify-center animate-slide-in-from-top">
      <div className="bg-white rounded-lg shadow-md w-[300px] p-4 ">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Notification</h2>
          <button
            className="text-sm text-red-500 hover:underline"
            onClick={() => alert("View all notifications")}
          >
            View all
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4 max-h-[220px]  md:max-h-[290px]  overflow-auto scrollbar-hide">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="border p-3 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">
                    {notification.date} Today
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {notification.message}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NotificationModal;
