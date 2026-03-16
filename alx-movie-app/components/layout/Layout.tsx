import React from "react";
import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Header />
      <main className="min-h-[calc(100vh-80px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
