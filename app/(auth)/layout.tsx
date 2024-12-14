import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="h-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
