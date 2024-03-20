// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

export function webpack(config) {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
}
export const experimental = {
    serverComponentsExternalPackages: ["mongoose"],
};