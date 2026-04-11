// a deno test script for testing the app this isnt needed any server or lack of such will run
import { serveDir } from "jsr:@std/http/file-server";
console.log("Starting server on http://localhost:8000");
Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "src", // Directory to serve
  });
});
