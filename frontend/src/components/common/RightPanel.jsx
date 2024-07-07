import React from "react";
import RightPanelSkeletion from "../skeletons/RightPanelSkeletion";
import { USERS_FOR_RIGHT_PANEL } from "../../utils/db/dummy";
import { Link } from "react-router-dom";
const RightPanel = () => {
  const isLoading = true;
  return (
    <div>
      <div className="hidden lg:block my-4 mx-2">
        <div className="bg-[#16181c] p-4 rounded-md sticky top-2">
          <p className="font-bold">Who to follow</p>
          <div className="flex flex-col gap-4">
            {isLoading && (
              <>
                <RightPanelSkeletion />
                <RightPanelSkeletion />
                <RightPanelSkeletion />
                <RightPanelSkeletion />
              </>
            )}
            {!isLoading &&
              USERS_FOR_RIGHT_PANEL?.map((user) => (
                <Link
                  to={`/profile/${user.username}`}
                  className="flex items-center justify-between gap-4"
                  key={user._id}
                >
                  <div className="flex gap-2 items-center">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={user.profileImg} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold tracking-tight truncate w-28">
                        {user.fullName}
                      </span>
                      <span className="text-sm text-slate-500">
                        @{user.username}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn bg-white text-black hover:bg-white hover:opacity-80 hover: rounded-full btn-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      Follow
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
