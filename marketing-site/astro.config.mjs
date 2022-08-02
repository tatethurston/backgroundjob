import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  site: "https://www.backgroundjob.com",
  integrations: [serviceWorker()],
  // S3 will redirect non trailing slashes
  trailingSlash: "always",
});
