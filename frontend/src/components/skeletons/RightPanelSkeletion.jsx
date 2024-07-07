import React from "react";

const RightPanelSkeletion = () => {
  return (
    <div>
      <div className="flex w-52 flex-col gap-4 my-2">
        <div className="flex items-center gap-2">
          <div className="skeleton h-8 w-8 shrink-0 rounded-full"></div>
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col gap-1">
              <div className="skeleton h-2 w-12"></div>
              <div className="skeleton h-2 w-16"></div>
            </div>
            <div className="skeleton h-6 w-14 rounded-full"></div>
          </div>
        </div>
        {/* <div className="skeleton h-32 w-full"></div> */}
      </div>
    </div>
  );
};

export default RightPanelSkeletion;
