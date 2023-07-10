<script src="https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"></script>;

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
