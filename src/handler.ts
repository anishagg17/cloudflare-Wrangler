import Router from "./routes";
import linksRequestHandler from "./routes/link";
import defaultRequestHandler from "./routes/default";

export async function handleRequest(request: Request): Promise<Response> {
  const r = new Router();
  r.get("/links", (request: Request) => linksRequestHandler(request));
  r.all(async (request: Request) => await defaultRequestHandler(request));
  const response = await r.route(request);
  return response;
}
