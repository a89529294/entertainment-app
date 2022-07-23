import React from "react";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-dark-blue font-outfit">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
