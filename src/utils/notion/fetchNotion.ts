import { handleNotionEnvErrors } from "./handleNotionEnvErrors";

export const fetchNotion = async (url: string, options: RequestInit) => {
  handleNotionEnvErrors();

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorObject = await res.json();
      throw new Error(
        `Error: ${errorObject?.message || "Unknown error"} Status: ${
          res.status
        }`
      );
    }

    return await res.json();
  } catch (error) {
    console.error(
      `Error fetching Notion data in ${fetchNotion.name}: ${error}`
    );

    return null;
  }
};
