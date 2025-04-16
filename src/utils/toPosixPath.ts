/**
 * Converts a file system path to a POSIX-style public URL path.
 *
 * This function:
 * - Replaces backslashes (`\`) with forward slashes (`/`).
 * - Removes the `public/` prefix if present.
 * - Ensures the path starts with a `/` to represent a proper URL path.
 *
 * @param {string} pathString - The original file system path.
 * @returns {string} A normalized POSIX-style URL path starting with `/`.
 */
export function toPosixPath(pathString: string): string {
  // Replace backslashes with forward slashes
  let normalized = pathString.replace(/\\/g, "/");

  // Remove the "public/" prefix if it exists
  if (normalized.startsWith("public/")) {
    normalized = normalized.slice("public".length);
  }

  // Ensure the path starts with "/"
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }

  return normalized;
}
