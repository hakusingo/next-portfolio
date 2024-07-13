/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack:function(config) {
        config.module.rules.push({
            text:/\.md$/,
            use: "raw-loader",
        })
        return config
    },
};

export default nextConfig;
