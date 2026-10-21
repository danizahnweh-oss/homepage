import handler from "vinext/server/fetch-handler";
import { securityHeaders } from "./security-headers";

export default {
 async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
  const response = await handler.fetch(request, env, ctx);
  const secured = new Response(response.body, response);
  for (const { key, value } of securityHeaders) secured.headers.set(key, value);
  return secured;
 },
};
