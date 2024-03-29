// Import Stylesheets
import "../app/globals.css"
import "./stylesheets/antdOverride.css"
import "./stylesheets/commonClasses.css"
import "./stylesheets/layout.css"

import LayoutProvider from "./components/LayoutProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutProvider>{children}</LayoutProvider>
  );
}
