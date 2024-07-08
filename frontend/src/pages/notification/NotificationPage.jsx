import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const NotificationPage = () => {
  const isLoading = false;
  const notifications = [
    {
      _id: "1",
      from: {
        _id: "1",
        username: "johndoe",
        profileImg: "/avatars/boy2.png",
      },
      type: "follow",
    },
    {
      _id: "2",
      from: {
        _id: "2",
        username: "janedoe",
        profileImg: "/avatars/girl1.png",
      },
      type: "like",
    },
  ];
  const deleteNotification = () => {
    alert("All notifications deleted");
  };
  return (
    <>
      <div className="flex-[4_4_0] border-l border-r border-gray-700 min-h-screen">
        <div className="">
          <p>Notifications</p>
          <div>
            <div>
              <IoSettingsOutline className="w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
