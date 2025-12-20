export const getAllowedDomains = () => {
  return (
    process.env.ALLOWED_DOMAINS?.split(",").map((domain) => domain.trim()) ?? []
  );
};

export const getAllowedHosts = () => {
  return (
    process.env.ALLOWED_HOSTS?.split(",").map((host) => host.trim()) ||
    getAllowedDomains()
  );
};
