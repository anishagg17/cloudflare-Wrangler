"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = void 0;
const routes_1 = require("./routes");
const link_1 = require("./routes/link");
const default_1 = require("./routes/default");
async function handleRequest(request) {
    const r = new routes_1.default();
    r.get("/links", (request) => link_1.default(request));
    r.all(async (request) => await default_1.default(request));
    const response = await r.route(request);
    return response;
}
exports.handleRequest = handleRequest;
//# sourceMappingURL=handler.js.map