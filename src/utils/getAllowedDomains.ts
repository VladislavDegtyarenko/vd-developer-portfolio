export const getAllowedDomains = () => {
  console.log("process.env.ALLOWED_DOMAINS: ", process.env.ALLOWED_DOMAINS);

  return (
    process.env.ALLOWED_DOMAINS?.split(",").map((domain) => domain.trim()) ?? []
  );
};

export const getAllowedHosts = () => {
  console.log("process.env.ALLOWED_HOSTS: ", process.env.ALLOWED_HOSTS);

  return (
    process.env.ALLOWED_HOSTS?.split(",").map((host) => host.trim()) ||
    getAllowedDomains()
  );
};
