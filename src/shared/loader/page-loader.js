import React from "react";
import Loader from "./loader";

const PageLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader className="text-gray-500 h-16 w-16" />
    </div>
  );
};

export default React.memo(PageLoader);
