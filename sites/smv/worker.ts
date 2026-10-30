import handler from "vinext/server/fetch-handler";
import { securityHeaders } from "./security-headers";

export default {
 async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
  const url = new URL(request.url);
  if (url.hostname === "smv-zimmer-buchung.zahnweh.chatgpt.site") {
   url.protocol = "https:";
   url.hostname = "smv.daniel-zahnweh.de";
   url.port = "";
   return new Response(null, {
    status: 308,
    headers: { Location: url.href, ...Object.fromEntries(securityHeaders.map(({ key, value }) => [key, value])) },
   });
  }
  const response = await handler.fetch(request, env, ctx);
  const secured = new Response(response.body, response);
  for (const { key, value } of securityHeaders) secured.headers.set(key, value);
  return secured;
 },
};
