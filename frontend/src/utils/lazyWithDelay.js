import { lazy } from "react";

function lazyWithDelay(importFn, delay = 300) {
  return lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
}

export default lazyWithDelay;