// Analytics
import { Analytics } from "@vercel/analytics/react";

// Fonts
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Contexts
import { DarkModeContextProvider } from "@/contexts/DarkModeContext";
import { ScrollLockContextProvider } from "@/contexts/ScrollLockContext";
import { MobileMenuContextProvider } from "@/contexts/MobileMenuContext";
import { ProjectContextProvider } from "@/contexts/ProjectContext";

// Styled-components config
import StyledComponentsRegistry from "@/lib/registry";
import StyledThemeProvider from "./StyledThemeProvider";
import GlobalStyle from "./GlobalStyle";

// Metadata
export const metadata = {
  title: "Vladyslav Dihtiarenko",
  description:
    "Frontend Developer from Ukraine. Passionate about creating digital experiences on the web.",
  other: {
    freelancehunt: "38e96f77035b108",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <DarkModeContextProvider>
            <ScrollLockContextProvider>
              <MobileMenuContextProvider>
                <ProjectContextProvider>
                  <StyledThemeProvider>
                    <GlobalStyle />
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
