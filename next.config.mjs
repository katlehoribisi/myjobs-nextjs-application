// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
    // target: 'experimental-serverless-trace'
    webpack: (config) => {
        config.experiments = config.experiments || {};
        config.experiments.topLevelAwait = true;
        return config;
    }, 
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    }
}