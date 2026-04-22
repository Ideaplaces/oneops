import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so the lockfile detection
    // does not accidentally pick up ../package-lock.json.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
