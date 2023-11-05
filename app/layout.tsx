import { Analytics } from "@vercel/analytics/react";

import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from "next/font/google";
import "./index.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import { ScrollLockContextProvider } from "./contexts/ScrollLockContext";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";
import { ProjectContextProvider } from "./contexts/ProjectContext";
import StyledThemeProvider from "./StyledThemeProvider";

export const metadata = {
  title: "Vladyslav Dihtiarenko",
  description: "Frontend developer from Ukraine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <DarkModeContextProvider>
            <ScrollLockContextProvider>
              <MobileMenuContextProvider>
                <ProjectContextProvider>
                  <StyledThemeProvider>
                    {children}
                    <Analytics />
                  </StyledThemeProvider>
                </ProjectContextProvider>
              </MobileMenuContextProvider>
            </ScrollLockContextProvider>
          </DarkModeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
