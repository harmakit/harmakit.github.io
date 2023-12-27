// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  distDir: "out",
  output: "export",
  basePath: "/harmakit.github.io",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;