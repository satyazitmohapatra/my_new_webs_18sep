import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'my_new_webs_18sep';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
