"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.links = void 0;
exports.links = [
    {
        name: "LinkedIn profile",
        url: "https://www.linkedin.com/in/anish1712",
    },
    {
        name: "Github profile",
        url: "https://github.com/anishagg17",
    },
    {
        name: "Portfolio",
        url: "https://anishagg17.github.io/",
    },
];
exports.default = (request) => {
    const init = {
        headers: { "content-type": "application/json" },
    };
    const body = JSON.stringify(exports.links);
    return new Response(body, init);
};
//# sourceMappingURL=link.js.map