"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// set up global namespace for worker environment
const makeServiceWorkerEnv = require("service-worker-mock");
Object.assign(global, makeServiceWorkerEnv());
//# sourceMappingURL=_setup.js.map