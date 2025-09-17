import Fastify from "fastify";

const server = Fastify();

server.get("/health", async () => {
  return { status: "ok" };
});

server.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 API running at ${address}`);
});
