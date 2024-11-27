import path from 'path';  // Import path module

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // No need for SWR alias anymore
    return config;
  },
  images : {
    domains: ["uploadthing.com", "utfs.io"],
  },
};

export default nextConfig;
