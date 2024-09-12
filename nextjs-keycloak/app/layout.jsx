import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Next.js Keycloak",
  description: "Demo of Keycloak & Next.js",
  keywords: "Keycloak, Next.js",
};

const MainLayout = async ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
