"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const handler_1 = require("../src/handler");
describe("handler returns response with request method", () => {
    const methods = [
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "TRACE",
        "PATCH",
    ];
    methods.forEach((method) => {
        it(method, async () => {
            const result = await handler_1.handleRequest(new Request("/", { method }));
            const text = await result.text();
            chai_1.expect(text).to.include(method);
        });
    });
});
//# sourceMappingURL=handler.js.map