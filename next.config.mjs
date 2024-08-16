import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    automaticVercelMonitors: true,
  }
);
