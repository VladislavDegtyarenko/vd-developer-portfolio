import { parseHost, getAllowedHosts, getAllowedDomains } from ".";

export const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return false;
  if (origin === "http://localhost:3000") return true;

  const originHost = parseHost(origin);
  if (!originHost) return false;

  const hostAllowed = getAllowedHosts().some(
    (allowedHost) => allowedHost && originHost === allowedHost.toLowerCase()
  );

  const originAllowed = getAllowedDomains().some(
    (allowed) => allowed && origin === allowed
  );

  return hostAllowed || originAllowed;
};
