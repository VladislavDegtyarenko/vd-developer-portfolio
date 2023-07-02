"use client";

import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from "next/font/google";
import "./index.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Vladyslav Dihtiarenko",
  description: "Frontend developer from Ukraine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
