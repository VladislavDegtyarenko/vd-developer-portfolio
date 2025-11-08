/**
 * Creates a debounced version of the provided callback.
 * The callback will be invoked after the specified delay period has passed
 * without any new invocations.
 *
 * @param {number} [delay=300] - The debounce delay in milliseconds.
 * @param {() => void} [cb] - The function to debounce.
 * @returns {() => void} - The debounced function.
 */
export const debounce = (delay = 300, cb?: () => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb?.();
    }, delay);
  };
};
