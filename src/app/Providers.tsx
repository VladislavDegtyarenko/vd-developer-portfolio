"use client";

import { ReactNode } from "react";

// Contexts
import { ScrollLockContextProvider } from "@/contexts/ScrollLockContext";
import { MobileMenuContextProvider } from "@/contexts/MobileMenuContext";
import { ProjectContextProvider } from "@/contexts/ProjectContext";
import { HomepageActiveSectionContextProvider } from "@/contexts/HomepageActiveSectionContext";
import { ThemeProvider } from "next-themes";

// Styled-components config
import StyledComponentsRegistry from "@/lib/registry";
import StyledThemeProvider from "./StyledThemeProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <ScrollLockContextProvider>
          <MobileMenuContextProvider>
            <ProjectContextProvider>
              <HomepageActiveSectionContextProvider>
                <StyledThemeProvider>{children}</StyledThemeProvider>
              </HomepageActiveSectionContextProvider>
            </ProjectContextProvider>
          </MobileMenuContextProvider>
        </ScrollLockContextProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
