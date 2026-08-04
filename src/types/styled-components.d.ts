import "styled-components";
import type { AppTheme } from "@/app/StyledThemeProvider";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
