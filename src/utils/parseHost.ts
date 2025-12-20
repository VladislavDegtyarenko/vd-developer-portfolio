export const parseHost = (value: string | null) => {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return value.toLowerCase();
  }
};
