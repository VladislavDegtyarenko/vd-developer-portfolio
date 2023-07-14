import { useTheme } from "styled-components";
import ContentLoader from "react-content-loader";

const ProjectsSliderSkeleton = () => {
  const theme = useTheme();

  return (
    <ContentLoader
      viewBox="0 0 400 200"
      width={"100%"}
      height={392}
      title="Loading project slider..."
      backgroundColor={theme.cardBg}
      foregroundColor={theme.cyan}
    >
      <rect x="0" y="40" rx="16" ry="16" width="160" height="160" />
      <rect x="170" y="78" rx="0" ry="0" width="100" height="15" />
      <rect x="170" y="98" rx="0" ry="c0" width="240" height="9" />
      <rect x="170" y="110" rx="0" ry="c0" width="240" height="9" />
      <rect x="170" y="122" rx="0" ry="c0" width="200" height="9" />
      <rect x="170" y="136" rx="4" ry="4" width="60" height="20" />
      <rect x="234" y="136" rx="4" ry="4" width="60" height="20" />
    </ContentLoader>
  );
};

export default ProjectsSliderSkeleton;
