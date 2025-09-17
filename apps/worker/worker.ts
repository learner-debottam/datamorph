import { Worker } from "bullmq";

const worker = new Worker("jobs", async job => {
  console.log("Processing job:", job.id, job.data);
});

console.log("Worker started, listening for jobs...");
