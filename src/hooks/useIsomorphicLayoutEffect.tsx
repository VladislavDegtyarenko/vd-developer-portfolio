// use-isomorphic-layout-effect.js
import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "@/utils/isBrowser";

const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
