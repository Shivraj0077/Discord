import path from 'path';  // Import path module

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Resolve alias for 'swr' to ensure it's properly imported
    config.resolve.alias['swr'] = path.resolve(__dirname, 'node_modules/swr');
    return config;
  },
};

export default nextConfig;
