import { NextRequest } from "next/server";
import Replicate from "replicate";

export const config = {
  runtime: "edge",
};

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req: NextRequest) {
  let prediction = await replicate.predictions.create({
    version: "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
    input: {
      prompt: "painting of a cat by andy warhol",
    },
  });
  return new Response(JSON.stringify(prediction), {
    headers: { "content-type": "application/json" },
  });
}
