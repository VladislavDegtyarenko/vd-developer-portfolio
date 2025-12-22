/**
 * Creates a throttled version of the provided callback.
 * The callback can only be invoked once per specified delay period.
 *
 * @param {number} [delay=500] - The throttle interval in milliseconds.
 * @param {() => void} [cb] - The function to throttle.
 * @returns {() => void} - The throttled function.
 */
export const throttle = (delay = 500, cb?: () => void) => {
  let isThrottled = false;

  return () => {
    if (!isThrottled) {
      cb?.();
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
};
