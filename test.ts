// A Deno test script for testing the app. This isn't needed as the app can run without a server.
import { serveDir } from "https://deno.land/std@0.210.0/http/file_server.ts";

declare const Deno: any;

console.log("Starting server on http://localhost:8000");
Deno.serve((req: any) => {
  return serveDir(req, {
    fsRoot: "src", // Directory to serve
  });
});

// check for exit in console input
console.log("Type 'exit' to stop the server.");
const decoder = new TextDecoder();
for await (const chunk of Deno.stdin.readable) {
  const input = decoder.decode(chunk).trim();
  if (input === "exit") {
    console.log("Stopping server...");
    Deno.exit(0);
  }
}
