!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var s = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          n.d(
            r,
            s,
            function (e) {
              return t[e];
            }.bind(null, s),
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.links = void 0),
      (e.links = [
        {
          name: "LinkedIn profile",
          url: "https://www.linkedin.com/in/anish1712",
        },
        { name: "Github profile", url: "https://github.com/anishagg17" },
        { name: "Portfolio", url: "https://anishagg17.github.io/" },
      ]);
    e.default = (t) => {
      const n = JSON.stringify(e.links);
      return new Response(n, {
        headers: { "content-type": "application/json" },
      });
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = n(2);
    addEventListener("fetch", (t) => {
      t.respondWith(r.handleRequest(t.request));
    });
  },
  function (t, e, n) {
    "use strict";
    var r =
      (this && this.__importDefault) ||
      function (t) {
        return t && t.__esModule ? t : { default: t };
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.handleRequest = void 0);
    const s = r(n(3)),
      o = r(n(0)),
      i = r(n(4));
    e.handleRequest = async function (t) {
      const e = new s.default();
      return (
        e.get("/links", (t) => o.default(t)),
        e.all(async (t) => await i.default(t)),
        await e.route(t)
      );
    };
  },
  function (t, e) {
    const n = (t) => (e) => e.method.toLowerCase() === t.toLowerCase(),
      r = n("connect"),
      s = n("delete"),
      o = n("get"),
      i = n("head"),
      a = n("options"),
      l = n("patch"),
      u = n("post"),
      c = n("put"),
      h = n("trace"),
      d = (t) => (e) => {
        const n = new URL(e.url).pathname;
        return (n.match(t) || [])[0] === n;
      };
    t.exports = class {
      constructor() {
        this.routes = [];
      }
      handle(t, e) {
        return this.routes.push({ conditions: t, handler: e }), this;
      }
      connect(t, e) {
        return this.handle([r, d(t)], e);
      }
      delete(t, e) {
        return this.handle([s, d(t)], e);
      }
      get(t, e) {
        return this.handle([o, d(t)], e);
      }
      head(t, e) {
        return this.handle([i, d(t)], e);
      }
      options(t, e) {
        return this.handle([a, d(t)], e);
      }
      patch(t, e) {
        return this.handle([l, d(t)], e);
      }
      post(t, e) {
        return this.handle([u, d(t)], e);
      }
      put(t, e) {
        return this.handle([c, d(t)], e);
      }
      trace(t, e) {
        return this.handle([h, d(t)], e);
      }
      all(t) {
        return this.handle([], t);
      }
      route(t) {
        const e = this.resolve(t);
        return e
          ? e.handler(t)
          : new Response("resource not found", {
              status: 404,
              statusText: "not found",
              headers: { "content-type": "text/plain" },
            });
      }
      resolve(t) {
        return this.routes.find(
          (e) =>
            !(e.conditions && (!Array.isArray(e) || e.conditions.length)) ||
            ("function" == typeof e.conditions
              ? e.conditions(t)
              : e.conditions.every((e) => e(t))),
        );
      }
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = n(0),
      s = [
        {
          name:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <title>Facebook</title>\n        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>\n      </svg>',
          url: "https://www.facebook.com/anish1712",
        },
        {
          name:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <title>Instagram</title>\n        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>\n      </svg>',
          url: "https://www.instagram.com/who_is_anish/",
        },
        {
          name:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <title>GitHub</title>\n        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>\n      </svg>',
          url: "https://github.com/anishagg17",
        },
        {
          name:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <title>LinkedIn</title>\n        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>\n      </svg>',
          url: "https://www.linkedin.com/in/anish1712",
        },
      ];
    class o {
      constructor(t) {
        this.links = t;
      }
      getElement(t) {
        return `<a href='${t.url}'>${t.name}</a>`;
      }
      element(t) {
        this.links.forEach((e) => {
          t.append(this.getElement(e), { html: !0 });
        });
      }
    }
    class i {
      element(t) {
        t.removeAttribute("style");
      }
    }
    class a {
      constructor(t, e) {
        (this.name = t), (this.value = e);
      }
      element(t) {
        t.setAttribute(this.name, this.value);
      }
    }
    class l {
      constructor(t) {
        this.textString = t;
      }
      element(t) {
        t.setInnerContent(this.textString);
      }
    }
    class u {
      element(t) {
        t.removeAttribute("class"),
          t.setAttribute(
            "style",
            "background-image:\n        linear-gradient(to bottom, rgba(26,32,44,1), rgba(0,0,0,0.5))",
          );
      }
    }
    e.default = async (t) => {
      const e = await fetch(
        "https://static-links-page.signalnerve.workers.dev",
      );
      return new HTMLRewriter()
        .on("div#links", new o(r.links))
        .on("div#profile", new i())
        .on(
          "img#avatar",
          new a(
            "src",
            "https://avatars1.githubusercontent.com/u/43617894?s=460&u=dbca224ad55b6804a7525879fc9b2e3e0125ff92&v=4",
          ),
        )
        .on("h1#name", new l("Anish Aggarwal"))
        .on("title", new l("Anish Aggarwal"))
        .on("div#social", new i())
        .on("div#social", new o(s))
        .on("body", new u())
        .transform(e);
    };
  },
]);
