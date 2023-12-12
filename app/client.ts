import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE as string,
  environment: "master",
  accessToken: process.env.ACCESS_TOKEN as string,
});

export default client;
