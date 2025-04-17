/**
 * Converts an absolute file system path to a POSIX-style path suitable for use as a `src` attribute in a Next.js <Image> component.
 *
 * This function:
 * - Replaces Windows-style backslashes (`\`) with forward slashes (`/`).
 * - Extracts the part of the path that comes after the `public/` folder.
 * - Ensures the resulting path starts with a forward slash (`/`), as required by Next.js.
 *
 * Useful when working with local images stored in the `public` directory and referencing them dynamically in Next.js.
 *
 * @param {string} pathString - The absolute file system path to the image.
 * @returns {string} A POSIX-style relative URL path starting with `/`, suitable for use in <Image src="..."/>.
 */
export function toSrcPath(pathString: string): string {
  // Replace backslashes with forward slashes
  let normalized = pathString.replace(/\\/g, "/");

  // Get only the path after the "public/" prefix
  normalized = normalized.split("public")[1];

  // Ensure the path starts with "/"
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }

  return normalized;
}
