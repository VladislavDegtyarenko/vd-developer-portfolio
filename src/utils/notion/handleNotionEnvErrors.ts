export const handleNotionEnvErrors = () => {
  if (!process.env.NOTION_TOKEN) {
    throw new Error("Add NOTION_TOKEN to env");
  }

  if (!process.env.NOTION_API_ENDPOINT) {
    throw new Error("Add NOTION_API_ENDPOINT path to env");
  }

  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error("Add NOTION_DATABASE_ID to env");
  }
};
